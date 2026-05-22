// map.js — Leaflet 地圖初始化、圖層管理 v2
// 改動：移除1km圈、POI水滴形標記

var map;
var estateMarkers = {};
var mtrMarkers = {};
var poiLayers = {};
var estateLayerGroup;
var mtrLayerGroup;

// 顏色映射
var ICON_COLORS = {
  mtr: '#e74c3c', cuhk: '#f39c12', estate: '#3498db',
  mall: '#e91e63', market: '#4caf50', supermarket: '#ff9800',
  restaurant: '#9c27b0', clinic: '#00bcd4', bank: '#1e88e5', hospital: '#e53935'
};

var poiColors = {
  mall: '#e91e63', market: '#4caf50', supermarket: '#ff9800',
  restaurant: '#9c27b0', clinic: '#00bcd4', bank: '#1e88e5', hospital: '#e53935'
};

// MTR/CUHK 大號雙圈標記
function createIcon(type) {
  var color = ICON_COLORS[type] || '#666';
  var isLarge = (type === 'mtr' || type === 'cuhk');
  var size = isLarge ? 14 : 11;
  var html = '<svg width="' + (size*2+8) + '" height="' + (size*2+8) + '" viewBox="0 0 ' + (size*2+8) + ' ' + (size*2+8) + '">'
    + '<circle cx="' + (size+4) + '" cy="' + (size+4) + '" r="' + size + '" fill="' + color + '" stroke="#fff" stroke-width="2"/>'
    + (isLarge ? '<circle cx="' + (size+4) + '" cy="' + (size+4) + '" r="' + (size-3) + '" fill="#fff" />' : '')
    + '</svg>';
  return L.divIcon({
    className: 'custom-marker marker-' + type,
    html: html, iconSize: [size*2+8, size*2+8], iconAnchor: [size+4, size+4], popupAnchor: [0, -(size+4)]
  });
}

// 小區 "宅" 字標記
function createEstateIcon() {
  return L.divIcon({
    className: 'custom-marker marker-estate',
    html: '<div class="estate-marker">宅</div>',
    iconSize: [26, 26], iconAnchor: [13, 13], popupAnchor: [0, -13]
  });
}

// POI 水滴形地圖釘 (SVG teardrop)
function createPOIPinIcon(category) {
  var color = poiColors[category] || '#666';
  var svg = '<svg width="22" height="34" viewBox="0 0 22 34" xmlns="http://www.w3.org/2000/svg">'
    + '<defs><filter id="shadow-' + category + '"><feDropShadow dx="0" dy="1" stdDeviation="0.8" flood-opacity="0.25"/></filter></defs>'
    + '<g filter="url(#shadow-' + category + ')">'
    + '<path d="M11 0 C4.9 0 0 4.9 0 11 C0 18.3 11 34 11 34 C11 34 22 18.3 22 11 C22 4.9 17.1 0 11 0 Z" fill="' + color + '" stroke="#fff" stroke-width="1.5"/>'
    + '<circle cx="11" cy="10" r="3.5" fill="#fff" opacity="0.85"/>'
    + '</g></svg>';
  return L.divIcon({
    className: 'custom-marker poi-pin poi-pin-' + category,
    html: svg, iconSize: [22, 34], iconAnchor: [11, 34], popupAnchor: [0, -28]
  });
}

function initMap() {
  map = L.map('map', {
    center: [22.39, 114.19], zoom: 14, zoomControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(map);

  setTimeout(function() { map.invalidateSize(); }, 200);

  // MTR 圖層
  mtrLayerGroup = L.layerGroup().addTo(map);
  MTR_STATIONS.forEach(function(station) {
    var icon = createIcon(station.icon);
    var marker = L.marker([station.lat, station.lng], { icon: icon })
      .bindPopup('<b>' + station.name + '</b><br>' + station.nameEn + '<br>' + station.line);
    mtrLayerGroup.addLayer(marker);
    mtrMarkers[station.id] = marker;
  });

  // 小區圖層
  estateLayerGroup = L.layerGroup().addTo(map);
  ESTATES.forEach(function(estate) {
    var icon = createEstateIcon();
    var marker = L.marker([estate.lat, estate.lng], { icon: icon })
      .bindPopup('<b>' + estate.name + '</b><br>' + estate.nameEn);
    marker.on('click', function() { selectEstate(estate.id); });
    estateLayerGroup.addLayer(marker);
    estateMarkers[estate.id] = marker;
  });

  // POI 圖層 — 水滴形地圖釘
  Object.keys(poiColors).forEach(function(cat) {
    poiLayers[cat] = L.layerGroup().addTo(map);
  });

  POIS.forEach(function(poi) {
    var icon = createPOIPinIcon(poi.category);
    var marker = L.marker([poi.lat, poi.lng], { icon: icon })
      .bindPopup('<b>' + poi.name + '</b><br>' + poi.nameEn + (poi.notes ? '<br><small>' + poi.notes + '</small>' : ''));
    poiLayers[poi.category].addLayer(marker);
  });
}

// 選中小區
function selectEstate(estateId) {
  var estate = ESTATES.find(function(e) { return e.id === estateId; });
  if (!estate) return;

  map.setView([estate.lat, estate.lng], 15, { animate: true });

  // 高亮小區標記
  Object.values(estateMarkers).forEach(function(m) { m.setOpacity(0.5); });
  if (estateMarkers[estateId]) {
    estateMarkers[estateId].setOpacity(1);
    estateMarkers[estateId].openPopup();
  }

  showEstateDetail(estate);
}

// 清除選中
function clearSelection() {
  Object.values(estateMarkers).forEach(function(m) { m.setOpacity(1); });
  map.setView([22.39, 114.19], 14, { animate: true });
  hideEstateDetail();
  document.getElementById('search-input').value = '';
}

// 焦點到某個區域
function focusArea(areaId) {
  var bounds = {
    shatin: [[22.378, 114.185], [22.392, 114.210]],
    fotan: [[22.392, 114.192], [22.402, 114.205]],
    taiwai: [[22.367, 114.174], [22.380, 114.185]]
  };
  if (bounds[areaId]) {
    map.fitBounds(bounds[areaId], { padding: [20, 20], animate: true });
  }
}

// POI 類別開關
function setPOIVisibility(category, visible) {
  if (poiLayers[category]) {
    if (visible) { poiLayers[category].addTo(map); }
    else { poiLayers[category].remove(); }
  }
}
