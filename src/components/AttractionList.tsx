"use client";
import React, { useState, useMemo } from 'react';
import { useItineraryStore } from '../store/useItineraryStore';
import { mockAttractions } from '../data/mockAttractions';
import GlassCard from './GlassCard';
import { Plus } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function AttractionList() {
  const addAttraction = useItineraryStore((state) => state.addAttraction);
  const [selectedDay, setSelectedDay] = useState('Day 1');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(mockAttractions.map(a => a.category)))];

  const filteredAttractions = useMemo(() => {
    if (selectedCategory === 'All') return mockAttractions;
    return mockAttractions.filter(a => a.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex justify-between items-center px-2">
        <h2 className="text-xl font-semibold text-teal-800">景点库</h2>
        <select 
          className="bg-white/60 backdrop-blur-sm border-white/50 border text-teal-900 rounded-lg px-2 py-1 outline-none text-sm"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option value="Day 1">Add to Day 1</option>
          <option value="Day 2">Add to Day 2</option>
          <option value="Day 3">Add to Day 3</option>
          <option value="Day 4">Add to Day 4</option>
          <option value="Day 5">Add to Day 5</option>
        </select>
      </div>

      <div className="px-2">
        <select 
          className="w-full bg-white/40 backdrop-blur-sm border-white/50 border text-teal-800 rounded-lg px-2 py-1.5 outline-none text-sm font-medium"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 pb-10">
        {filteredAttractions.map((attr) => (
          <GlassCard key={attr.id} className="p-3 flex gap-4 transition-transform hover:-translate-y-1">
            <ImageWithFallback 
              src={attr.image} 
              alt={attr.name} 
              className="w-20 h-20 object-cover rounded-xl shadow-sm" 
            />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-800">{attr.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{attr.koreanName}</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[10px] bg-teal-100/80 text-teal-700 px-2 py-0.5 rounded-full whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px]" title={attr.category}>
                  {attr.category.split(' ')[1] || attr.category}
                </span>
                <span className="text-xs text-slate-600 font-medium">{attr.duration}</span>
              </div>
            </div>
            <button 
              onClick={() => addAttraction(selectedDay, attr)}
              className="self-center bg-teal-500/80 hover:bg-teal-600 text-white p-2 rounded-full transition-colors backdrop-blur-sm shadow-sm"
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
