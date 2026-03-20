"use client";
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useItineraryStore } from '../store/useItineraryStore';

// Fix for default leaflet icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const dayColors = {
  'Day 1': '#0ea5e9', // Sky blue
  'Day 2': '#10b981', // Emerald
  'Day 3': '#8b5cf6', // Violet
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
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        
        {Object.entries(days).map(([day, items]) => {
          const positions: [number, number][] = items.map(item => [item.lat, item.lng]);
          const color = dayColors[day as keyof typeof dayColors] || '#000';
          
          return (
            <React.Fragment key={day}>
              <Polyline positions={positions} color={color} weight={4} dashArray="5, 10" opacity={0.8} />
              {items.map((item, idx) => (
                <Marker key={`${day}-${item.id}-${idx}`} position={[item.lat, item.lng]}>
                  <Popup>
                    <div className="font-sans">
                      <p className="font-bold m-0">{item.name}</p>
                      <p className="text-xs text-gray-500 m-0">{item.koreanName}</p>
                      <p className="text-xs mt-1 text-teal-600 font-semibold">{day} - Stop {idx + 1}</p>
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
