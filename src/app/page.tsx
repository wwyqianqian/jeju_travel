"use client";
import React from 'react';
import AttractionList from '../components/AttractionList';
import ItineraryBuilder from '../components/ItineraryBuilder';
import MapComponent from '../components/MapComponent';

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col p-4 md:p-6 lg:p-8 gap-4 overflow-hidden relative z-10">
      
      {/* Header */}
      <header className="flex-shrink-0 bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl p-4 flex justify-between items-center shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
        <div>
          <h1 className="text-3xl font-extrabold text-teal-900 tracking-tight flex items-baseline gap-2">
            제주여행 <span className="text-xl font-medium text-teal-700">Jeju Travel Planner</span>
          </h1>
          <p className="text-sm text-teal-600 mt-1">Design your healing journey in the Glass Sea.</p>
        </div>
      </header>

      {/* Main Content: 3 Columns Grid */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
        
        {/* Left Column: Attractions Library */}
        <section className="lg:col-span-3 h-full overflow-hidden">
          <AttractionList />
        </section>

        {/* Middle Column: Itinerary Builder */}
        <section className="lg:col-span-4 h-full overflow-hidden relative">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-3xl p-6 overflow-hidden">
            <ItineraryBuilder />
          </div>
        </section>

        {/* Right Column: Map Viewer */}
        <section className="lg:col-span-5 h-full overflow-hidden">
          <div className="h-full w-full rounded-3xl bg-white/20 backdrop-blur-md border border-white/50 shadow-lg p-2">
            <MapComponent />
          </div>
        </section>
        
      </div>

    </main>
  );
}
