export type Attraction = {
  id: string;
  name: string;
  koreanName: string;
  category: string;
  region: string;
  duration: string;
  lat: number;
  lng: number;
  image: string;
};

export const mockAttractions: Attraction[] = [
  { 
    id: 'e1', 
    name: '城山日出峰', 
    koreanName: '성산일출봉', 
    category: '🌋 自然奇观', 
    region: '东线',
    duration: '2h', 
    lat: 33.4586, 
    lng: 126.9422, 
    image: '/attractions/1_seongsan.jpg' 
  },
  { 
    id: 'e2', 
    name: '牛岛', 
    koreanName: '우도', 
    category: '🏝 牛岛深度游', 
    region: '东线',
    duration: '3h', 
    lat: 33.5042, 
    lng: 126.9535, 
    image: '/attractions/2_udo.jpg' 
  },
  { 
    id: 'e3', 
    name: '涉地可支', 
    koreanName: '섭지코지', 
    category: '🌊 浪漫海滩与步道', 
    region: '东线',
    duration: '1.5h', 
    lat: 33.4241, 
    lng: 126.9288, 
    image: '/attractions/3_seopjikoji.jpg' 
  },
  { 
    id: 'e4', 
    name: '月汀里 Moumoon咖啡', 
    koreanName: '월정리 무문', 
    category: '☕️ 海景咖啡与美食', 
    region: '东线',
    duration: '1.5h', 
    lat: 33.5561, 
    lng: 126.7958, 
    image: '/attractions/4_moumoon.jpg' 
  },
  { 
    id: 'e5', 
    name: '咸德海水浴场', 
    koreanName: '함덕해수욕장', 
    category: '🌊 浪漫海滩与步道', 
    region: '东线',
    duration: '2h', 
    lat: 33.5431, 
    lng: 126.6688, 
    image: '/attractions/5_hamdeok.jpg' 
  },
  { 
    id: 'w1', 
    name: '涯月邑', 
    koreanName: '애월읍', 
    category: '☕️ 海景咖啡与美食', 
    region: '西线',
    duration: '2.5h', 
    lat: 33.4623, 
    lng: 126.3200, 
    image: '/attractions/6_aewol.jpg' 
  },
  { 
    id: 'w2', 
    name: '大浦柱状节理带', 
    koreanName: '대포주상절리대', 
    category: '🌋 自然奇观', 
    region: '西线',
    duration: '1h', 
    lat: 33.2382, 
    lng: 126.4241, 
    image: '/attractions/7_jusangjeolli.jpg' 
  },
  { 
    id: 'w3', 
    name: 'Jeju Shooting Range', 
    koreanName: '제주실탄사격장', 
    category: '🎡 主题公园与现代体验', 
    region: '西线',
    duration: '1.5h', 
    lat: 33.2573, 
    lng: 126.4209, 
    image: '/attractions/8_shooting.jpg' 
  },
  { 
    id: 'w4', 
    name: '小羊肖恩牧场', 
    koreanName: '바음목장', 
    category: '🎡 主题公园与现代体验', 
    region: '西线',
    duration: '1.5h', 
    lat: 33.3512, 
    lng: 126.3451, 
    image: '/attractions/9_shaun_sheep.jpg' 
  },
  { 
    id: 'w5', 
    name: '橘子咖啡店', 
    koreanName: '귤꽃다락', 
    category: '☕️ 特色咖啡与美食', 
    region: '西线',
    duration: '1.5h', 
    lat: 33.2721, 
    lng: 126.3475, 
    image: '/attractions/10_tangerine_cafe.jpg' 
  },
  { 
    id: 'w6', 
    name: '挟才海水浴场', 
    koreanName: '협재해수욕장', 
    category: '🌊 浪漫海滩与步道', 
    region: '西线',
    duration: '2h', 
    lat: 33.3938, 
    lng: 126.2396, 
    image: '/attractions/11_hyeopjae.jpg' 
  },
  { 
    id: 'w7', 
    name: '海豚公路 追海豚', 
    koreanName: '노을해안로', 
    category: '🌊 浪漫海滩与步道', 
    region: '西线',
    duration: '1.5h', 
    lat: 33.2667, 
    lng: 126.2000, 
    image: '/attractions/12_dolphin.jpg' 
  },
  { 
    id: 's1', 
    name: '汉拿山', 
    koreanName: '한라산', 
    category: '🌋 自然奇观', 
    region: '南线',
    duration: '6h', 
    lat: 33.3617, 
    lng: 126.5292, 
    image: '/attractions/13_hallasan.jpg' 
  },
  { 
    id: 'c1', 
    name: '济州国际机场', 
    koreanName: '제주국제공항', 
    category: '🛫 交通与购物', 
    region: '市区',
    duration: '1h', 
    lat: 33.5104, 
    lng: 126.4913, 
    image: '/attractions/14_airport.jpg' 
  },
  { 
    id: 'c2', 
    name: 'D&DEPARTMENT', 
    koreanName: '디앤디파트먼트 제주', 
    category: '🛫 交通与购物', 
    region: '市区',
    duration: '1.5h', 
    lat: 33.5165, 
    lng: 126.5258, 
    image: '/attractions/15_ddepartment.jpg' 
  },
  { 
    id: 'c3', 
    name: 'Aesop 济州店', 
    koreanName: '이솝 탑동', 
    category: '🛫 交通与购物', 
    region: '市区',
    duration: '1h', 
    lat: 33.5162, 
    lng: 126.5251, 
    image: '/attractions/16_aesop.jpg' 
  },
  { 
    id: 'c4', 
    name: 'Olive Young 济州总店', 
    koreanName: '올리브영 제주본점', 
    category: '🛫 交通与购物', 
    region: '市区',
    duration: '1.5h', 
    lat: 33.5135, 
    lng: 126.5259, 
    image: '/attractions/17_oliveyoung.jpg' 
  },
  { 
    id: 'c5', 
    name: '乐天免税店', 
    koreanName: '롯데면세점 제주점', 
    category: '🛫 交通与购物', 
    region: '市区',
    duration: '2h', 
    lat: 33.4850, 
    lng: 126.4820, 
    image: '/attractions/18_lotte.jpg' 
  },
  { 
    id: 'c6', 
    name: '新罗免税店', 
    koreanName: '신라면세점 제주점', 
    category: '🛫 交通与购物', 
    region: '市区',
    duration: '2h', 
    lat: 33.4851, 
    lng: 126.4816, 
    image: '/attractions/19_shilla.jpg' 
  },
  { 
    id: 'c7', 
    name: '济州君悦酒店', 
    koreanName: '그랜드 하얏트 제주', 
    category: '🏨 酒店与休息', 
    region: '市区',
    duration: '12h', 
    lat: 33.4853, 
    lng: 126.4814, 
    image: '/attractions/20_grandhyatt.jpg' 
  },
  { 
    id: 'c8', 
    name: 'Regent Marine The Blue 酒店', 
    koreanName: '호텔 리젠트 마린 더 블루', 
    category: '🏨 酒店与休息', 
    region: '市区',
    duration: '12h', 
    lat: 33.5165, 
    lng: 126.5273, 
    image: '/attractions/21_regent.jpg' 
  },
  { 
    id: 'c9', 
    name: '济州东门传统市场', 
    koreanName: '동문재래시장', 
    category: '🛖 人文与特色市场', 
    region: '市区',
    duration: '2h', 
    lat: 33.5123, 
    lng: 126.5262, 
    image: '/attractions/22_dongmun.jpg' 
  },
  { 
    id: 'c10', 
    name: '黑猪肉一条街', 
    koreanName: '흑돼지거리', 
    category: '🥩 美食与疗愈', 
    region: '市区',
    duration: '2h', 
    lat: 33.5152, 
    lng: 126.5260, 
    image: '/attractions/23_blackpork.jpg' 
  }
];
