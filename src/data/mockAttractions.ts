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

export const mockAttractions: Attraction[] = [
  { id: '1', name: '涯月邑海滨', koreanName: '애월읍', category: '看海打卡', duration: '3h', lat: 33.4623, lng: 126.3200, image: 'https://images.unsplash.com/photo-1628795033481-28ea330f81d8?q=80&w=600&auto=format&fit=crop' },
  { id: '2', name: '山茶花之丘', koreanName: '카멜리아힐', category: '自然风光', duration: '2h', lat: 33.2806, lng: 126.3560, image: 'https://images.unsplash.com/photo-1588614959060-4d144f28b207?q=80&w=600&auto=format&fit=crop' },
  { id: '3', name: '西归浦治愈之林', koreanName: '서귀포 치유의 숲', category: '自然放松', duration: '2.5h', lat: 33.3031, lng: 126.5416, image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=600&auto=format&fit=crop' },
  { id: '4', name: 'WE Hotel 顶级精油SPA', koreanName: 'WE호텔 웰니스 스파', category: '疗愈放松', duration: '2h', lat: 33.2858, lng: 126.4357, image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop' },
  { id: '5', name: 'Osulloc 绿茶博物馆', koreanName: '오설록 티 뮤지엄', category: '自然美食', duration: '1.5h', lat: 33.3059, lng: 126.2895, image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=600&auto=format&fit=crop' },
  { id: '6', name: '城山日出峰', koreanName: '성산일출봉', category: '经典地标', duration: '2h', lat: 33.4586, lng: 126.9422, image: 'https://images.unsplash.com/photo-1501488094857-824f9fb6d817?q=80&w=600&auto=format&fit=crop' },
  { id: '7', name: '牛岛', koreanName: '우도', category: '看海打卡', duration: '4h', lat: 33.5042, lng: 126.9535, image: 'https://images.unsplash.com/photo-1518182170546-076616fd4625?q=80&w=600&auto=format&fit=crop' },
  { id: '8', name: 'Moonsso 海鲜拉面', koreanName: '문쏘', category: '美食打卡', duration: '1h', lat: 33.3933, lng: 126.2394, image: 'https://images.unsplash.com/photo-1552611052-3ba9d45e5d30?q=80&w=600&auto=format&fit=crop' },
];
