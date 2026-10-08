import React, { useState } from 'react';
import { COLOR_PALETTE_SWATCHES } from '../data/content';
import { ColorSwatch, PageId } from '../types';
import { Check, Sparkles, ArrowRight, Eye } from 'lucide-react';

interface ColorSwatchViewerProps {
  onSelectColorForQuote?: (colorName: string) => void;
  onNavigate?: (page: PageId) => void;
}

export const ColorSwatchViewer: React.FC<ColorSwatchViewerProps> = ({
  onSelectColorForQuote,
  onNavigate,
}) => {
  const [selectedSwatch, setSelectedSwatch] = useState<ColorSwatch>(COLOR_PALETTE_SWATCHES[1]); // Default to Sunset Orange
  const [hoveredSwatch, setHoveredSwatch] = useState<ColorSwatch | null>(null);

  const active = hoveredSwatch || selectedSwatch;

  return (
    <div className="w-full bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
      {/* Decorative ambient color glow matched to active swatch */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-25 transition-all duration-700 pointer-events-none"
        style={{ backgroundColor: active.hex }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Swatches Selector */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Color Laboratory</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              WHAT COLOR SPEAKS TO YOU?
            </h3>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Hover over and select any palette tone to experience how Zanda Painting transforms room energy, daylight reflectance, and architectural warmth.
            </p>
          </div>

          {/* Swatches Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            {COLOR_PALETTE_SWATCHES.map((swatch) => {
              const isSelected = selectedSwatch.id === swatch.id;
              const isHovered = hoveredSwatch?.id === swatch.id;

              return (
                <button
                  key={swatch.id}
                  onClick={() => setSelectedSwatch(swatch)}
                  onMouseEnter={() => setHoveredSwatch(swatch)}
                  onMouseLeave={() => setHoveredSwatch(null)}
                  className={`group relative flex flex-col items-center p-3 sm:p-3.5 rounded-xl text-left transition-all duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    isSelected
                      ? 'bg-slate-800/90 border-slate-600 shadow-xl scale-[1.04]'
                      : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700 hover:scale-[1.02]'
                  }`}
                  aria-label={`Select color ${swatch.name}`}
                >
                  {/* Swatch Disc / Block */}
                  <div
                    className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg shadow-inner transition-transform duration-300 group-hover:scale-105 flex items-center justify-center border border-white/20"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    {isSelected && (
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center shadow-md text-xs font-bold"
                        style={{
                          backgroundColor: swatch.hex === '#F9F6F0' ? '#0F172A' : '#FFFFFF',
                          color: swatch.hex === '#F9F6F0' ? '#FFFFFF' : '#0F172A',
                        }}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                  </div>

                  {/* Swatch Label */}
                  <span className="text-[11px] sm:text-xs font-bold font-heading text-slate-200 mt-2.5 text-center leading-tight group-hover:text-amber-400 transition-colors line-clamp-1">
                    {swatch.name}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 mt-0.5 uppercase tracking-wider">
                    {swatch.hex}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick quote action with chosen color */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                if (onSelectColorForQuote) {
                  onSelectColorForQuote(selectedSwatch.name);
                } else if (onNavigate) {
                  onNavigate('contact');
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all"
            >
              <span>Quote for &quot;{selectedSwatch.name}&quot;</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-400">
              Free color testing on your walls included in quotes.
            </span>
          </div>
        </div>

        {/* Right Column: Live Room Accent Wall Mockup */}
        <div className="lg:col-span-5">
          <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
            {/* Simulated 3D Room Render with dynamic Accent Wall */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              {/* Neutral Base Room Photo */}
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                alt="Room visualization"
                className="w-full h-full object-cover"
              />

              {/* Tint overlay on the feature wall */}
              <div
                className="absolute inset-0 mix-blend-multiply opacity-60 transition-colors duration-500 pointer-events-none"
                style={{ backgroundColor: active.hex }}
              />

              {/* Dynamic Tag on visualization */}
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-lg border border-slate-700/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/40 shadow-sm"
                      style={{ backgroundColor: active.hex }}
                    />
                    <h4 className="text-sm font-bold text-white font-heading">
                      {active.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Mood: <span className="text-slate-200 font-medium">{active.mood}</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 block">
                    Ideal Application
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium max-w-[140px] truncate block">
                    {active.bestFor}
                  </span>
                </div>
              </div>

              {/* Live Preview badge */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 border border-emerald-500/30">
                <Eye className="w-3 h-3 text-emerald-400" />
                <span>Live Accent Wall Simulator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
