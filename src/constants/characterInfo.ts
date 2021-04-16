import * as R from "ramda";

import { Member } from "../types/Member";

export const characterInfo: {
  [key: number]: Member;
} = {
  100111: {
    id: 100111,
    name: "日和",
    icon: "icon_unit_100111.png",
    nicknames: [],
  },
  100211: {
    id: 100211,
    name: "優衣",
    icon: "icon_unit_100211.png",
    nicknames: [],
  },
  100311: {
    id: 100311,
    name: "怜",
    icon: "icon_unit_100311.png",
    nicknames: [],
  },
  100411: {
    id: 100411,
    name: "禊",
    icon: "icon_unit_100411.png",
    nicknames: [],
  },
  100511: {
    id: 100511,
    name: "茉莉",
    icon: "icon_unit_100511.png",
    nicknames: [],
  },
  100611: {
    id: 100611,
    name: "茜里",
    icon: "icon_unit_100611.png",
    nicknames: [],
  },
  100711: {
    id: 100711,
    name: "宮子",
    icon: "icon_unit_100711.png",
    nicknames: [],
  },
  100811: {
    id: 100811,
    name: "雪",
    icon: "icon_unit_100811.png",
    nicknames: [],
  },
  100931: {
    id: 100931,
    name: "杏奈",
    icon: "icon_unit_100931.png",
    nicknames: [],
  },
  101031: {
    id: 101031,
    name: "真步",
    icon: "icon_unit_101031.png",
    nicknames: [],
  },
  101131: {
    id: 101131,
    name: "璃乃",
    icon: "icon_unit_101131.png",
    nicknames: [],
  },
  101231: {
    id: 101231,
    name: "初音",
    icon: "icon_unit_101231.png",
    nicknames: [],
  },
  101311: {
    id: 101311,
    name: "七七香",
    icon: "icon_unit_101311.png",
    nicknames: [],
  },
  101431: {
    id: 101431,
    name: "霞",
    icon: "icon_unit_101431.png",
    nicknames: [],
  },
  101511: {
    id: 101511,
    name: "美里",
    icon: "icon_unit_101511.png",
    nicknames: [],
  },
  101611: {
    id: 101611,
    name: "鈴奈",
    icon: "icon_unit_101611.png",
    nicknames: [],
  },
  101711: {
    id: 101711,
    name: "香織",
    icon: "icon_unit_101711.png",
    nicknames: [],
  },
  101831: {
    id: 101831,
    name: "伊緒",
    icon: "icon_unit_101831.png",
    nicknames: [],
  },
  102011: {
    id: 102011,
    name: "美美",
    icon: "icon_unit_102011.png",
    nicknames: [],
  },
  102111: {
    id: 102111,
    name: "胡桃",
    icon: "icon_unit_102111.png",
    nicknames: [],
  },
  102211: {
    id: 102211,
    name: "依里",
    icon: "icon_unit_102211.png",
    nicknames: [],
  },
  102311: {
    id: 102311,
    name: "綾音",
    icon: "icon_unit_102311.png",
    nicknames: [],
  },
  102511: {
    id: 102511,
    name: "鈴莓",
    icon: "icon_unit_102511.png",
    nicknames: [],
  },
  102611: {
    id: 102611,
    name: "鈴",
    icon: "icon_unit_102611.png",
    nicknames: [],
  },
  102711: {
    id: 102711,
    name: "惠理子",
    icon: "icon_unit_102711.png",
    nicknames: [],
  },
  102831: {
    id: 102831,
    name: "咲戀",
    icon: "icon_unit_102831.png",
    nicknames: [],
  },
  102931: {
    id: 102931,
    name: "望",
    icon: "icon_unit_102931.png",
    nicknames: [],
  },
  103031: {
    id: 103031,
    name: "妮諾",
    icon: "icon_unit_103031.png",
    nicknames: [],
  },
  103111: {
    id: 103111,
    name: "忍",
    icon: "icon_unit_103111.png",
    nicknames: [],
  },
  103231: {
    id: 103231,
    name: "秋乃",
    icon: "icon_unit_103231.png",
    nicknames: [],
  },
  103311: {
    id: 103311,
    name: "真陽",
    icon: "icon_unit_103311.png",
    nicknames: [],
  },
  103411: {
    id: 103411,
    name: "優花梨",
    icon: "icon_unit_103411.png",
    nicknames: [],
  },
  103631: {
    id: 103631,
    name: "鏡華",
    icon: "icon_unit_103631.png",
    nicknames: [],
  },
  103731: {
    id: 103731,
    name: "智",
    icon: "icon_unit_103731.png",
    nicknames: [],
  },
  103811: {
    id: 103811,
    name: "栞",
    icon: "icon_unit_103811.png",
    nicknames: [],
  },
  104011: {
    id: 104011,
    name: "碧",
    icon: "icon_unit_104011.png",
    nicknames: [],
  },
  104211: {
    id: 104211,
    name: "千歌",
    icon: "icon_unit_104211.png",
    nicknames: [],
  },
  104331: {
    id: 104331,
    name: "真琴",
    icon: "icon_unit_104331.png",
    nicknames: [],
  },
  104431: {
    id: 104431,
    name: "伊莉亞",
    icon: "icon_unit_104431.png",
    nicknames: [],
  },
  104511: {
    id: 104511,
    name: "空花",
    icon: "icon_unit_104511.png",
    nicknames: [],
  },
  104611: {
    id: 104611,
    name: "珠希",
    icon: "icon_unit_104611.png",
    nicknames: [],
  },
  104731: {
    id: 104731,
    name: "純",
    icon: "icon_unit_104731.png",
    nicknames: [],
  },
  104811: {
    id: 104811,
    name: "美冬",
    icon: "icon_unit_104811.png",
    nicknames: [],
  },
  104931: {
    id: 104931,
    name: "靜流",
    icon: "icon_unit_104931.png",
    nicknames: [],
  },
  105011: {
    id: 105011,
    name: "美咲",
    icon: "icon_unit_105011.png",
    nicknames: [],
  },
  105111: {
    id: 105111,
    name: "深月",
    icon: "icon_unit_105111.png",
    nicknames: [],
  },
  105211: {
    id: 105211,
    name: "莉瑪",
    icon: "icon_unit_105211.png",
    nicknames: [],
  },
  105331: {
    id: 105331,
    name: "莫妮卡",
    icon: "icon_unit_105331.png",
    nicknames: [],
  },
  105411: {
    id: 105411,
    name: "紡希",
    icon: "icon_unit_105411.png",
    nicknames: [],
  },
  105511: {
    id: 105511,
    name: "步未",
    icon: "icon_unit_105511.png",
    nicknames: [],
  },
  105631: {
    id: 105631,
    name: "流夏",
    icon: "icon_unit_105631.png",
    nicknames: [],
  },
  105731: {
    id: 105731,
    name: "吉塔",
    icon: "icon_unit_105731.png",
    nicknames: [],
  },
  105811: {
    id: 105811,
    name: "貪吃佩可",
    icon: "icon_unit_105811.png",
    nicknames: [],
  },
  105911: {
    id: 105911,
    name: "可可蘿",
    icon: "icon_unit_105911.png",
    nicknames: [],
  },
  106011: {
    id: 106011,
    name: "凱留",
    icon: "icon_unit_106011.png",
    nicknames: [],
  },
  106131: {
    id: 106131,
    name: "矛依未",
    icon: "icon_unit_106131.png",
    nicknames: [],
  },
  106331: {
    id: 106331,
    name: "亞里莎",
    icon: "icon_unit_106331.png",
    nicknames: [],
  },
  106431: {
    id: 106431,
    name: "シェフィ",
    icon: "icon_unit_106431.png",
    nicknames: [],
  },
  106531: {
    id: 106531,
    name: "嘉夜",
    icon: "icon_unit_106531.png",
    nicknames: [],
  },
  106631: {
    id: 106631,
    name: "祈梨",
    icon: "icon_unit_106631.png",
    nicknames: [],
  },
  106831: {
    id: 106831,
    name: "拉比林斯達",
    icon: "icon_unit_106831.png",
    nicknames: [],
  },
  107031: {
    id: 107031,
    name: "似似花",
    icon: "icon_unit_107031.png",
    nicknames: [],
  },
  107131: {
    id: 107131,
    name: "克莉絲提娜",
    icon: "icon_unit_107131.png",
    nicknames: [],
  },
  107531: {
    id: 107531,
    name: "貪吃佩可（夏日）",
    icon: "icon_unit_107531.png",
    nicknames: [],
  },
  107611: {
    id: 107611,
    name: "可可蘿（夏日）",
    icon: "icon_unit_107611.png",
    nicknames: [],
  },
  107731: {
    id: 107731,
    name: "鈴莓（夏日）",
    icon: "icon_unit_107731.png",
    nicknames: [],
  },
  107831: {
    id: 107831,
    name: "凱留（夏日）",
    icon: "icon_unit_107831.png",
    nicknames: [],
  },
  107931: {
    id: 107931,
    name: "珠希（夏日）",
    icon: "icon_unit_107931.png",
    nicknames: [],
  },
  108011: {
    id: 108011,
    name: "美冬（夏日）",
    icon: "icon_unit_108011.png",
    nicknames: [],
  },
  108131: {
    id: 108131,
    name: "忍（萬聖節）",
    icon: "icon_unit_108131.png",
    nicknames: [],
  },
  108211: {
    id: 108211,
    name: "宮子（萬聖節）",
    icon: "icon_unit_108211.png",
    nicknames: [],
  },
  108331: {
    id: 108331,
    name: "美咲（萬聖節）",
    icon: "icon_unit_108331.png",
    nicknames: [],
  },
  108431: {
    id: 108431,
    name: "千歌（聖誕節）",
    icon: "icon_unit_108431.png",
    nicknames: [],
  },
  108511: {
    id: 108511,
    name: "胡桃（聖誕節）",
    icon: "icon_unit_108511.png",
    nicknames: [],
  },
  108631: {
    id: 108631,
    name: "綾音（聖誕節）",
    icon: "icon_unit_108631.png",
    nicknames: [],
  },
  108731: {
    id: 108731,
    name: "日和（新年）",
    icon: "icon_unit_108731.png",
    nicknames: [],
  },
  108831: {
    id: 108831,
    name: "優衣（新年）",
    icon: "icon_unit_108831.png",
    nicknames: [],
  },
  108911: {
    id: 108911,
    name: "怜（新年）",
    icon: "icon_unit_108911.png",
    nicknames: [],
  },
  109011: {
    id: 109011,
    name: "惠理子（情人節）",
    icon: "icon_unit_109011.png",
    nicknames: [],
  },
  109131: {
    id: 109131,
    name: "靜流（情人節）",
    icon: "icon_unit_109131.png",
    nicknames: [],
  },
  109231: {
    id: 109231,
    name: "安",
    icon: "icon_unit_109231.png",
    nicknames: [],
  },
  109311: {
    id: 109311,
    name: "露",
    icon: "icon_unit_109311.png",
    nicknames: [],
  },
  109431: {
    id: 109431,
    name: "古蕾婭",
    icon: "icon_unit_109431.png",
    nicknames: [],
  },
  109531: {
    id: 109531,
    name: "空花（大江戶）",
    icon: "icon_unit_109531.png",
    nicknames: [],
  },
  109631: {
    id: 109631,
    name: "妮諾（大江戶）",
    icon: "icon_unit_109631.png",
    nicknames: [],
  },
  109731: {
    id: 109731,
    name: "雷姆",
    icon: "icon_unit_109731.png",
    nicknames: [],
  },
  109811: {
    id: 109811,
    name: "拉姆",
    icon: "icon_unit_109811.png",
    nicknames: [],
  },
  109931: {
    id: 109931,
    name: "愛蜜莉雅",
    icon: "icon_unit_109931.png",
    nicknames: [],
  },
  110031: {
    id: 110031,
    name: "鈴奈（夏日）",
    icon: "icon_unit_110031.png",
    nicknames: [],
  },
  110111: {
    id: 110111,
    name: "伊緒（夏日）",
    icon: "icon_unit_110111.png",
    nicknames: [],
  },
  110331: {
    id: 110331,
    name: "咲戀（夏日）",
    icon: "icon_unit_110331.png",
    nicknames: [],
  },
  110431: {
    id: 110431,
    name: "真琴（夏日）",
    icon: "icon_unit_110431.png",
    nicknames: [],
  },
  110511: {
    id: 110511,
    name: "香織（夏日）",
    icon: "icon_unit_110511.png",
    nicknames: [],
  },
  110631: {
    id: 110631,
    name: "真步（夏日）",
    icon: "icon_unit_110631.png",
    nicknames: [],
  },
  110731: {
    id: 110731,
    name: "碧（插班生）",
    icon: "icon_unit_110731.png",
    nicknames: [],
  },
  110831: {
    id: 110831,
    name: "克蘿依",
    icon: "icon_unit_110831.png",
    nicknames: [],
  },
  110931: {
    id: 110931,
    name: "琪愛兒",
    icon: "icon_unit_110931.png",
    nicknames: [],
  },
  111031: {
    id: 111031,
    name: "優妮",
    icon: "icon_unit_111031.png",
    nicknames: [],
  },
  111131: {
    id: 111131,
    name: "鏡華（萬聖節）",
    icon: "icon_unit_111131.png",
    nicknames: [],
  },
  111211: {
    id: 111211,
    name: "禊（萬聖節）",
    icon: "icon_unit_111211.png",
    nicknames: [],
  },
  111331: {
    id: 111331,
    name: "美美（萬聖節）",
    icon: "icon_unit_111331.png",
    nicknames: [],
  },
  111431: {
    id: 111431,
    name: "露娜",
    icon: "icon_unit_111431.png",
    nicknames: [],
  },
  111531: {
    id: 111531,
    name: "克莉絲提娜（聖誕節）",
    icon: "icon_unit_111531.png",
    nicknames: [],
  },
  111611: {
    id: 111611,
    name: "望（聖誕節）",
    icon: "icon_unit_111611.png",
    nicknames: [],
  },
  111731: {
    id: 111731,
    name: "伊莉亞（聖誕節）",
    icon: "icon_unit_111731.png",
    nicknames: [],
  },
  111831: {
    id: 111831,
    name: "貪吃佩可（新年）",
    icon: "icon_unit_111831.png",
    nicknames: [],
  },
  111931: {
    id: 111931,
    name: "可可蘿（新年）",
    icon: "icon_unit_111931.png",
    nicknames: [],
  },
  112031: {
    id: 112031,
    name: "凱留（新年）",
    icon: "icon_unit_112031.png",
    nicknames: [],
  },
  112111: {
    id: 112111,
    name: "鈴莓（新年）",
    icon: "icon_unit_112111.png",
    nicknames: [],
  },
  112231: {
    id: 112231,
    name: "霞（魔法少女）",
    icon: "icon_unit_112231.png",
    nicknames: [],
  },
  112311: {
    id: 112311,
    name: "栞（魔法少女）",
    icon: "icon_unit_112311.png",
    nicknames: [],
  },
  112431: {
    id: 112431,
    name: "卯月（NGs）",
    icon: "icon_unit_112431.png",
    nicknames: [],
  },
  112531: {
    id: 112531,
    name: "凜（NGs）",
    icon: "icon_unit_112531.png",
    nicknames: [],
  },
  112611: {
    id: 112611,
    name: "未央（NGs）",
    icon: "icon_unit_112611.png",
    nicknames: [],
  },
  112731: {
    id: 112731,
    name: "鈴（遊俠）",
    icon: "icon_unit_112731.png",
    nicknames: [],
  },
  112831: {
    id: 112831,
    name: "真陽（遊俠）",
    icon: "icon_unit_112831.png",
    nicknames: [],
  },
  112931: {
    id: 112931,
    name: "璃乃（奇幻）",
    icon: "icon_unit_112931.png",
    nicknames: [],
  },
  113011: {
    id: 113011,
    name: "步未（奇幻）",
    icon: "icon_unit_113011.png",
    nicknames: [],
  },
  113131: {
    id: 113131,
    name: "流夏（夏日）",
    icon: "icon_unit_113131.png",
    nicknames: [],
  },
  113211: {
    id: 113211,
    name: "杏奈（夏日）",
    icon: "icon_unit_113211.png",
    nicknames: [],
  },
  113331: {
    id: 113331,
    name: "七七香（夏日）",
    icon: "icon_unit_113331.png",
    nicknames: [],
  },
  113431: {
    id: 113431,
    name: "初音（夏日）",
    icon: "icon_unit_113431.png",
    nicknames: [],
  },
  113511: {
    id: 113511,
    name: "美里（夏日）",
    icon: "icon_unit_113511.png",
    nicknames: [],
  },
  113631: {
    id: 113631,
    name: "純（夏日）",
    icon: "icon_unit_113631.png",
    nicknames: [],
  },
  113731: {
    id: 113731,
    name: "茜里（天使）",
    icon: "icon_unit_113731.png",
    nicknames: [],
  },
  113831: {
    id: 113831,
    name: "依里（天使）",
    icon: "icon_unit_113831.png",
    nicknames: [],
  },
  113931: {
    id: 113931,
    name: "紡希（萬聖節）",
    icon: "icon_unit_113931.png",
    nicknames: [],
  },
  114031: {
    id: 114031,
    name: "怜（萬聖節）",
    icon: "icon_unit_114031.png",
    nicknames: [],
  },
  114111: {
    id: 114111,
    name: "茉莉（萬聖節）",
    icon: "icon_unit_114111.png",
    nicknames: [],
  },
  114231: {
    id: 114231,
    name: "莫妮卡（魔法少女）",
    icon: "icon_unit_114231.png",
    nicknames: [],
  },
  114331: {
    id: 114331,
    name: "智（魔法少女）",
    icon: "icon_unit_114331.png",
    nicknames: [],
  },
  114431: {
    id: 114431,
    name: "秋乃（聖誕節）",
    icon: "icon_unit_114431.png",
    nicknames: [],
  },
  114531: {
    id: 114531,
    name: "咲戀（聖誕節）",
    icon: "icon_unit_114531.png",
    nicknames: [],
  },
  114611: {
    id: 114611,
    name: "優花梨（聖誕節）",
    icon: "icon_unit_114611.png",
    nicknames: [],
  },
  114711: {
    id: 114711,
    name: "ムイミ（ニューイヤー）",
    icon: "icon_unit_114711.png",
    nicknames: [],
  },
  115031: {
    id: 115031,
    name: "ネネカ（ニューイヤー）",
    icon: "icon_unit_115031.png",
    nicknames: [],
  },
  115531: {
    id: 115531,
    name: "コッコロ（儀装束）",
    icon: "icon_unit_115531.png",
    nicknames: [],
  },
  115611: {
    id: 115611,
    name: "ユイ（儀装束）",
    icon: "icon_unit_115611.png",
    nicknames: [],
  },
  115731: {
    id: 115731,
    name: "カスミ（サマー）",
    icon: "icon_unit_115731.png",
    nicknames: [],
  },
  115811: {
    id: 115811,
    name: "リマ（シンデレラ）",
    icon: "icon_unit_115811.png",
    nicknames: [],
  },
  115931: {
    id: 115931,
    name: "マコト（シンデレラ）",
    icon: "icon_unit_115931.png",
    nicknames: [],
  },
  116031: {
    id: 116031,
    name: "マホ（シンデレラ）",
    icon: "icon_unit_116031.png",
    nicknames: [],
  },
  116331: {
    id: 116331,
    name: "チエル（聖学祭）",
    icon: "icon_unit_116331.png",
    nicknames: [],
  },
  170131: {
    id: 170131,
    name: "环奈",
    icon: "icon_unit_170131.png",
    nicknames: [],
  },
  170231: {
    id: 170231,
    name: "环奈（振袖）",
    icon: "icon_unit_170231.png",
    nicknames: [],
  },
  180131: {
    id: 180131,
    name: "日和（公主）",
    icon: "icon_unit_180131.png",
    nicknames: [],
  },
  180231: {
    id: 180231,
    name: "優衣（公主）",
    icon: "icon_unit_180231.png",
    nicknames: [],
  },
  180431: {
    id: 180431,
    name: "貪吃佩可（公主）",
    icon: "icon_unit_180431.png",
    nicknames: [],
  },
  180531: {
    id: 180531,
    name: "可可蘿（公主）",
    icon: "icon_unit_180531.png",
    nicknames: [],
  },
  180631: {
    id: 180631,
    name: "キャル（プリンセス）",
    icon: "icon_unit_180631.png",
    nicknames: [],
  },
};

export const emptyMembers: Member[] = [
  {
    id: 1,
    name: "empty",
    icon: "empty",
    nicknames: [],
  },
  {
    id: 2,
    name: "empty",
    icon: "empty",
    nicknames: [],
  },
  {
    id: 3,
    name: "empty",
    icon: "empty",
    nicknames: [],
  },
  {
    id: 4,
    name: "empty",
    icon: "empty",
    nicknames: [],
  },
  {
    id: 5,
    name: "empty",
    icon: "empty",
    nicknames: [],
  },
];

export const allMembers = R.values(characterInfo);