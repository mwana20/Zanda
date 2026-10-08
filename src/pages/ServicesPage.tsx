import React from 'react';
import { PageId } from '../types';
import { SERVICES_LIST, ADDITIONAL_SERVICES } from '../data/content';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Paintbrush,
  HelpCircle,
  ShieldCheck,
  Palette,
  Layers,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  // Paint sheen guide to help clients understand finishes
  const sheenGuide = [
    { name: 'Flat / Matte', best: 'Ceilings & Low-Traffic Bedrooms', desc: 'Non-reflective, velvety depth that conceals wall flaws beautifully.' },
    { name: 'Eggshell', best: 'Living Rooms & Dining Areas', desc: 'Soft porcelain glow with great wipe-clean durability for active family spaces.' },
    { name: 'Satin', best: 'Hallways, Kitchens & Kids Rooms', desc: 'Silky pearl luster offering moisture resistance and easy scrubbability.' },
    { name: 'Semi-Gloss', best: 'Trim, Moldings, Cabinets & Doors', desc: 'Radiant reflection that resists moisture, stains, and daily handling.' },
    { name: 'High-Gloss', best: 'Architectural Feature Doors & Joinery', desc: 'Mirror-like glass brilliance and highest physical impact resistance.' },
  ];

  return (
    <div className="relative text-slate-900 overflow-hidden pt-20 bg-white">
      {/* =========================================================================
          SERVICES HERO
          ========================================================================= */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden border-b border-red-100">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
            alt="Zanda Painting services catalogue"
            className="w-full h-full object-cover filter brightness-[0.82] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/20 to-white/10" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-red-500 uppercase bg-white px-4 py-1.5 rounded-full border border-red-100 shadow-sm">
            Professional Painting Catalogue · Kampala, Uganda
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-slate-900 tracking-tight">
            CRAFTED FINISHES FOR EVERY SPACE
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From luxury residence interiors to weather-proof commercial facades and artisanal Venetian plaster, explore our comprehensive painting solutions.
          </p>
        </div>
      </section>

      {/* =========================================================================
          DETAILED SERVICES CATALOGUE (Large Photos & Subcategories)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES_LIST.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Photo Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-red-100 shadow-lg group bg-white">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity mix-blend-multiply"
                      style={{ backgroundColor: service.accentColor }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-red-100 text-xs font-mono font-bold text-slate-900 flex items-center gap-2 shadow-sm">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: service.accentColor }}
                      />
                      <span>Zanda Precision Series</span>
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-2">
                    <span
                      className="text-xs font-mono font-bold tracking-widest uppercase block"
                      style={{ color: service.accentColor }}
                    >
                      Service Specification #{index + 1}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Areas Covered Subcategories (Zero Pill Discipline - Clean List) */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs uppercase font-mono font-bold tracking-wider text-slate-500 block">
                      Specific Areas & Spaces Covered:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                      {service.subCategories.map((sub, sIdx) => (
                        <span
                          key={sIdx}
                          className="bg-white border border-red-100 px-3 py-1.5 rounded-md"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Features */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs uppercase font-mono font-bold tracking-wider text-slate-500 block">
                      Quality Standards Included:
                    </span>
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: service.accentColor }}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA button */}
                  <div className="pt-4">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-red-50 border border-red-200 hover:border-red-300 text-slate-900 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <span>Get a Quote for {service.title.split(' ')[0]}</span>
                      <ArrowRight className="w-4 h-4 text-amber-400" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          PAINT FINISH & SHEEN SELECTION GUIDE
          ========================================================================= */}
      <section className="py-20 bg-red-50/40 relative border-t border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              Technical Advisory
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight">
              CHOOSING THE RIGHT PAINT SHEEN
            </h2>
            <p className="text-sm text-slate-600">
              The level of sheen dictates light reflection, stain cleanability, and surface durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sheenGuide.map((sheen, sIdx) => (
              <div
                key={sIdx}
                className="p-6 rounded-2xl bg-white border border-red-100 space-y-3 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-mono font-bold text-xs">
                    0{sIdx + 1}
                  </div>
                  <h3 className="text-base font-bold font-heading text-slate-900">
                    {sheen.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sheen.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-red-100">
                  <span className="text-[10px] uppercase font-mono text-red-500 block font-bold">
                    Best Suitable For
                  </span>
                  <span className="text-xs text-slate-700 font-medium mt-0.5 block">
                    {sheen.best}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ADDITIONAL SERVICES LIST
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              Specialist Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight">
              ADDITIONAL SERVICES
            </h2>
            <p className="text-sm text-slate-600">
              Beyond whole-property repaints, we handle vital restorative surface crafts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDITIONAL_SERVICES.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-red-100 hover:border-red-200 transition-colors space-y-2 shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Paintbrush className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <h3 className="text-base font-bold font-heading text-slate-900">
                    {item.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM SECTION: NOT SURE WHAT YOUR SPACE NEEDS? TALK TO ZANDA
          ========================================================================= */}
      <section className="py-20 bg-red-50 relative border-t border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-400 mx-auto flex items-center justify-center text-white shadow-xl">
            <HelpCircle className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight">
            NOT SURE WHAT YOUR SPACE NEEDS?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Every building has unique sun exposure, wall moisture conditions, and lifestyle demands. Our team will inspect your property and give honest, expert advice.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 hover:from-amber-300 hover:to-orange-400 text-slate-950 text-sm font-extrabold uppercase tracking-wider rounded-xl shadow-xl transition-all"
            >
              <span>TALK TO ZANDA</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
