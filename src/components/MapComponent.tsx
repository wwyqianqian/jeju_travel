"use client";
import dynamic from 'next/dynamic';

const MapViewer = dynamic(() => import('./MapViewer'), {
  ssr: false,
  loading: () => <div className="h-full bg-teal-50/50 animate-pulse rounded-2xl flex items-center justify-center text-teal-800">Map Loading...</div>
});

export default function MapComponent() {
  return <MapViewer />;
}
