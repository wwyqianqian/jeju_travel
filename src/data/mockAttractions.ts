export type Attraction = {
  id: string;
  name: string;
  koreanName: string;
  category: string;
  duration: string;
  lat: number;
  lng: number;
  image: string;
};

// 使用 Unsplash 可靠的长效 ID 直链，100% 避免图片失效
const getImg = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=500&q=80`;

export const mockAttractions: Attraction[] = [
  // 🛫 交通与购物 (Transport & Shopping)
  { id: 't1', name: '济州国际机场', koreanName: '제주국제공항', category: '🛫 交通与购物', duration: '1h', lat: 33.5104, lng: 126.4913, image: getImg('1436491865332-7a61a109cc05') },
  { id: 't2', name: '新罗免税店', koreanName: '신라면세점 제주점', category: '🛫 交通与购物', duration: '2h', lat: 33.4851, lng: 126.4816, image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=500&q=80' },
  { id: 't3', name: '乐天免税店', koreanName: '롯데면세점 제주점', category: '🛫 交通与购物', duration: '2h', lat: 33.4850, lng: 126.4820, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=500&q=80' },
  { id: 't4', name: 'Olive Young 济州总店', koreanName: '올리브영 제주본점', category: '🛫 交通与购物', duration: '1h', lat: 33.4996, lng: 126.5312, image: 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=500&q=80' },
  { id: 't5', name: 'Aesop 济州店', koreanName: '이솝 제주', category: '🛫 交通与购物', duration: '0.5h', lat: 33.5000, lng: 126.5300, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=500&q=80' },

  // 🥩 美食与疗愈 (Food & Healing)
  { id: 'f1', name: '熟成到 烤黑猪肉', koreanName: '숙성도 노형본관', category: '🥩 美食与疗愈', duration: '2h', lat: 33.4831, lng: 126.4821, image: getImg('1544025162-831522851996') },
  { id: 'f2', name: '豚似豚 烤黑猪肉', koreanName: '돈사돈 본점', category: '🥩 美食与疗愈', duration: '2h', lat: 33.4811, lng: 126.4673, image: getImg('1529193591184-b1d58069ecdd') },
  { id: 'f3', name: 'Moonsso 海鲜拉面', koreanName: '문쏘', category: '🥩 美食与疗愈', duration: '1h', lat: 33.3933, lng: 126.2394, image: getImg('1552611052-3ba9d45e5d30') },
  { id: 'f4', name: 'WE Hotel 顶级精油SPA', koreanName: 'WE호텔 웰니스 스파', category: '🥩 美食与疗愈', duration: '2.5h', lat: 33.2858, lng: 126.4357, image: getImg('1544161515-4ab6ce6db874') },

  // 🏝 牛岛深度游 (Udo Island Specifics)
  { id: 'u1', name: '西滨白沙/珊瑚海水浴场', koreanName: '서빈백사', category: '🏝 牛岛深度游', duration: '1.5h', lat: 33.5097, lng: 126.9455, image: getImg('1507525428034-b723cf961d3e') },
  { id: 'u2', name: '牛岛峰', koreanName: '우도봉', category: '🏝 牛岛深度游', duration: '2h', lat: 33.4975, lng: 126.9680, image: getImg('1464822759023-fed622ff2c3b') },
  { id: 'u3', name: 'Blanc Rocher 咖啡馆', koreanName: '블랑로쉐', category: '🏝 牛岛深度游', duration: '1h', lat: 33.5161, lng: 126.9535, image: getImg('1554118811-1e0d58224f24') },

  // 🌋 自然奇观 (Natural Wonders)
  { id: 'n1', name: '城山日出峰', koreanName: '성산일출봉', category: '🌋 自然奇观', duration: '2h', lat: 33.4586, lng: 126.9422, image: getImg('1501488094857-824f9fb6d817') },
  { id: 'n2', name: '汉拿山', koreanName: '한라산', category: '🌋 自然奇观', duration: '6h', lat: 33.3617, lng: 126.5292, image: getImg('1551846467-33e506abfb22') },
  { id: 'n3', name: '万丈窟', koreanName: '만장굴', category: '🌋 自然奇观', duration: '1.5h', lat: 33.5284, lng: 126.7716, image: getImg('1518341697526-9f89e2230198') },
  { id: 'n4', name: '龙头岩', koreanName: '용두암', category: '🌋 自然奇观', duration: '1h', lat: 33.5162, lng: 126.5120, image: getImg('1582216858000-84a1dff5c13b') },
  { id: 'n5', name: '柱状节理带', koreanName: '대포주상절리대', category: '🌋 自然奇观', duration: '1h', lat: 33.2382, lng: 126.4241, image: getImg('1469125155630-7ed37e065743') },
  { id: 'n6', name: '正房瀑布', koreanName: '정방폭포', category: '🌋 自然奇观', duration: '1h', lat: 33.2449, lng: 126.5718, image: getImg('1433086966358-54859d0ed716') },
  { id: 'n7', name: '天地渊瀑布', koreanName: '천지연폭포', category: '🌋 自然奇观', duration: '1h', lat: 33.2458, lng: 126.5562, image: getImg('1506544777-64cfbeaef56b') },
  { id: 'n8', name: '天帝渊瀑布', koreanName: '천제연폭포', category: '🌋 自然奇观', duration: '1h', lat: 33.2526, lng: 126.4184, image: getImg('1511497584788-876760111969') },
  { id: 'n9', name: '涉地可支', koreanName: '섭지코지', category: '🌋 自然奇观', duration: '1.5h', lat: 33.4241, lng: 126.9288, image: getImg('1533221990479-7a55280db59b') },

  // 🌊 浪漫海滩与步道 (Beaches & Trails)
  { id: 'b1', name: '挟才海水浴场', koreanName: '협재해수욕장', category: '🌊 浪漫海滩与步道', duration: '2h', lat: 33.3938, lng: 126.2396, image: getImg('1502680390469-be75c86b636f') },
  { id: 'b2', name: '咸德海水浴场', koreanName: '함덕해수욕장', category: '🌊 浪漫海滩与步道', duration: '2h', lat: 33.5431, lng: 126.6688, image: getImg('1519046904884-53103b34b206') },
  { id: 'b3', name: '月汀里海水浴场', koreanName: '월정리해변', category: '🌊 浪漫海滩与步道', duration: '1.5h', lat: 33.5561, lng: 126.7958, image: getImg('1471922694854-ff1b63b20054') },
  { id: 'b4', name: '梨湖泰宇海边', koreanName: '이호테우해변', category: '🌊 浪漫海滩与步道', duration: '1h', lat: 33.4983, lng: 126.4526, image: getImg('1515238152791-8216bfdf89a7') },
  { id: 'b5', name: '济州偶来小路', koreanName: '제주올레길', category: '🌊 浪漫海滩与步道', duration: '3h', lat: 33.4950, lng: 126.5300, image: getImg('1473448912268-2022ce9509d8') },
  { id: 'b6', name: '榧子林', koreanName: '비자림', category: '🌊 浪漫海滩与步道', duration: '1.5h', lat: 33.4824, lng: 126.8115, image: getImg('1448375240586-882707db888b') },
  { id: 'b7', name: '山君不离', koreanName: '산굼부리', category: '🌊 浪漫海滩与步道', duration: '1h', lat: 33.4354, lng: 126.6896, image: getImg('1500382017468-9049fed747ef') },
  { id: 'b8', name: '思连伊林间小路', koreanName: '사려니숲길', category: '🌊 浪漫海滩与步道', duration: '2h', lat: 33.4005, lng: 126.6433, image: getImg('1425913397330-cf8af2ff40a1') },
  { id: 'b9', name: '西归浦治愈之林', koreanName: '서귀포 치유의 숲', category: '🌊 浪漫海滩与步道', duration: '2.5h', lat: 33.3031, lng: 126.5416, image: getImg('1542273917363-3b1817f69a2d') },

  // 🎡 主题公园与现代体验 (Theme & Modern)
  { id: 'm1', name: '雪绿茶博物馆 O\'Sulloc', koreanName: '오설록티뮤지엄', category: '🎡 主题公园与现代体验', duration: '1.5h', lat: 33.3059, lng: 126.2895, image: getImg('1599839619722-39751411ea63') },
  { id: 'm2', name: '史努比庭院', koreanName: '스누피 가든', category: '🎡 主题公园与现代体验', duration: '2h', lat: 33.4350, lng: 126.7788, image: getImg('1589311025547-4cb296e83489') },
  { id: 'm3', name: 'ARTE MUSEUM', koreanName: '아르떼뮤지엄', category: '🎡 主题公园与现代体验', duration: '2h', lat: 33.3971, lng: 126.3458, image: getImg('1550684848-fac1c5b4e853') },
  { id: 'm4', name: '山茶花之丘', koreanName: '카멜리아 힐', category: '🎡 主题公园与现代体验', duration: '2h', lat: 33.2806, lng: 126.3560, image: getImg('1588614959060-4d144f28b207') },
  { id: 'm5', name: '神话世界', koreanName: '제주신화월드', category: '🎡 主题公园与现代体验', duration: '4h', lat: 33.3070, lng: 126.3150, image: getImg('1513889961551-628c1e5e2ee9') },
  { id: 'm6', name: '泰迪熊博物馆', koreanName: '테디베어뮤지엄', category: '🎡 主题公园与现代体验', duration: '1h', lat: 33.2503, lng: 126.4116, image: getImg('1559825481-12a05cc00344') },
  { id: 'm7', name: 'Hello Kitty乐园', koreanName: '헬로키티아일랜드', category: '🎡 主题公园与现代体验', duration: '1h', lat: 33.2899, lng: 126.3491, image: getImg('1511556820780-d912e42b4980') },

  // 🛖 人文与特色市场 (Culture & Markets)
  { id: 'c1', name: '济州东门传统市场', koreanName: '동문재래시장', category: '🛖 人文与特色市场', duration: '1.5h', lat: 33.5123, lng: 126.5262, image: getImg('1533900298318-6b8da08a523e') },
  { id: 'c2', name: '西归浦每日奥莱市场', koreanName: '서귀포매일올레시장', category: '🛖 人文与特色市场', duration: '1.5h', lat: 33.2495, lng: 126.5627, image: getImg('1555939594-58d7cb561ad1') },
  { id: 'c3', name: '城邑民俗村', koreanName: '성읍민속마을', category: '🛖 人文与特色市场', duration: '1.5h', lat: 33.3856, lng: 126.7997, image: getImg('1522737604185-5b4c9f7a73dc') },
  { id: 'c4', name: '海女博物馆', koreanName: '해녀박물관', category: '🛖 人文与特色市场', duration: '1h', lat: 33.5235, lng: 126.8580, image: getImg('1498055663784-db7ba1738cc6') },
  { id: 'c5', name: '药泉寺', koreanName: '약천사', category: '🛖 人文与特色市场', duration: '1h', lat: 33.2394, lng: 126.4496, image: getImg('1520697782780-602dc8303e83') }
];
