// CUHK 租房攻略 - 静态数据 v2
// 小区（37个）、地铁站（4个）、POI（35+个）

// ========== 地铁站数据 ==========
var MTR_STATIONS = [
  {
    id: "shatin", name: "沙田站", nameEn: "Sha Tin Station",
    lat: 22.3825, lng: 114.1895, line: "東鐵綫",
    minutesToCUHK: 5, stopsToCUHK: 2, icon: "mtr"
  },
  {
    id: "fotan", name: "火炭站", nameEn: "Fo Tan Station",
    lat: 22.3958, lng: 114.1979, line: "東鐵綫",
    minutesToCUHK: 3, stopsToCUHK: 1, icon: "mtr"
  },
  {
    id: "taiwai", name: "大圍站", nameEn: "Tai Wai Station",
    lat: 22.3728, lng: 114.1786, line: "東鐵綫",
    minutesToCUHK: 8, stopsToCUHK: 3, icon: "mtr"
  },
  {
    id: "university", name: "大學站 (CUHK)", nameEn: "University Station (CUHK)",
    lat: 22.4136, lng: 114.2098, line: "東鐵綫",
    minutesToCUHK: 0, stopsToCUHK: 0, icon: "cuhk"
  }
];

// ========== 小区数据 (37个) ==========
var ESTATES = [
  // ==================== 沙田站周边 ====================
  {
    id: "shatin-plaza", name: "沙田廣場", nameEn: "Shatin Plaza",
    lat: 22.3820, lng: 114.1892, area: "shatin", nearestMTR: "shatin", walkToMTR: 1,
    busRoutes: ["72", "81", "85", "86", "89"], minibusRoutes: ["60K", "62K"],
    busToMTR: [],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "沙田市中心總站", alightStop: "大學站", stops: 8, timeMin: 25, fare: "HKD 5.8" }
    ],
    notes: "地鐵上蓋物業，連接新城市廣場，樓下有巴士總站。"
  },
  {
    id: "shatin-centre", name: "沙田中心", nameEn: "Shatin Centre",
    lat: 22.3819, lng: 114.1889, area: "shatin", nearestMTR: "shatin", walkToMTR: 2,
    busRoutes: ["72", "81", "85", "86", "89"], minibusRoutes: ["60K", "62K"],
    busToMTR: [],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "沙田市中心總站", alightStop: "大學站", stops: 8, timeMin: 25, fare: "HKD 5.8" }
    ],
    notes: "沙田市中心核心位置，樓下即商場，生活極便利。"
  },
  {
    id: "lucky-plaza", name: "好運中心", nameEn: "Lucky Plaza",
    lat: 22.3824, lng: 114.1893, area: "shatin", nearestMTR: "shatin", walkToMTR: 2,
    busRoutes: ["72", "81", "85", "86"], minibusRoutes: ["60K", "62K"],
    busToMTR: [],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "沙田市中心總站", alightStop: "大學站", stops: 8, timeMin: 25, fare: "HKD 5.8" }
    ],
    notes: "沙田站步行2分鐘，樓下有商場，性價比較高。"
  },
  {
    id: "wai-wah-centre", name: "偉華中心", nameEn: "Wai Wah Centre",
    lat: 22.3821, lng: 114.1895, area: "shatin", nearestMTR: "shatin", walkToMTR: 2,
    busRoutes: ["72", "81", "85", "86"], minibusRoutes: ["60K", "62K"],
    busToMTR: [],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "沙田市中心總站", alightStop: "大學站", stops: 8, timeMin: 25, fare: "HKD 5.8" }
    ],
    notes: "緊鄰沙田站和新城市廣場，交通購物極方便。"
  },
  {
    id: "hilton-plaza", name: "希爾頓中心", nameEn: "Hilton Plaza",
    lat: 22.3815, lng: 114.1890, area: "shatin", nearestMTR: "shatin", walkToMTR: 3,
    busRoutes: ["72", "81", "85", "86", "88K"], minibusRoutes: ["60K"],
    busToMTR: [],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "沙田市中心總站", alightStop: "大學站", stops: 8, timeMin: 25, fare: "HKD 5.8" }
    ],
    notes: "新城市廣場旁，購物餐飲方便。"
  },
  {
    id: "scenery-garden", name: "蔚景園", nameEn: "Scenery Garden",
    lat: 22.3835, lng: 114.1898, area: "shatin", nearestMTR: "shatin", walkToMTR: 4,
    busRoutes: ["72", "81", "85", "86"], minibusRoutes: ["60K", "62K"],
    busToMTR: [],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "沙田市中心總站", alightStop: "大學站", stops: 8, timeMin: 25, fare: "HKD 5.8" }
    ],
    notes: "環境較清靜，步行到地鐵站及商場均便利。"
  },
  {
    id: "city-one-shatin", name: "沙田第一城", nameEn: "City One Shatin",
    lat: 22.3860, lng: 114.2035, area: "shatin", nearestMTR: "shatin", walkToMTR: 18,
    busRoutes: ["49X", "82K", "85A", "281A", "182"], minibusRoutes: ["65A", "65K", "67A"],
    busToMTR: [
      { route: "49X", type: "kmb", boardStop: "第一城總站", alightStop: "沙田市中心", stops: 4, timeMin: 10 },
      { route: "82K", type: "kmb", boardStop: "第一城", alightStop: "沙田站", stops: 5, timeMin: 12 }
    ],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "第一城", alightStop: "大學站", stops: 9, timeMin: 28, fare: "HKD 6.4" },
      { route: "72A", type: "kmb", boardStop: "沙田市中心", alightStop: "大學站", stops: 8, timeMin: 25, fare: "HKD 5.8", note: "需先乘49X/82K到沙田市中心轉乘" }
    ],
    notes: "大型屋苑，共52座，配套齊全，有商場、泳池。近城門河環境清幽。"
  },

  // 沙田站新增 (6)
  {
    id: "riverside-garden", name: "濱景花園", nameEn: "Riverside Garden",
    lat: 22.3895, lng: 114.2048, area: "shatin", nearestMTR: "shatin", walkToMTR: 20,
    busRoutes: ["49X", "82K", "85A", "281A"], minibusRoutes: ["65A", "67A"],
    busToMTR: [
      { route: "49X", type: "kmb", boardStop: "濱景花園", alightStop: "沙田市中心", stops: 5, timeMin: 12 },
      { route: "82K", type: "kmb", boardStop: "濱景花園", alightStop: "沙田站", stops: 6, timeMin: 14 }
    ],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "濱景花園/第一城", alightStop: "大學站", stops: 10, timeMin: 30, fare: "HKD 6.4", note: "班次較疏" }
    ],
    notes: "城門河畔，環境優美，近石門商業區，有超市餐飲配套。"
  },
  {
    id: "river-garden", name: "河畔花園", nameEn: "Garden Rivera",
    lat: 22.3865, lng: 114.2015, area: "shatin", nearestMTR: "shatin", walkToMTR: 15,
    busRoutes: ["49X", "82K", "85A"], minibusRoutes: ["65A", "67A"],
    busToMTR: [
      { route: "49X", type: "kmb", boardStop: "河畔花園", alightStop: "沙田市中心", stops: 3, timeMin: 8 },
      { route: "82K", type: "kmb", boardStop: "麗豪酒店", alightStop: "沙田站", stops: 4, timeMin: 10 }
    ],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "麗豪酒店", alightStop: "大學站", stops: 8, timeMin: 26, fare: "HKD 6.4" }
    ],
    notes: "城門河畔小型屋苑，近麗豪酒店，環境清靜，租金較親民。"
  },
  {
    id: "shatin-park", name: "花園城", nameEn: "Shatin Park",
    lat: 22.3840, lng: 114.2032, area: "shatin", nearestMTR: "shatin", walkToMTR: 16,
    busRoutes: ["49X", "82K", "85A", "86"], minibusRoutes: ["65A"],
    busToMTR: [
      { route: "49X", type: "kmb", boardStop: "花園城", alightStop: "沙田市中心", stops: 3, timeMin: 8 },
      { route: "82K", type: "kmb", boardStop: "花園城", alightStop: "沙田站", stops: 4, timeMin: 10 }
    ],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "花園城/第一城", alightStop: "大學站", stops: 9, timeMin: 27, fare: "HKD 6.4" }
    ],
    notes: "靠近第一城，共用配套，樓齡較舊但租金低。"
  },
  {
    id: "yan-tin-court", name: "欣廷軒", nameEn: "Yan Tin Court",
    lat: 22.3848, lng: 114.2038, area: "shatin", nearestMTR: "shatin", walkToMTR: 17,
    busRoutes: ["49X", "82K", "85A"], minibusRoutes: ["65A", "67A"],
    busToMTR: [
      { route: "49X", type: "kmb", boardStop: "欣廷軒/第一城", alightStop: "沙田市中心", stops: 4, timeMin: 10 },
      { route: "82K", type: "kmb", boardStop: "第一城", alightStop: "沙田站", stops: 5, timeMin: 12 }
    ],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "第一城", alightStop: "大學站", stops: 9, timeMin: 28, fare: "HKD 6.4" }
    ],
    notes: "私人參建居屋，近第一城，樓齡較新。"
  },
  {
    id: "kwong-lam-court", name: "廣林苑", nameEn: "Kwong Lam Court",
    lat: 22.3832, lng: 114.1962, area: "shatin", nearestMTR: "shatin", walkToMTR: 10,
    busRoutes: ["80K", "88K", "72"], minibusRoutes: ["60K", "62K"],
    busToMTR: [
      { route: "80K", type: "kmb", boardStop: "廣林苑", alightStop: "沙田站", stops: 3, timeMin: 7 }
    ],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "瀝源邨/沙田市中心", alightStop: "大學站", stops: 7, timeMin: 22, fare: "HKD 5.8" }
    ],
    notes: "居屋屋苑，位於半山，環境清幽，近瀝源邨配套。"
  },
  {
    id: "yu-chui-court", name: "愉翠苑", nameEn: "Yu Chui Court",
    lat: 22.3852, lng: 114.2050, area: "shatin", nearestMTR: "shatin", walkToMTR: 20,
    busRoutes: ["49X", "82K", "85A", "182", "73A"], minibusRoutes: ["65A", "65K"],
    busToMTR: [
      { route: "49X", type: "kmb", boardStop: "愉翠苑", alightStop: "沙田市中心", stops: 5, timeMin: 12 },
      { route: "82K", type: "kmb", boardStop: "愉翠苑", alightStop: "沙田站", stops: 6, timeMin: 14 }
    ],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "愉翠苑總站", alightStop: "大學站", stops: 10, timeMin: 30, fare: "HKD 6.4", note: "直達，但班次約20分鐘一班" }
    ],
    notes: "居屋屋苑，樓齡較新，環境好，近威爾斯醫院。"
  },

  // ==================== 火炭站周边 ====================
  {
    id: "the-palazzo", name: "御龍山", nameEn: "The Palazzo",
    lat: 22.3965, lng: 114.1982, area: "fotan", nearestMTR: "fotan", walkToMTR: 2,
    busRoutes: ["72A", "73A", "80M", "81K", "85"], minibusRoutes: ["60K", "61S"],
    busToMTR: [],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "火炭村", alightStop: "大學站", stops: 4, timeMin: 15, fare: "HKD 6.4" }
    ],
    notes: "豪宅屋苑，火炭站上蓋，有會所，樓齡較新，租金偏高。"
  },
  {
    id: "the-arles", name: "星凱堤岸", nameEn: "The Arles",
    lat: 22.3968, lng: 114.1986, area: "fotan", nearestMTR: "fotan", walkToMTR: 2,
    busRoutes: ["72A", "73A", "80M", "81K", "85"], minibusRoutes: ["60K", "61S"],
    busToMTR: [],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "火炭村", alightStop: "大學站", stops: 4, timeMin: 15, fare: "HKD 6.4" }
    ],
    notes: "2023年新落成，火炭站旁，有大型會所，單位選擇多。"
  },
  {
    id: "jubilee-garden", name: "銀禧花園", nameEn: "Jubilee Garden",
    lat: 22.3972, lng: 114.1988, area: "fotan", nearestMTR: "fotan", walkToMTR: 4,
    busRoutes: ["72A", "73A", "80M", "81K"], minibusRoutes: ["60K"],
    busToMTR: [],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "銀禧花園", alightStop: "大學站", stops: 4, timeMin: 15, fare: "HKD 6.4" }
    ],
    notes: "靠近火炭站，旁邊有駿景園廣場購物，性價比適中。"
  },
  {
    id: "royal-ascot", name: "駿景園", nameEn: "Royal Ascot",
    lat: 22.3995, lng: 114.2005, area: "fotan", nearestMTR: "fotan", walkToMTR: 8,
    busRoutes: ["72A", "73A", "80M", "81K", "88K"], minibusRoutes: ["60K", "61S"],
    busToMTR: [
      { route: "88K", type: "kmb", boardStop: "駿景園總站", alightStop: "火炭站", stops: 1, timeMin: 5 },
      { route: "60K", type: "minibus", boardStop: "駿景園", alightStop: "火炭站", stops: 1, timeMin: 4, fare: "HKD 4.5" }
    ],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "駿景園", alightStop: "大學站", stops: 5, timeMin: 18, fare: "HKD 6.4" }
    ],
    notes: "大型豪宅屋苑，環境優美，有會所及商場，步行到地鐵站較遠。"
  },
  {
    id: "the-grandville", name: "晉名峰", nameEn: "The Grandville",
    lat: 22.3932, lng: 114.1950, area: "fotan", nearestMTR: "fotan", walkToMTR: 8,
    busRoutes: ["80M", "81K", "280X"], minibusRoutes: ["60K", "61S"],
    busToMTR: [
      { route: "80M", type: "kmb", boardStop: "穗禾路", alightStop: "火炭站", stops: 2, timeMin: 5 },
      { route: "81K", type: "kmb", boardStop: "穗禾路", alightStop: "火炭站", stops: 2, timeMin: 5 }
    ],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "火炭村/穗禾路", alightStop: "大學站", stops: 5, timeMin: 18, fare: "HKD 6.4" }
    ],
    notes: "低密度豪宅，環境極佳，有會所，但公共交通較少。"
  },
  {
    id: "sui-wo-court", name: "穗禾苑", nameEn: "Sui Wo Court",
    lat: 22.3949, lng: 114.1945, area: "fotan", nearestMTR: "fotan", walkToMTR: 14,
    busRoutes: ["80M", "81K", "280X"], minibusRoutes: ["60K", "61S", "69K"],
    busToMTR: [
      { route: "80M", type: "kmb", boardStop: "穗禾苑總站", alightStop: "火炭站", stops: 2, timeMin: 6 },
      { route: "81K", type: "kmb", boardStop: "穗禾苑", alightStop: "火炭站", stops: 2, timeMin: 6 },
      { route: "60K", type: "minibus", boardStop: "穗禾苑", alightStop: "火炭站", stops: 2, timeMin: 5, fare: "HKD 4.5" }
    ],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "穗禾路/火炭村", alightStop: "大學站", stops: 5, timeMin: 18, fare: "HKD 6.4", note: "需步行至穗禾路口乘車" }
    ],
    notes: "居屋屋苑，價格較低，景觀開揚，但需巴士接駁到火炭站。"
  },
  // 火炭站新增 (5)
  {
    id: "bik-ha-garden", name: "碧霞花園", nameEn: "Bik Ha Garden",
    lat: 22.3948, lng: 114.1958, area: "fotan", nearestMTR: "fotan", walkToMTR: 9,
    busRoutes: ["80M", "81K"], minibusRoutes: ["60K", "61S"],
    busToMTR: [
      { route: "80M", type: "kmb", boardStop: "穗禾路", alightStop: "火炭站", stops: 2, timeMin: 5 },
      { route: "60K", type: "minibus", boardStop: "碧霞花園", alightStop: "火炭站", stops: 2, timeMin: 5, fare: "HKD 4.5" }
    ],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "穗禾路", alightStop: "大學站", stops: 5, timeMin: 18, fare: "HKD 6.4" }
    ],
    notes: "低密度住宅，環境清幽，私家車出入較方便。"
  },
  {
    id: "scenery-garden-fotan", name: "豐景花園", nameEn: "Scenery Garden (Fo Tan)",
    lat: 22.3950, lng: 114.1962, area: "fotan", nearestMTR: "fotan", walkToMTR: 8,
    busRoutes: ["80M", "81K"], minibusRoutes: ["60K"],
    busToMTR: [
      { route: "80M", type: "kmb", boardStop: "豐景花園", alightStop: "火炭站", stops: 2, timeMin: 5 }
    ],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "穗禾路", alightStop: "大學站", stops: 5, timeMin: 18, fare: "HKD 6.4" }
    ],
    notes: "近穗禾苑，環境清靜，價格中等。"
  },
  {
    id: "ka-mei-garden", name: "嘉美花園", nameEn: "Ka Mei Garden",
    lat: 22.3940, lng: 114.1942, area: "fotan", nearestMTR: "fotan", walkToMTR: 10,
    busRoutes: ["80M", "81K", "280X"], minibusRoutes: ["60K", "61S"],
    busToMTR: [
      { route: "80M", type: "kmb", boardStop: "嘉美花園", alightStop: "火炭站", stops: 2, timeMin: 6 },
      { route: "60K", type: "minibus", boardStop: "穗禾路", alightStop: "火炭站", stops: 2, timeMin: 5, fare: "HKD 4.5" }
    ],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "穗禾路", alightStop: "大學站", stops: 5, timeMin: 18, fare: "HKD 6.4" }
    ],
    notes: "半山低密度住宅，環境優美，需巴士接駁。"
  },
  {
    id: "wah-cheung-garden", name: "華翠園", nameEn: "Wah Cheung Garden",
    lat: 22.3958, lng: 114.1948, area: "fotan", nearestMTR: "fotan", walkToMTR: 11,
    busRoutes: ["80M", "81K"], minibusRoutes: ["60K", "61S", "69K"],
    busToMTR: [
      { route: "80M", type: "kmb", boardStop: "華翠園", alightStop: "火炭站", stops: 2, timeMin: 6 },
      { route: "60K", type: "minibus", boardStop: "華翠園", alightStop: "火炭站", stops: 2, timeMin: 5, fare: "HKD 4.5" }
    ],
    busToCUHK: [
      { route: "73A", type: "kmb", boardStop: "穗禾路", alightStop: "大學站", stops: 5, timeMin: 18, fare: "HKD 6.4" }
    ],
    notes: "半山屋苑，景觀開揚望山景，環境極清靜。"
  },

  // ==================== 大围站周边 ====================
  {
    id: "festival-city", name: "名城", nameEn: "Festival City",
    lat: 22.3735, lng: 114.1790, area: "taiwai", nearestMTR: "taiwai", walkToMTR: 1,
    busRoutes: ["46X", "72A", "80", "81C", "82K", "85", "87B"], minibusRoutes: ["63K", "64K"],
    busToMTR: [],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "大圍站總站", alightStop: "大學站", stops: 6, timeMin: 20, fare: "HKD 5.8" }
    ],
    notes: "大圍站上蓋大型屋苑，分三期，有大型會所，中大學生熱門選擇。"
  },
  {
    id: "the-pavilia-farm", name: "柏傲莊", nameEn: "The Pavilia Farm",
    lat: 22.3728, lng: 114.1788, area: "taiwai", nearestMTR: "taiwai", walkToMTR: 1,
    busRoutes: ["46X", "72A", "80", "81C", "82K", "85", "87B"], minibusRoutes: ["63K", "64K"],
    busToMTR: [],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "大圍站總站", alightStop: "大學站", stops: 6, timeMin: 20, fare: "HKD 5.8" }
    ],
    notes: "2022年新落成，大圍站上蓋，會所設施豪華，樓齡最新。"
  },
  {
    id: "grandeur-garden", name: "金禧花園", nameEn: "Grandeur Garden",
    lat: 22.3720, lng: 114.1792, area: "taiwai", nearestMTR: "taiwai", walkToMTR: 3,
    busRoutes: ["46X", "80", "81C", "85", "87B"], minibusRoutes: ["63K"],
    busToMTR: [],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "大圍站總站", alightStop: "大學站", stops: 6, timeMin: 20, fare: "HKD 5.8" }
    ],
    notes: "近大圍站，樓下有商場，租金適中，生活便利。"
  },
  {
    id: "golden-lion-garden", name: "金獅花園", nameEn: "Golden Lion Garden",
    lat: 22.3710, lng: 114.1795, area: "taiwai", nearestMTR: "taiwai", walkToMTR: 5,
    busRoutes: ["46X", "80", "81C", "85", "87B"], minibusRoutes: ["63K"],
    busToMTR: [
      { route: "63K", type: "minibus", boardStop: "金獅花園", alightStop: "大圍站", stops: 2, timeMin: 4, fare: "HKD 4.5" }
    ],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "大圍站總站", alightStop: "大學站", stops: 6, timeMin: 20, fare: "HKD 5.8", note: "步行至大圍站乘車" }
    ],
    notes: "價格相對親民，步行到大圍站約5分鐘，性價比高。"
  },
  {
    id: "parc-royale", name: "聚龍居", nameEn: "Parc Royale",
    lat: 22.3715, lng: 114.1802, area: "taiwai", nearestMTR: "taiwai", walkToMTR: 4,
    busRoutes: ["46X", "80", "81C", "85", "87B"], minibusRoutes: ["63K"],
    busToMTR: [],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "大圍站總站", alightStop: "大學站", stops: 6, timeMin: 20, fare: "HKD 5.8" }
    ],
    notes: "豪宅屋苑，有豪華會所，單位面積較大，租金偏高。"
  },
  {
    id: "the-riverpark", name: "溱岸8號", nameEn: "The Riverpark",
    lat: 22.3760, lng: 114.1805, area: "taiwai", nearestMTR: "taiwai", walkToMTR: 4,
    busRoutes: ["72A", "80M", "81C", "85"], minibusRoutes: ["63K"],
    busToMTR: [],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "大圍站/車公廟路", alightStop: "大學站", stops: 6, timeMin: 20, fare: "HKD 5.8" }
    ],
    notes: "新鴻基發展，樓齡較新，有會所，近城門河環境好。"
  },
  {
    id: "julimount-garden", name: "瑞峰花園", nameEn: "Julimount Garden",
    lat: 22.3702, lng: 114.1772, area: "taiwai", nearestMTR: "taiwai", walkToMTR: 6,
    busRoutes: ["80", "85", "87B"], minibusRoutes: ["63K"],
    busToMTR: [
      { route: "63K", type: "minibus", boardStop: "瑞峰花園", alightStop: "大圍站", stops: 2, timeMin: 4, fare: "HKD 4.5" }
    ],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "大圍站總站", alightStop: "大學站", stops: 6, timeMin: 20, fare: "HKD 5.8", note: "步行至大圍站乘車" }
    ],
    notes: "低密度豪宅，環境清幽，景觀開揚，車位充足。"
  },
  {
    id: "ravana-garden", name: "恆峰花園", nameEn: "Ravana Garden",
    lat: 22.3692, lng: 114.1785, area: "taiwai", nearestMTR: "taiwai", walkToMTR: 7,
    busRoutes: ["80", "85", "87B"], minibusRoutes: ["63K"],
    busToMTR: [
      { route: "63K", type: "minibus", boardStop: "恆峰花園", alightStop: "大圍站", stops: 2, timeMin: 5, fare: "HKD 4.5" }
    ],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "大圍站總站", alightStop: "大學站", stops: 6, timeMin: 20, fare: "HKD 5.8", note: "步行至大圍站乘車" }
    ],
    notes: "中型屋苑，環境清靜，有基本會所設施。"
  },
  {
    id: "fu-ka-garden", name: "富嘉花園", nameEn: "Fu Ka Garden",
    lat: 22.3705, lng: 114.1782, area: "taiwai", nearestMTR: "taiwai", walkToMTR: 5,
    busRoutes: ["80", "85", "87B"], minibusRoutes: ["63K"],
    busToMTR: [],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "大圍站總站", alightStop: "大學站", stops: 6, timeMin: 20, fare: "HKD 5.8", note: "步行至大圍站乘車" }
    ],
    notes: "居屋屋苑，價格較低，近大圍站，配套齊全。"
  },
  {
    id: "the-sherwood", name: "薈蕎", nameEn: "The Sherwood",
    lat: 22.3685, lng: 114.1768, area: "taiwai", nearestMTR: "taiwai", walkToMTR: 9,
    busRoutes: ["80", "85"], minibusRoutes: ["63K"],
    busToMTR: [
      { route: "63K", type: "minibus", boardStop: "薈蕎", alightStop: "大圍站", stops: 3, timeMin: 6, fare: "HKD 4.5" }
    ],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "大圍站總站", alightStop: "大學站", stops: 6, timeMin: 20, fare: "HKD 5.8", note: "步行至大圍站乘車" }
    ],
    notes: "小型單幢式住宅，樓齡新，主打細單位，適合單身。"
  },
  {
    id: "carado-garden", name: "雲疊花園", nameEn: "Carado Garden",
    lat: 22.3695, lng: 114.1780, area: "taiwai", nearestMTR: "taiwai", walkToMTR: 8,
    busRoutes: ["46X", "80", "85", "87B"], minibusRoutes: ["63K"],
    busToMTR: [
      { route: "63K", type: "minibus", boardStop: "雲疊花園", alightStop: "大圍站", stops: 2, timeMin: 5, fare: "HKD 4.5" }
    ],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "大圍站總站", alightStop: "大學站", stops: 6, timeMin: 20, fare: "HKD 5.8", note: "步行至大圍站乘車" }
    ],
    notes: "居屋屋苑，價格較低，環境清靜，離地鐵站稍遠。"
  },
  {
    id: "mei-shing-court", name: "美城苑", nameEn: "Mei Shing Court",
    lat: 22.3680, lng: 114.1792, area: "taiwai", nearestMTR: "taiwai", walkToMTR: 8,
    busRoutes: ["80", "85", "87B"], minibusRoutes: ["63K"],
    busToMTR: [
      { route: "63K", type: "minibus", boardStop: "美城苑", alightStop: "大圍站", stops: 2, timeMin: 5, fare: "HKD 4.5" }
    ],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "大圍站總站", alightStop: "大學站", stops: 6, timeMin: 20, fare: "HKD 5.8", note: "步行至大圍站乘車" }
    ],
    notes: "居屋屋苑，價格親民，環境清靜。"
  },
  {
    id: "king-tin-court", name: "景田苑", nameEn: "King Tin Court",
    lat: 22.3678, lng: 114.1768, area: "taiwai", nearestMTR: "taiwai", walkToMTR: 10,
    busRoutes: ["80", "85"], minibusRoutes: ["63K"],
    busToMTR: [
      { route: "63K", type: "minibus", boardStop: "景田苑", alightStop: "大圍站", stops: 3, timeMin: 6, fare: "HKD 4.5" }
    ],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "大圍站總站", alightStop: "大學站", stops: 6, timeMin: 20, fare: "HKD 5.8", note: "步行至大圍站乘車" }
    ],
    notes: "居屋屋苑，價格低，適合預算有限的學生。"
  },
  {
    id: "ka-tin-court", name: "嘉田苑", nameEn: "Ka Tin Court",
    lat: 22.3682, lng: 114.1772, area: "taiwai", nearestMTR: "taiwai", walkToMTR: 9,
    busRoutes: ["80", "85"], minibusRoutes: ["63K"],
    busToMTR: [
      { route: "63K", type: "minibus", boardStop: "嘉田苑", alightStop: "大圍站", stops: 3, timeMin: 6, fare: "HKD 4.5" }
    ],
    busToCUHK: [
      { route: "72A", type: "kmb", boardStop: "大圍站總站", alightStop: "大學站", stops: 6, timeMin: 20, fare: "HKD 5.8", note: "步行至大圍站乘車" }
    ],
    notes: "居屋屋苑，價格親民，近景田苑及美城苑。"
  }
];

