"use client";
import React, { useEffect, useState } from 'react';
import { useItineraryStore } from '../store/useItineraryStore';
import GlassCard from './GlassCard';
import ImageWithFallback from './ImageWithFallback';
import { Trash2, MapPin, Clock, Copy } from 'lucide-react';
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

  const copyItinerary = () => {
    let text = "# 我的济州岛 5 天行程规划 🌊\n\n";
    Object.entries(days || {}).forEach(([day, items]) => {
      text += `## ${day}\n`;
      if (!items || items.length === 0) {
        text += "- 自由活动 / 暂未安排\n\n";
        return;
      }
      items.forEach((item, index) => {
        text += `${index + 1}. **${item.name}** (${item.koreanName})\n`;
        text += `   - 预计游玩: ${item.duration} | 标签: ${item.category}\n`;
      });
      text += "\n";
    });
    
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ 行程清单已成功复制到剪贴板！可以直接粘贴到备忘录或微信里。");
    }).catch(() => {
      alert("❌ 复制失败，请重试。");
    });
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <h2 className="text-xl font-extrabold text-teal-900 tracking-tight">我的行程安排</h2>
        <button 
          onClick={copyItinerary}
          className="flex items-center gap-1.5 bg-teal-600/90 hover:bg-teal-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-all"
        >
          <Copy size={14} />
          一键导出文本
        </button>
      </div>

      <div className="flex flex-col flex-1 space-y-6 overflow-y-auto pr-4 pb-10">
        {Object.entries(days || {}).map(([day, items]) => {
          const safeItems = items || [];
          return (
          <div key={day} className="space-y-4">
            <h3 className="text-lg font-bold text-teal-800 border-b border-teal-200/50 pb-2">{day}</h3>
            {safeItems.length === 0 ? (
              <p className="text-sm text-slate-400 italic bg-white/30 px-3 py-2 rounded-lg border border-white/40">暂未安排景点，请从左侧添加。</p>
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
      );
    })}
      </div>
    </div>
  );
}
