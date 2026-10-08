import React, { useEffect } from 'react';
import { ProjectItem, PageId } from '../types';
import { X, MapPin, Clock, UserCheck, ArrowRight, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full border border-slate-700 backdrop-blur-md transition-colors"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              {project.categoryLabel}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
              {project.name}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-300 mt-1">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block font-mono">Completion Time</span>
              <div className="flex items-center gap-1.5 mt-1 font-semibold text-white">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>{project.completionTime}</span>
              </div>
            </div>
            <div>
              <span className="text-slate-400 block font-mono">Client Type</span>
              <div className="flex items-center gap-1.5 mt-1 font-semibold text-white">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span>{project.clientType}</span>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-400 block font-mono">Location</span>
              <span className="font-semibold text-white mt-1 block">{project.location}</span>
            </div>
          </div>

          {/* Project Story & Challenge/Solution */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-heading text-white">
              Project Overview & Craftsmanship
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullStory || project.description}
            </p>
          </div>

          {/* Color Palette Used */}
          {project.palette && project.palette.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-amber-400">
                Colors & Tones Specified in this Project
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.palette.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800"
                  >
                    <div
                      className="w-8 h-8 rounded-md border border-white/20 shadow-inner flex-shrink-0"
                      style={{ backgroundColor: p.hex }}
                    />
                    <div className="overflow-hidden">
                      <span className="text-xs font-bold text-white block truncate">
                        {p.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        {p.hex}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {project.highlights && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-sky-400">
                Key Craft Highlights
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((h, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-lg"
                  >
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Inspired by this project? Get an identical finish for your property.
            </span>
            <button
              onClick={() => {
                onClose();
                onNavigate('contact');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-lg shadow-lg transition-all"
            >
              <span>Request Quote For This Style</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
