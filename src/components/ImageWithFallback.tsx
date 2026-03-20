import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function ImageWithFallback({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-teal-50 to-sky-100 border border-teal-100/50 text-teal-300 ${className}`}>
        <ImageIcon size={24} />
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => setHasError(true)} 
      loading="lazy"
    />
  );
}