// ========== POI 数据 (35+个) ==========
var POIS = [
  // ---- 商场 ----
  { id: "new-town-plaza", name: "新城市廣場", nameEn: "New Town Plaza", lat: 22.3815, lng: 114.1890, category: "mall", area: "shatin", notes: "沙田最大商場，一期+三期，品牌齊全" },
  { id: "citylink-plaza", name: "連城廣場", nameEn: "Citylink Plaza", lat: 22.3825, lng: 114.1895, category: "mall", area: "shatin", notes: "沙田站上蓋商場，餐飲為主" },
  { id: "home-square", name: "HomeSquare", nameEn: "HomeSquare", lat: 22.3828, lng: 114.1902, category: "mall", area: "shatin", notes: "家居主題商場，宜家家居所在" },
  { id: "city-one-plaza", name: "第一城中心", nameEn: "City One Plaza", lat: 22.3865, lng: 114.2038, category: "mall", area: "shatin", notes: "第一城屋苑商場，超市餐飲齊全" },
  { id: "royal-ascot-plaza", name: "駿景園廣場", nameEn: "Royal Ascot Plaza", lat: 22.3998, lng: 114.2008, category: "mall", area: "fotan", notes: "駿景園商場，超市+食肆" },
  { id: "festival-city-mall", name: "名城商場", nameEn: "Festival City Mall", lat: 22.3738, lng: 114.1793, category: "mall", area: "taiwai", notes: "名城基座商場，有超市餐飲" },
  { id: "shatin-centre-mall", name: "沙田中心商場", nameEn: "Shatin Centre Mall", lat: 22.3820, lng: 114.1890, category: "mall", area: "shatin", notes: "小型商場，日常購物便利" },
  { id: "lucky-plaza-mall", name: "好運中心商場", nameEn: "Lucky Plaza Mall", lat: 22.3824, lng: 114.1893, category: "mall", area: "shatin", notes: "小型商場，藥房日用為主" },
  { id: "jubilee-garden-mall", name: "銀禧花園商場", nameEn: "Jubilee Garden Mall", lat: 22.3972, lng: 114.1988, category: "mall", area: "fotan", notes: "銀禧花園基座商場" },
  { id: "grandeur-mall", name: "金禧花園商場", nameEn: "Grandeur Garden Mall", lat: 22.3720, lng: 114.1792, category: "mall", area: "taiwai", notes: "金禧花園基座商場" },

  // ---- 街市/市场 ----
  { id: "shatin-market", name: "沙田街市", nameEn: "Sha Tin Market", lat: 22.3818, lng: 114.1888, category: "market", area: "shatin", notes: "沙田主要濕街市，新鮮食材齊全" },
  { id: "taiwai-market", name: "大圍街市", nameEn: "Tai Wai Market", lat: 22.3725, lng: 114.1785, category: "market", area: "taiwai", notes: "大圍區主要街市" },
  { id: "fotan-market", name: "火炭街市", nameEn: "Fo Tan Market", lat: 22.3960, lng: 114.1978, category: "market", area: "fotan", notes: "火炭區街市" },
  { id: "wo-che-market", name: "禾輋街市", nameEn: "Wo Che Market", lat: 22.3884, lng: 114.1952, category: "market", area: "shatin", notes: "禾輋邨街市，近第一城" },

  // ---- 超市 ----
  { id: "yata-shatin", name: "一田百貨 (沙田)", nameEn: "YATA (Sha Tin)", lat: 22.3815, lng: 114.1890, category: "supermarket", area: "shatin", notes: "新城市廣場內，日式百貨+超市" },
  { id: "wellcome-shatin", name: "惠康 (沙田中心)", nameEn: "Wellcome (Shatin Centre)", lat: 22.3820, lng: 114.1890, category: "supermarket", area: "shatin", notes: "" },
  { id: "parknshop-cityone", name: "百佳 (第一城)", nameEn: "ParknShop (City One)", lat: 22.3865, lng: 114.2038, category: "supermarket", area: "shatin", notes: "" },
  { id: "wellcome-taiwai", name: "惠康 (大圍)", nameEn: "Wellcome (Tai Wai)", lat: 22.3730, lng: 114.1790, category: "supermarket", area: "taiwai", notes: "" },
  { id: "parknshop-fotan", name: "百佳 (火炭)", nameEn: "ParknShop (Fo Tan)", lat: 22.3965, lng: 114.1980, category: "supermarket", area: "fotan", notes: "" },
  { id: "wellcome-festival", name: "惠康 (名城)", nameEn: "Wellcome (Festival City)", lat: 22.3738, lng: 114.1793, category: "supermarket", area: "taiwai", notes: "名城商場內" },
  { id: "aeon-shatin", name: "AEON (新城市)", nameEn: "AEON (New Town Plaza)", lat: 22.3815, lng: 114.1890, category: "supermarket", area: "shatin", notes: "新城市廣場內" },

  // ---- 餐饮 ----
  { id: "shatin-food", name: "沙田市中心食肆", nameEn: "Sha Tin Central Dining", lat: 22.3820, lng: 114.1890, category: "restaurant", area: "shatin", notes: "新城市廣場及周邊大量餐廳" },
  { id: "taiwai-food", name: "大圍食街", nameEn: "Tai Wai Food Street", lat: 22.3730, lng: 114.1792, category: "restaurant", area: "taiwai", notes: "大圍站周邊，本地食肆集中" },
  { id: "fotan-food", name: "火炭食肆", nameEn: "Fo Tan Dining", lat: 22.3960, lng: 114.1980, category: "restaurant", area: "fotan", notes: "火炭站周邊食肆" },
  { id: "cityone-food", name: "第一城食肆", nameEn: "City One Dining", lat: 22.3865, lng: 114.2038, category: "restaurant", area: "shatin", notes: "第一城中心及周邊餐廳" },

  // ---- 诊所 ----
  { id: "shatin-clinic", name: "沙田診所集中區", nameEn: "Sha Tin Clinic Area", lat: 22.3820, lng: 114.1895, category: "clinic", area: "shatin", notes: "沙田中心/好運中心多間私家診所" },
  { id: "taiwai-clinic", name: "大圍診所", nameEn: "Tai Wai Clinic", lat: 22.3725, lng: 114.1788, category: "clinic", area: "taiwai", notes: "大圍站周邊多間診所" },

  // ---- 医院 (新增) ----
  { id: "prince-wales", name: "威爾斯親王醫院", nameEn: "Prince of Wales Hospital", lat: 22.3766, lng: 114.2002, category: "hospital", area: "shatin", notes: "沙田區最大公立醫院，近第一城" },
  { id: "shatin-hospital", name: "沙田醫院", nameEn: "Sha Tin Hospital", lat: 22.3985, lng: 114.2080, category: "hospital", area: "shatin", notes: "專科及康復醫院，近石門" },
  { id: "union-hospital", name: "仁安醫院", nameEn: "Union Hospital", lat: 22.3710, lng: 114.1810, category: "hospital", area: "taiwai", notes: "大圍私家醫院，設備先進" },

  // ---- 银行 (新增) ----
  { id: "hsbc-shatin", name: "匯豐銀行 (沙田)", nameEn: "HSBC (Sha Tin)", lat: 22.3820, lng: 114.1892, category: "bank", area: "shatin", notes: "沙田中心/新城市廣場內" },
  { id: "boc-shatin", name: "中國銀行 (沙田)", nameEn: "Bank of China (Sha Tin)", lat: 22.3818, lng: 114.1890, category: "bank", area: "shatin", notes: "" },
  { id: "hang-seng-shatin", name: "恆生銀行 (沙田)", nameEn: "Hang Seng Bank (Sha Tin)", lat: 22.3822, lng: 114.1895, category: "bank", area: "shatin", notes: "" },
  { id: "hsbc-fotan", name: "匯豐銀行 (火炭)", nameEn: "HSBC (Fo Tan)", lat: 22.3960, lng: 114.1980, category: "bank", area: "fotan", notes: "" },
  { id: "hsbc-taiwai", name: "匯豐銀行 (大圍)", nameEn: "HSBC (Tai Wai)", lat: 22.3730, lng: 114.1790, category: "bank", area: "taiwai", notes: "" },
  { id: "boc-taiwai", name: "中國銀行 (大圍)", nameEn: "Bank of China (Tai Wai)", lat: 22.3728, lng: 114.1788, category: "bank", area: "taiwai", notes: "" },
  { id: "hang-seng-cityone", name: "恆生銀行 (第一城)", nameEn: "Hang Seng Bank (City One)", lat: 22.3865, lng: 114.2038, category: "bank", area: "shatin", notes: "第一城中心內" }
];
