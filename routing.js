// routing.js — 通勤路線查詢 v2
// 改動：步行用haversine直接算、三段折疊面板填充、巴士詳情

var CUHK_LAT = 22.4195;
var CUHK_LNG = 114.2071;
var WALKING_SPEED_KMH = 5;

// Haversine 距離（公里）
function haversineDistance(lat1, lng1, lat2, lng2) {
  var R = 6371;
  var dLat = (lat2 - lat1) * Math.PI / 180;
  var dLng = (lng2 - lng1) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// 估算步行時間（分鐘）
function estimateWalkTime(km) {
  return Math.round(km / WALKING_SPEED_KMH * 60);
}

// 路線查詢 — 步行直接haversine，駕車用OSRM+fallback
async function osrmRoute(fromLat, fromLng, toLat, toLng, mode) {
  // 步行：OSRM demo服務器不支持foot模式，直接用haversine
  if (mode === 'walking') {
    var km = haversineDistance(fromLat, fromLng, toLat, toLng);
    return { distance_km: km.toFixed(1), duration_min: estimateWalkTime(km) };
  }

  // 駕車：嘗試OSRM
  var url = 'https://router.project-osrm.org/route/v1/driving/' + fromLng + ',' + fromLat + ';' + toLng + ',' + toLat + '?overview=false';
  try {
    var controller = new AbortController();
    var timeoutId = setTimeout(function() { controller.abort(); }, 8000);
    var res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    var data = await res.json();
    if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
      var route = data.routes[0];
      return { distance_km: (route.distance / 1000).toFixed(1), duration_min: Math.round(route.duration / 60) };
    }
    throw new Error('No route');
  } catch (e) {
    var km2 = haversineDistance(fromLat, fromLng, toLat, toLng);
    return { distance_km: km2.toFixed(1), duration_min: Math.round(km2 / 40 * 60) };
  }
}

// 渲染巴士路線詳情 HTML
function renderBusRoutes(routes) {
  if (!routes || routes.length === 0) return '<div class="route-note">此小區步行可達，無需乘車。</div>';
  var html = '';
  routes.forEach(function(r) {
    var typeLabel = r.type === 'minibus' ? '🚐 專線小巴' : '🚌 九巴';
    html += '<div class="bus-card">';
    html += '<div class="bus-route-header"><span class="bus-route-num">' + r.route + '</span><span class="bus-type">' + typeLabel + '</span></div>';
    html += '<div class="bus-detail"><span>上車：<strong>' + r.boardStop + '</strong></span><span>→</span><span>落車：<strong>' + r.alightStop + '</strong></span></div>';
    html += '<div class="bus-detail"><span>約 ' + r.stops + ' 站</span><span>|</span><span>約 ' + r.timeMin + ' 分鐘</span>';
    if (r.fare) html += '<span>|</span><span>' + r.fare + '</span>';
    html += '</div>';
    if (r.note) html += '<div class="route-note">' + r.note + '</div>';
    html += '</div>';
  });
  return html;
}

