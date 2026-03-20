"use client";
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useItineraryStore } from '../store/useItineraryStore';

// 1. 扩充到 7 天的高级治愈系莫兰迪配色
const dayColors: Record<string, string> = {
  'Day 1': '#0369a1', // 【雾霾蓝 (Dusted Sky)】：像清晨带有薄雾的海面，比 Sky 500 更克制、深邃。
  'Day 2': '#0f766e', // 【抹茶绿 (Organic Teal)】：像深山里的绿茶园，带有自然的泥土感，而非荧光绿。
  'Day 3': '#78716c', // 【火山灰 (Volcanic Pebble)】：彻底抛弃突兀的紫色！换成带有暖色调的火山岩灰，高级、克制。
  'Day 4': '#b45309', // 【蜜蜡橙 (Sun-kissed Amber)】：像被海浪冲刷过的琥珀，比 Amber 500 更深沉柔和。
  'Day 5': '#be185d', // 【珊瑚粉 (Dusty Rose)】：抛弃亮红色！换成低饱和度的、带有灰色调的珊瑚粉。
  'Day 6': '#0891b2', // 【琉璃青 (Cyan 600)】：清透的青色，比 Day 1 的蓝稍微偏绿。
  'Day 7': '#65a30d', // 【青柠绿 (Lime 600)】：柔和的青柠色。
};


// 2. 动态生成带有当天主题色的“呼吸光晕圆点”图标
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: 'transparent-icon-container', // 关键：去掉 leaflet 默认的白色方块背景
    html: `
      <div class="custom-map-pin">
        <div class="pin-halo" style="background-color: ${color}33;"></div>
        <div class="pin-dot" style="border-color: ${color};"></div>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

export default function MapViewer() {
  const days = useItineraryStore((state) => state.days);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-full bg-teal-50/50 animate-pulse rounded-2xl"></div>;

  const jejuCenter: [number, number] = [33.3617, 126.5292];

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden shadow-inner border border-white/40">
      <MapContainer center={jejuCenter} zoom={10} style={{ height: '100%', width: '100%' }} zoomControl={false}>
        {/* 使用了更干净清透的底图样式 */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        
        {Object.entries(days || {}).map(([day, items]) => {
          if (!items || items.length === 0) return null;
          const positions: [number, number][] = items.map(item => [item.lat, item.lng]);
          
          // 如果超过 7 天，给一个默认的高级灰，绝对不用黑色
          const color = dayColors[day] || '#94a3b8'; 
          
          return (
            <React.Fragment key={day}>
              <Polyline positions={positions} color={color} weight={4} dashArray="5, 10" opacity={0.8} />
              {items.map((item, idx) => (
                <Marker 
                  key={`${day}-${item.id}-${idx}`} 
                  position={[item.lat, item.lng]}
                  icon={createCustomIcon(color)} // 3. 应用动态主题色图标！
                >
                  <Popup>
                    <div className="font-sans">
                      <p className="font-bold m-0 text-slate-800">{item.name}</p>
                      <p className="text-xs text-slate-500 m-0">{item.koreanName}</p>
                      {/* 弹出框的字也变成当天的颜色 */}
                      <p className="text-xs mt-1 font-semibold" style={{ color }}>{day} - 第 {idx + 1} 站</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </React.Fragment>
          );
        })}
      </MapContainer>
    </div>
  );
}