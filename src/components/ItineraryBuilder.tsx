"use client";
import React, { useEffect, useState } from 'react';
import { useItineraryStore } from '../store/useItineraryStore';
import GlassCard from './GlassCard';
import ImageWithFallback from './ImageWithFallback';
import { Trash2, MapPin, Clock } from 'lucide-react';
import { useDrivingTime } from '../hooks/useDrivingTime';

function TransitTime({ origin, dest }: { origin: any, dest: any }) {
  const { time, loading } = useDrivingTime(origin.lat, origin.lng, dest.lat, dest.lng);
  return (
    <div className="flex items-center gap-2 pl-8 py-2 text-xs text-teal-600/80 font-medium relative">
      <div className="w-0.5 h-full bg-teal-300/50 absolute left-4 top-0 -z-0"></div>
      <span className="bg-teal-50/80 backdrop-blur-md px-2 py-1 rounded-md border border-teal-100 z-10 shadow-sm flex items-center gap-1">
        {loading ? '🚗 计算中...' : `🚗 ${time} 驾车`}
      </span>
    </div>
  );
}

export default function ItineraryBuilder() {
  const days = useItineraryStore((state) => state.days);
  const removeAttraction = useItineraryStore((state) => state.removeAttraction);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="p-4 text-teal-800">Loading...</div>;

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  return (
    <div className="flex flex-col h-full space-y-6 overflow-y-auto pr-4 pb-10">
      {Object.entries(days || {}).map(([day, items]) => {
        const safeItems = items || [];
        return (
        <div key={day} className="space-y-4">
          <h2 className="text-2xl font-bold text-teal-900 border-b border-teal-200/50 pb-2">{day}</h2>
          {safeItems.length === 0 ? (
            <p className="text-sm text-slate-500 italic">No attractions added yet. Add from the library.</p>
          ) : (
            <div className="space-y-3 relative">
              {safeItems.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex flex-col relative">
                  <GlassCard className="p-4 flex gap-4 items-center relative z-10 hover:bg-white/50 transition-colors">
                    <ImageWithFallback src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg shadow-sm" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 flex items-center gap-1">
                        <MapPin size={14} className="text-teal-600" />
                        {item.name} <span className="text-xs font-normal text-slate-500 ml-1">({item.koreanName})</span>
                      </h4>
                      <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <Clock size={12} /> {item.duration}
                      </div>
                    </div>
                    <button onClick={() => removeAttraction(day, item.id)} className="text-red-400 hover:text-red-600 transition-colors p-2">
                      <Trash2 size={16} />
                    </button>
                  </GlassCard>
                  
                  {index < safeItems.length - 1 && safeItems[index+1] && (
                    <TransitTime origin={item} dest={safeItems[index+1]} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )})}
    </div>
  );
}
