"use client";
import React, { useState } from 'react';
import { useItineraryStore } from '../store/useItineraryStore';
import GlassCard from './GlassCard';
import { Plus } from 'lucide-react';

export default function AttractionList() {
  const attractions = useItineraryStore((state) => state.availableAttractions);
  const addAttraction = useItineraryStore((state) => state.addAttraction);
  const [selectedDay, setSelectedDay] = useState('Day 1');

  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex justify-between items-center px-2">
        <h2 className="text-xl font-semibold text-teal-800">景点库</h2>
        <select 
          className="bg-white/60 backdrop-blur-sm border-white/50 border text-teal-900 rounded-lg px-2 py-1 outline-none"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option value="Day 1">Add to Day 1</option>
          <option value="Day 2">Add to Day 2</option>
          <option value="Day 3">Add to Day 3</option>
        </select>
      </div>
      
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 pb-10">
        {attractions.map((attr) => (
          <GlassCard key={attr.id} className="p-3 flex gap-4 transition-transform hover:-translate-y-1">
            <img src={attr.image} alt={attr.name} className="w-20 h-20 object-cover rounded-xl shadow-sm" />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-800">{attr.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{attr.koreanName}</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[10px] bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">{attr.category}</span>
                <span className="text-xs text-slate-600">{attr.duration}</span>
              </div>
            </div>
            <button 
              onClick={() => addAttraction(selectedDay, attr)}
              className="self-center bg-teal-500/80 hover:bg-teal-600 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
              title={`Add to ${selectedDay}`}
            >
              <Plus size={16} />
            </button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
