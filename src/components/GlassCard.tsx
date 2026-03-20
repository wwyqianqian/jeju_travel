import React from 'react';

export default function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/50 backdrop-blur-xl border border-white/60 shadow-lg rounded-2xl ${className}`}>
      {children}
    </div>
  );
}