// ========== 主函數：填充所有通勤面板 ==========
async function buildCommuteHTML(estate) {
  var mtr = MTR_STATIONS.find(function(s) { return s.id === estate.nearestMTR; });
  if (!mtr) return;

  // ---- 到最近地鐵站：步行 ----
  var walkToMTR = await osrmRoute(estate.lat, estate.lng, mtr.lat, mtr.lng, 'walking');
  var walkMTRhtml = '<div class="route-item">';
  walkMTRhtml += '<span class="route-icon">🚶</span>';
  walkMTRhtml += '<span class="route-text"><strong>步行約 ' + walkToMTR.duration_min + ' 分鐘</strong>（直線距離約 ' + walkToMTR.distance_km + ' 公里）</span>';
  walkMTRhtml += '</div>';
  if (walkToMTR.duration_min > 5) {
    walkMTRhtml += '<div class="route-note">💡 建議查看下方巴士選項，可節省時間。</div>';
  }
  document.getElementById('sub-walk-mtr').innerHTML = walkMTRhtml;

  // ---- 到最近地鐵站：巴士 ----
  var busMTRhtml = renderBusRoutes(estate.busToMTR);
  document.getElementById('sub-bus-mtr').innerHTML = busMTRhtml;

  // ---- 到最近地鐵站：駕車 ----
  var driveToMTR = await osrmRoute(estate.lat, estate.lng, mtr.lat, mtr.lng, 'driving');
  var driveMTRhtml = '<div class="route-item">';
  driveMTRhtml += '<span class="route-icon">🚗</span>';
  driveMTRhtml += '<span class="route-text"><strong>駕車約 ' + driveToMTR.duration_min + ' 分鐘</strong>（約 ' + driveToMTR.distance_km + ' 公里）</span>';
  driveMTRhtml += '</div>';
  document.getElementById('sub-drive-mtr').innerHTML = driveMTRhtml;

  // ---- 更新 Section 1 badge ----
  document.getElementById('badge-to-mtr').textContent = '步行約' + walkToMTR.duration_min + '分鐘';

  // ==================== Section 2: 到香港中文大學 ====================

  // ---- 到中大：步行 ----
  var walkToCUHK = await osrmRoute(estate.lat, estate.lng, CUHK_LAT, CUHK_LNG, 'walking');
  var walkCUHKhtml = '<div class="route-item">';
  walkCUHKhtml += '<span class="route-icon">🚶</span>';
  walkCUHKhtml += '<span class="route-text"><strong>步行約 ' + walkToCUHK.duration_min + ' 分鐘</strong>（直線距離約 ' + walkToCUHK.distance_km + ' 公里）</span>';
  walkCUHKhtml += '</div>';
  if (walkToCUHK.duration_min > 30) {
    walkCUHKhtml += '<div class="route-note">⚠️ 步行距離較遠，不建議步行前往中大，請考慮以下交通方式。</div>';
  }
  document.getElementById('sub-walk-cuhk').innerHTML = walkCUHKhtml;

  // ---- 到中大：巴士 ----
  var busCUHKhtml = renderBusRoutes(estate.busToCUHK);
  if (estate.busToCUHK && estate.busToCUHK.length > 0) {
    busCUHKhtml += '<div class="route-note" style="margin-top:6px;">💡 東鐵線是最快方式，巴士班次較疏但可直達。</div>';
  } else {
    busCUHKhtml += '<div class="route-item"><span class="route-icon">🚇</span><span class="route-text">建議乘<strong>東鐵線</strong>直達大學站，最快捷方便。</span></div>';
  }
  document.getElementById('sub-bus-cuhk').innerHTML = busCUHKhtml;

  // ---- 到中大：駕車 ----
  var driveToCUHK = await osrmRoute(estate.lat, estate.lng, CUHK_LAT, CUHK_LNG, 'driving');
  var driveCUHKhtml = '<div class="route-item">';
  driveCUHKhtml += '<span class="route-icon">🚗</span>';
  driveCUHKhtml += '<span class="route-text"><strong>駕車約 ' + driveToCUHK.duration_min + ' 分鐘</strong>（約 ' + driveToCUHK.distance_km + ' 公里），經大埔公路/吐露港公路</span>';
  driveCUHKhtml += '</div>';
  document.getElementById('sub-drive-cuhk').innerHTML = driveCUHKhtml;

  // ---- MTR 推薦（Section 2 header badge） ----
  var totalMTR = walkToMTR.duration_min + mtr.minutesToCUHK;
  document.getElementById('badge-to-cuhk').textContent = 'MTR約' + totalMTR + '分鐘';

  // 同時更新 MTR 參考行（顯示在 sub-bus-cuhk 之後方便對比）
  var mtrRef = document.createElement('div');
  mtrRef.className = 'route-summary';
  mtrRef.style.marginTop = '8px';
  mtrRef.innerHTML = '🚇 參考：步行' + walkToMTR.duration_min + '分鐘到' + mtr.name + ' + ' + mtr.line + ' ' + mtr.stopsToCUHK + '站 ≈ <strong>' + totalMTR + ' 分鐘</strong>到大學站';
  document.getElementById('sub-bus-cuhk').appendChild(mtrRef);
}

// ========== 周邊配套（1km範圍） ==========
function buildNearbyPOIs(estate) {
  var nearby = POIS.filter(function(poi) {
    var dist = haversineDistance(estate.lat, estate.lng, poi.lat, poi.lng);
    return dist <= 1.0;
  });

  var catNames = { mall: '🛍 商場', market: '🥬 街市', supermarket: '🛒 超市', restaurant: '🍽 餐飲', clinic: '🏥 診所', hospital: '🚑 醫院', bank: '🏦 銀行' };
  var grouped = {};
  nearby.forEach(function(poi) {
    if (!grouped[poi.category]) grouped[poi.category] = [];
    grouped[poi.category].push(poi);
  });

  var cats = ['mall', 'market', 'supermarket', 'hospital', 'bank', 'restaurant', 'clinic'];
  var html = '';
  cats.forEach(function(cat) {
    if (grouped[cat] && grouped[cat].length > 0) {
      html += '<div class="nearby-cat"><span class="nearby-cat-name">' + (catNames[cat] || cat) + '：</span>';
      html += grouped[cat].map(function(p) { return p.name; }).join('、');
      html += '</div>';
    }
  });

  if (!html) html = '<p>1公里範圍內暫無收錄配套，可參考地圖標記。</p>';
  document.getElementById('nearby-list').innerHTML = html;
}
