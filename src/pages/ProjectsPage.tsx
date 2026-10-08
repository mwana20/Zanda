import React, { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS_LIST } from '../data/content';
import { MapPin, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenProjectModal: (project: ProjectItem) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenProjectModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'interior' | 'exterior'>('all');

  const filteredProjects = PROJECTS_LIST.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const categories: { id: 'all' | 'residential' | 'commercial' | 'interior' | 'exterior'; label: string }[] = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'residential', label: 'RESIDENTIAL' },
    { id: 'commercial', label: 'COMMERCIAL' },
    { id: 'interior', label: 'INTERIOR' },
    { id: 'exterior', label: 'EXTERIOR' },
  ];

  return (
    <div className="relative text-slate-900 overflow-hidden pt-20 bg-white">
      {/* =========================================================================
          PROJECTS HERO
          ========================================================================= */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden border-b border-red-100">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Completed Zanda painting transformation"
            className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/55 via-white/20 to-white/10" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-red-100 text-xs font-mono font-bold text-red-500 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-slate-900 tracking-tight">
            TRANSFORMATIONS WE’RE PROUD OF.
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore authentic transformations executed by Zanda Painting across Kampala, Uganda. Every project reflects precision preparation and vibrant color harmony.
          </p>
        </div>
      </section>

      {/* =========================================================================
          FILTER CONTROLS (Functional Buttons)
          ========================================================================= */}
      <section className="py-8 bg-white border-t border-b border-red-100 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
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
          PROJECT CARDS GRID
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onOpenProjectModal(project)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-red-100 hover:border-red-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-100 flex flex-col cursor-pointer"
              >
                {/* Large Project Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Category & Location Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-red-500 font-mono font-bold border border-red-100 uppercase">
                      {project.categoryLabel}
                    </span>
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-slate-700 font-medium border border-red-100 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{project.location}</span>
                    </span>
                  </div>

                  {/* Swatch Previews at Bottom of Image */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                    {project.palette.map((p, idx) => (
                      <span
                        key={idx}
                        className="w-5 h-5 rounded-md border border-white/40 shadow-sm"
                        style={{ backgroundColor: p.hex }}
                        title={p.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-heading text-slate-900 group-hover:text-red-500 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Project View Button */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">
                      Turnaround: <strong className="text-slate-700">{project.completionTime}</strong>
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenProjectModal(project);
                      }}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 group-hover:text-red-400"
                    >
                      <span>VIEW PROJECT DETAILS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Custom Quote Box */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-red-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
                Have a similar property in mind?
              </h3>
              <p className="text-sm text-slate-600 max-w-xl">
                Get an instant quote tailored to your exact square footage and architectural specifications.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-xl shadow-red-500/20 transition-all flex-shrink-0"
            >
              <span>REQUEST YOUR QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
