// app.js — 初始化、事件綁定 v2
// 改動：新增折疊面板事件委托

document.addEventListener('DOMContentLoaded', function() {
  initMap();
  initSearch();

  // 區域卡片點擊
  document.querySelectorAll('.area-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var area = card.dataset.area;
      focusArea(area);
      var estatesInArea = ESTATES.filter(function(e) { return e.area === area; });
      renderDropdown(estatesInArea, document.getElementById('search-dropdown'), document.getElementById('search-input'));
    });
  });

  // 返回按鈕
  document.getElementById('btn-back').addEventListener('click', function() {
    clearSelection();
  });

  // POI 圖層開關
  document.querySelectorAll('#poi-toggles .poi-toggle input').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      var category = checkbox.closest('.poi-toggle').dataset.category;
      setPOIVisibility(category, checkbox.checked);
    });
  });

  // 折疊面板事件委托
  document.getElementById('info-panel').addEventListener('click', function(e) {
    // 頂層 accordion header
    var accordionHeader = e.target.closest('.accordion-header');
    if (accordionHeader) {
      var section = accordionHeader.parentElement;
      section.classList.toggle('open');
      return;
    }
    // 子層 sub-accordion header
    var subHeader = e.target.closest('.sub-accordion-header');
    if (subHeader) {
      var sub = subHeader.parentElement;
      sub.classList.toggle('open');
      return;
    }
  });

  // 視窗大小變化時重繪地圖
  window.addEventListener('resize', function() {
    if (map) map.invalidateSize();
  });

  // Footer 日期
  document.getElementById('last-updated').textContent = '更新日期：2026-05-22';

  // URL hash 深鏈接
  var hash = window.location.hash;
  if (hash.startsWith('#estate=')) {
    var estateId = hash.replace('#estate=', '');
    setTimeout(function() { selectEstate(estateId); }, 500);
  }
});

window.addEventListener('hashchange', function() {
  var hash = window.location.hash;
  if (hash.startsWith('#estate=')) {
    var estateId = hash.replace('#estate=', '');
    selectEstate(estateId);
  }
});
