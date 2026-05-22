// search.js — 搜索框、自動補全 v3（簡繁體互通）

// 繁體→簡體字符映射（用於搜索時雙向匹配）
var T2S_MAP = {
  '偉':'伟','華':'华','園':'园','龍':'龙','廣':'广','場':'场','銀':'银',
  '鐵':'铁','線':'线','樓':'楼','體':'体','運':'运','動':'动','濱':'滨',
  '豐':'丰','凱':'凯','晉':'晋','薈':'荟','蕎':'荞','恆':'恒','圍':'围',
  '駿':'骏','門':'门','軒':'轩','莊':'庄','疊':'叠','萬':'万','號':'号',
  '東':'东','車':'车','醫':'医','鳳':'凤','電':'电','島':'岛','愛':'爱',
  '兒':'儿','見':'见','馬':'马','魚':'鱼','鳥':'鸟','葉':'叶','雲':'云',
  '後':'后','衛':'卫','裡':'里','邊':'边','過':'过','對':'对','會':'会',
  '國':'国','開':'开','關':'关','時':'时','書':'书','畫':'画','學':'学',
  '實':'实','寫':'写','長':'长','飛':'飞','飲':'饮','飯':'饭','館':'馆',
  '區':'区','風':'风','熱':'热','帶':'带','從':'从','來':'来','爾':'尔',
  '亞':'亚','歐':'欧','際':'际','億':'亿','買':'买','賣':'卖','錢':'钱',
  '質':'质','醫':'医','藥':'药','護':'护','標':'标','準':'准','復':'复',
  '舊':'旧','礦':'矿','權':'权','際':'际'
};

function toSimplified(str) {
  var r = '';
  for (var i = 0; i < str.length; i++) { r += T2S_MAP[str[i]] || str[i]; }
  return r;
}

// 統一的搜索匹配（簡/繁/英文都支援）
function matchEstate(estate, query) {
  var q = query.toLowerCase();
  return toSimplified(estate.name).indexOf(q) !== -1      // 用戶可能輸入簡體
      || estate.name.indexOf(query) !== -1                 // 用戶輸入繁體
      || estate.nameEn.toLowerCase().indexOf(q) !== -1;    // 用戶輸入英文
}

let searchTimeout;

function initSearch() {
  const input = document.getElementById('search-input');
  const dropdown = document.getElementById('search-dropdown');

  input.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const query = input.value.trim();
      if (query.length === 0) {
        dropdown.style.display = 'none';
        return;
      }
      var results = ESTATES.filter(function(e) { return matchEstate(e, query); });
      renderDropdown(results, dropdown, input);
    }, 200);
  });

  input.addEventListener('focus', () => {
    if (input.value.trim().length > 0) {
      var results = ESTATES.filter(function(e) { return matchEstate(e, input.value.trim()); });
      renderDropdown(results, dropdown, input);
    }
  });

  // 點擊地圖空白處關閉下拉
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-container')) {
      dropdown.style.display = 'none';
    }
  });

  // 鍵盤導航
  input.addEventListener('keydown', (e) => {
    const items = dropdown.querySelectorAll('.search-item');
    const active = dropdown.querySelector('.search-item.active');
    let idx = Array.from(items).indexOf(active);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      idx = Math.min(idx + 1, items.length - 1);
      items.forEach(i => i.classList.remove('active'));
      if (items[idx]) items[idx].classList.add('active');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      idx = Math.max(idx - 1, 0);
      items.forEach(i => i.classList.remove('active'));
      if (items[idx]) items[idx].classList.add('active');
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (active) {
        active.click();
      } else if (items.length === 1) {
        items[0].click();
      }
    } else if (e.key === 'Escape') {
      dropdown.style.display = 'none';
      input.blur();
    }
  });
}

function renderDropdown(results, dropdown, input) {
  if (results.length === 0) {
    dropdown.innerHTML = '<div class="search-item no-result">無匹配小區</div>';
    dropdown.style.display = 'block';
    return;
  }

  // 按區域分組
  const areaNames = { shatin: '沙田站周邊', fotan: '火炭站周邊', taiwai: '大圍站周邊' };
  const grouped = {};
  results.forEach(e => {
    if (!grouped[e.area]) grouped[e.area] = [];
    grouped[e.area].push(e);
  });

  let html = '';
  for (const [area, estates] of Object.entries(grouped)) {
    html += '<div class="search-group-label">' + areaNames[area] + '</div>';
    estates.forEach(e => {
      html += '<div class="search-item" data-id="' + e.id + '">';
      html += '<span class="search-item-name">' + e.name + '</span>';
      html += '<span class="search-item-en">' + e.nameEn + '</span>';
      html += '</div>';
    });
  }
  dropdown.innerHTML = html;
  dropdown.style.display = 'block';

  // 綁定點擊
  dropdown.querySelectorAll('.search-item[data-id]').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      input.value = ESTATES.find(e => e.id === id)?.name || '';
      dropdown.style.display = 'none';
      selectEstate(id);
    });
  });
}

// 顯示小區詳情面板
function showEstateDetail(estate) {
  document.getElementById('default-info').style.display = 'none';
  var detail = document.getElementById('estate-detail');
  detail.style.display = 'block';
  document.getElementById('estate-name').textContent = estate.name + ' ' + estate.nameEn;
  document.getElementById('estate-notes').textContent = estate.notes;

  // 重置折疊狀態到默認展開
  var accordionSections = detail.querySelectorAll('.accordion-section');
  accordionSections.forEach(function(sec) { sec.classList.add('open'); });

  // 重置子折疊：只展開 walk-mtr 和 bus-cuhk，折疊其他
  var allSubAccordions = detail.querySelectorAll('.sub-accordion');
  allSubAccordions.forEach(function(sub) { sub.classList.remove('open'); });
  var walkMTR = detail.querySelector('[data-sub="walk-mtr"]');
  var busCUHK = detail.querySelector('[data-sub="bus-cuhk"]');
  if (walkMTR) walkMTR.parentElement.classList.add('open');
  if (busCUHK) busCUHK.parentElement.classList.add('open');

  buildCommuteHTML(estate);
  buildNearbyPOIs(estate);
}

// 隱藏小區詳情面板
function hideEstateDetail() {
  document.getElementById('default-info').style.display = 'block';
  document.getElementById('estate-detail').style.display = 'none';
}
