import React, { useEffect } from 'react';
import { GalleryPhoto } from '../types';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigateIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigateIndex,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigateIndex((currentIndex + 1) % photos.length);
      if (e.key === 'ArrowLeft') onNavigateIndex((currentIndex - 1 + photos.length) % photos.length);
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, photos.length, onClose, onNavigateIndex]);

  if (currentIndex === null || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigateIndex((currentIndex + 1) % photos.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigateIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar with Counter and Close */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-xs text-slate-300">
        <div className="bg-slate-900/80 border border-slate-700/80 px-3 py-1.5 rounded-lg font-mono">
          <span className="text-amber-400 font-bold">{currentIndex + 1}</span> / {photos.length}
        </div>
        <button
          onClick={onClose}
          className="p-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full border border-slate-700 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Navigation Button */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 z-20 p-3 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full border border-slate-700/80 transition-transform hover:scale-110 active:scale-95 shadow-xl"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-xl border border-slate-800 shadow-2xl bg-black">
          <img
            src={currentPhoto.image}
            alt={currentPhoto.title}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption Card */}
        <div className="w-full mt-3 bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-left shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 className="text-base font-bold font-heading text-white">
              {currentPhoto.title}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentPhoto.location}</span>
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            {currentPhoto.caption}
          </p>
        </div>
      </div>

      {/* Next Navigation Button */}
      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 z-20 p-3 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full border border-slate-700/80 transition-transform hover:scale-110 active:scale-95 shadow-xl"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
