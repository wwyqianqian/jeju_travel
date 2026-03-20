import React from 'react';

export default function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_15px_40px_rgba(14,165,233,0.12)] border border-white/40 rounded-2xl ${className}`}>
      {children}
    </div>
  );
}
