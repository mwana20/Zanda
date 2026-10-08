import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage = 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=80',
  afterImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  beforeLabel = 'BEFORE: Faded, weathered surface',
  afterLabel = 'AFTER: Fresh Zanda vibrant finish',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div className={`relative w-full select-none ${className}`}>
      {/* Slider Frame */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize border border-slate-700/80 shadow-2xl shadow-black/60 group"
      >
        {/* AFTER Image (Full background layer) */}
        <img
          src={afterImage}
          alt="After painting transformation"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          loading="lazy"
        />

        {/* AFTER Label Overlay (Anti-slop clean typography) */}
        <div className="absolute top-4 right-4 z-10 bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>{afterLabel}</span>
        </div>

        {/* BEFORE Image (Clipped layer based on sliderPosition) */}
        <div
          className="absolute inset-0 overflow-hidden select-none pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before painting transformation"
            className="absolute inset-0 w-full h-full object-cover max-w-none filter grayscale-[30%] brightness-90"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: '100%',
            }}
            loading="lazy"
          />

          {/* BEFORE Label Overlay */}
          <div className="absolute top-4 left-4 z-10 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg">
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none transition-transform"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable Handle Button */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-full flex items-center justify-center slider-handle-shadow transition-transform group-hover:scale-110 active:scale-95">
            <ArrowLeftRight className="w-5 h-5 text-slate-900" />
          </div>
        </div>
      </div>

      {/* Helpful instruction below slider */}
      <div className="flex items-center justify-between mt-3 px-2 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Drag or slide left & right to inspect transformation</span>
        </div>
        <span className="font-mono text-slate-400">{Math.round(sliderPosition)}% reveal</span>
      </div>
    </div>
  );
};
