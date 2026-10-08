import React from 'react';
import { PageId, ProjectItem } from '../types';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ColorSwatchViewer } from '../components/ColorSwatchViewer';
import zandaPainterHero from '../assets/images/zanda_painter_hero_1791410279132.jpg';
import {
  SERVICES_LIST,
  PROJECTS_LIST,
  TESTIMONIALS,
  STATISTICS,
  WHY_CHOOSE_ZANDA,
  COMPANY_INFO,
} from '../data/content';
import {
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Paintbrush,
  ShieldCheck,
  Clock,
  Eye,
  Star,
  Layers,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenProjectModal: (project: ProjectItem) => void;
  onSelectColorForQuote: (colorName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenProjectModal,
  onSelectColorForQuote,
}) => {
  const featuredProject = PROJECTS_LIST[0]; // Modern Kampala Residence

  return (
    <div className="relative text-slate-900 overflow-hidden bg-white">
      {/* =========================================================================
          HERO SECTION (Full-Screen Dramatic Cinematic Photography)
          ========================================================================= */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Full-screen Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={zandaPainterHero}
            alt="Professional Zanda painter transforming a Kampala luxury interior"
            className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
          />
          {/* Subtle dark gradient overlay to guarantee 100% WCAG legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/10 to-white/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/10 to-transparent" />
        </div>

        {/* Subtle decorative paint droplets & brush stroke glow */}
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            {/* Location & Brand Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-red-100 backdrop-blur-md text-xs font-semibold text-slate-600 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>{COMPANY_INFO.location}</span>
              <span className="text-slate-400">·</span>
              <span className="text-red-500">Master Painting Craftsmen</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight text-white leading-[1.05]">
                <span className="block text-red-500 text-lg sm:text-2xl font-mono font-bold tracking-widest uppercase mb-1">
                  ZANDA PAINTING
                </span>
                “WE BRING YOUR WALLS TO LIFE.”
              </h1>

              <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl pt-2 text-shadow-sm">
                Professional interior and exterior painting services that transform ordinary spaces into beautiful places. Clean finishes, careful preparation, and vibrant color craftsmanship across Kampala.
              </p>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-red-500 to-rose-500 hover:from-red-500 hover:via-red-400 hover:to-rose-400 rounded-xl shadow-xl shadow-red-500/25 hover:shadow-red-500/40 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 rounded-xl backdrop-blur-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>VIEW OUR WORK</span>
                <Eye className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Flawless Dust-Free Prep</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero-VOC Safe Paints</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Weather-Shield Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle gradient divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      </section>

      {/* =========================================================================
          COLOR INTRODUCTION (Split Layout: The Zanda Difference)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Freshly Painted Interior Photograph with colorful abstract paint stroke */}
            <div className="lg:col-span-6 relative">
              {/* Colorful abstract paint stroke accent behind image */}
              <div className="absolute -top-6 -left-6 -bottom-6 -right-6 bg-gradient-to-tr from-red-100 via-rose-100 to-red-50 rounded-3xl transform -rotate-1 blur-lg pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                  alt="Freshly painted modern interior by Zanda Painting"
                  className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Floating Craftsmanship Badge */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-slate-950/90 backdrop-blur-md border border-slate-800 p-4 rounded-xl flex items-center gap-3.5 shadow-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center text-white font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-red-500 font-bold block">
                      Kampala Precision Standard
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Razor-sharp edges & uniform sheen
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Zanda Difference Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                <Paintbrush className="w-3.5 h-3.5" />
                <span>THE ZANDA DIFFERENCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
                “A FRESH COAT. <br />
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-rose-400 bg-clip-text text-transparent">
                  A WHOLE NEW FEEL.”
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                We believe color can completely transform a space. Our professional team delivers clean finishes, careful preparation and beautiful results for homes and businesses across Kampala.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Flawless Surface Preparation:</strong> We treat cracks, sand smooth, and lock in moisture barriers before paint ever touches the wall.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-400/10 border border-orange-400/30 flex items-center justify-center text-orange-400 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Tailored Color Harmony:</strong> Curated palettes matched to your room’s natural equatorial daylight and architecture.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Spotless Respect for Your Space:</strong> Full furniture masking, heavy floor tarping, and complete daily cleanups.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-red-50 text-slate-900 border border-red-100 hover:border-red-300 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 group"
                >
                  <span>LEARN ABOUT US</span>
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES PREVIEW (What We Paint - 6 Cards)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-red-50/60 relative border-t border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Comprehensive Painting Solutions
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight">
                WHAT WE PAINT
              </h2>
              <p className="text-sm sm:text-base text-slate-400 max-w-xl">
                Every surface has unique needs. Discover our specialized interior, exterior, commercial and decorative painting expertise.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 hover:text-red-400 transition-colors"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 6 Rich Service Cards with Hover Zoom & Overlays */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                onClick={() => onNavigate('services')}
                className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 cursor-pointer flex flex-col"
              >
                {/* Service Image with Zoom & Color Tint Overlay */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Color Overlay on Hover */}
                  <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300 mix-blend-multiply"
                    style={{ backgroundColor: service.accentColor }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Accent Color indicator dot */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-mono text-slate-300 border border-slate-800">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: service.accentColor }}
                    />
                    <span>Professional Grade</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Bottom Learn More Action */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
                      Learn More & View Finishes
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-amber-400 group-hover:text-slate-950 text-slate-300 flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Button link */}
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 hover:from-amber-300 hover:to-orange-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BEFORE & AFTER TRANSFORMATION (Major Visual Feature)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              Proven Results
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              SEE THE TRANSFORMATION.
            </h2>
            <p className="text-lg sm:text-xl font-heading text-amber-300 font-semibold italic">
              “From tired to timeless.”
            </p>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Inspect our real work. Drag the slider to witness how precision surface preparation and premium coatings revive aged walls into contemporary showpieces.
            </p>
          </div>

          {/* Interactive Draggable Slider */}
          <div className="max-w-5xl mx-auto">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=80"
              afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
              beforeLabel="BEFORE: Weather-worn & faded walls"
              afterLabel="AFTER: Zanda Weather-Shield finish"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          COLOR PALETTE INTERACTION (What Color Speaks To You?)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-900/60 relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ColorSwatchViewer
            onSelectColorForQuote={(color) => {
              onSelectColorForQuote(color);
              onNavigate('contact');
            }}
            onNavigate={onNavigate}
          />
        </div>
      </section>

      {/* =========================================================================
          FEATURED PROJECT (Kampala Residential Transformation)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Project Image */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[500px] overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-5 left-5 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-amber-400 font-bold uppercase">
                  Featured Case Study
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-5 p-8 lg:p-12 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{featuredProject.location}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
                    KAMPALA RESIDENTIAL TRANSFORMATION
                  </h3>
                  <p className="text-base text-amber-400 font-semibold font-heading">
                    “Complete interior and exterior painting project.”
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {featuredProject.description} We replaced years of harsh sun oxidation with high-reflectance weather-shield white, sunset orange feature alcoves, and satin-finished woodwork.
                </p>

                {/* Color swatches used in project */}
                <div className="pt-2">
                  <span className="text-[11px] uppercase font-mono font-bold tracking-wider text-slate-400 block mb-2">
                    Specified Colors
                  </span>
                  <div className="flex items-center gap-2">
                    {featuredProject.palette.map((pal, idx) => (
                      <div
                        key={idx}
                        className="w-7 h-7 rounded-md border border-white/20 shadow-md"
                        style={{ backgroundColor: pal.hex }}
                        title={pal.name}
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenProjectModal(featuredProject)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE ZANDA (4 Strong Visual Features)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-900/40 relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              Our Craftsmanship Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              WHY CHOOSE ZANDA
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Transforming your property should be exciting, effortless, and guaranteed to stand the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_ZANDA.map((item, idx) => {
              const icons = [
                <Paintbrush key="0" className="w-6 h-6 text-orange-400" />,
                <ShieldCheck key="1" className="w-6 h-6 text-sky-400" />,
                <Layers key="2" className="w-6 h-6 text-amber-400" />,
                <Clock key="3" className="w-6 h-6 text-emerald-400" />,
              ];

              return (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-8 rounded-2xl space-y-4 hover:-translate-y-1 transition-all duration-300 shadow-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center">
                    {icons[idx]}
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          STATISTICS (Large Numbers & Bold Craftsmanship)
          ========================================================================= */}
      <section className="py-16 relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATISTICS.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-sky-400">
                  {stat.value}
                </span>
                <p className="text-xs sm:text-sm uppercase font-mono font-semibold text-slate-300 tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TESTIMONIALS (3 Customer Testimonials with Small Client Photos)
          ========================================================================= */}
      <section className="py-20 lg:py-28 relative bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="text-sm text-slate-400">
              Trusted by homeowners, architects, and business leaders across Kampala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between space-y-6 shadow-xl relative"
              >
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-300 italic leading-relaxed">
                  “{testimonial.quote}”
                </p>

                {/* Author Card */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800/80">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-11 h-11 rounded-full object-cover border border-amber-400/40"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-sm font-bold font-heading text-white">
                      — {testimonial.author}
                    </h4>
                    <span className="text-xs text-slate-400 block">
                      {testimonial.location} · {testimonial.property}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA (Full-Width Colorful Section)
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-950">
        {/* Background Image of freshly painted colorful home */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Beautifully painted home"
            className="w-full h-full object-cover filter brightness-[0.4]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-950/80 via-slate-950/90 to-sky-950/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-slate-950/60 px-4 py-1.5 rounded-full border border-amber-400/30">
            Start Your Transformation Today
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight">
            READY FOR A FRESH NEW LOOK?
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto">
            “Let’s transform your space with color.”
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-sm font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 hover:from-amber-300 hover:via-orange-400 hover:to-amber-200 rounded-xl shadow-2xl shadow-orange-500/30 transform hover:-translate-y-0.5 transition-all"
            >
              <span>GET YOUR FREE QUOTE</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-xl backdrop-blur-md transition-all"
            >
              <span>CALL {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
