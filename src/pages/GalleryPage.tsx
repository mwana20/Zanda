import React, { useState } from 'react';
import { GalleryPhoto } from '../types';
import { GALLERY_PHOTOS } from '../data/content';
import { Sparkles, MapPin, Eye, Maximize2 } from 'lucide-react';

interface GalleryPageProps {
  onOpenLightbox: (index: number) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL' },
    { id: 'interiors', label: 'INTERIORS' },
    { id: 'exteriors', label: 'EXTERIORS' },
    { id: 'homes', label: 'HOMES' },
    { id: 'commercial', label: 'COMMERCIAL' },
    { id: 'color', label: 'COLOR & CRAFT' },
    { id: 'before_after', label: 'BEFORE & AFTER' },
  ];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeCategory === 'all') return true;
    return photo.category === activeCategory;
  });

  return (
    <div className="relative text-slate-900 overflow-hidden pt-20 bg-white">
      {/* =========================================================================
          GALLERY HERO (Visual & Compact)
          ========================================================================= */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden border-b border-red-100">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
            alt="Gallery hero image showing painted walls and design finishes"
            className="w-full h-full object-cover filter brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/35 to-white/15" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-red-100 text-xs font-mono font-bold text-red-500 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24 CURATED PHOTOGRAPHIC CASE STUDIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading text-slate-900 tracking-tight">
            VISUAL GALLERY
          </h1>

          <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto">
            Let the finishes speak. Browse our real work, precision tool craft, and color transformations across Kampala.
          </p>
        </div>
      </section>

      {/* =========================================================================
          GALLERY CATEGORIES BAR
          ========================================================================= */}
      <section className="py-6 bg-white border-t border-b border-red-100 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${
                    isActive
                      ? 'bg-white text-red-600 border border-red-200 shadow-sm'
                      : 'bg-white text-slate-600 hover:text-red-600 hover:bg-red-50 border border-red-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MASONRY PHOTO GRID
          ========================================================================= */}
      <section className="py-12 lg:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredPhotos.map((photo, index) => {
              // Find the original index in GALLERY_PHOTOS for lightbox consistency
              const originalIndex = GALLERY_PHOTOS.findIndex((p) => p.id === photo.id);

              return (
                <div
                  key={photo.id}
                  onClick={() => onOpenLightbox(originalIndex !== -1 ? originalIndex : index)}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden border border-red-100 hover:border-red-200 shadow-lg cursor-pointer group transition-all duration-300 hover:-translate-y-1 bg-white"
                >
                  {/* Photo with aspect styling */}
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                    {/* Top Tag */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase bg-white/90 text-red-500 px-2.5 py-1 rounded border border-red-100">
                        {photo.categoryLabel}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-900">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="space-y-1 text-left">
                      <h4 className="text-sm font-bold font-heading text-red-500">
                        {photo.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-white">
                        <MapPin className="w-3 h-3 text-red-300" />
                        <span>{photo.location}</span>
                      </div>
                      <p className="text-xs text-white line-clamp-2 pt-0.5">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
