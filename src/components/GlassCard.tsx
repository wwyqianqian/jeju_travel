import React from 'react';

export default function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl ${className}`}>
      {children}
    </div>
  );
}
