import React from 'react';
import { PageId } from '../types';
import { BRAND_VALUES, OUR_PROCESS_STEPS, COMPANY_INFO } from '../data/content';
import zandaTeamAbout from '../assets/images/zanda_team_about_1791410293608.jpg';
import {
  Sparkles,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Shield,
  Heart,
  Lightbulb,
  Award,
  Users,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative text-slate-900 overflow-hidden pt-20 bg-white">
      {/* =========================================================================
          ABOUT HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center py-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={zandaTeamAbout}
            alt="Professional Zanda Painting team working on a property in Kampala"
            className="w-full h-full object-cover object-center filter brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/35 to-white/15" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-red-100 backdrop-blur-md text-xs font-mono font-bold text-red-500 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KAMPALA MASTER PAINTERS & FINISHERS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-slate-900 tracking-tight">
            “COLOR IS OUR CRAFT.”
          </h1>

          <p className="text-lg sm:text-2xl text-red-500 font-semibold font-heading max-w-2xl mx-auto">
            “Professional painting with a passion for beautiful spaces.”
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-700 pt-2 font-mono">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>Serving all neighborhoods of Kampala, Entebbe, and Wakiso</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR STORY SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Origins & Ethos
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight">
                OUR STORY
              </h2>

              <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                <p>
                  <strong>Zanda Painting</strong> is a Kampala-based professional painting company focused on helping homeowners and businesses transform their spaces through high-quality painting, precision surface preparation, and enduring finishing.
                </p>
                <p>
                  Founded right here in Uganda, we recognized a major void in the local contracting landscape: too many property owners were frustrated by unreliable timelines, peeling paint after the first rainy season, messy job sites, and dull, unimaginative color choices.
                </p>
                <p>
                  We built Zanda Painting on the uncompromising standard that painting is not just labor—it is architectural craft. By combining advanced moisture-barrier primers, climate-tested weather-shield pigments formulated for East Africa’s climate, and an obsessively trained crew, we ensure that every room we touch inspires joy for years to come.
                </p>
              </div>

              {/* Kampala Community & Trust Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
                <div className="p-4 rounded-xl bg-white border border-red-100 shadow-sm">
                  <span className="text-2xl font-black font-heading text-red-500">100%</span>
                  <span className="text-xs text-slate-500 block mt-1">Ugandan Owned & Operated</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-red-100 shadow-sm">
                  <span className="text-2xl font-black font-heading text-red-500">500+</span>
                  <span className="text-xs text-slate-500 block mt-1">Finished Projects</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-red-100 shadow-sm col-span-2 sm:col-span-1">
                  <span className="text-2xl font-black font-heading text-red-500">Zero</span>
                  <span className="text-xs text-slate-500 block mt-1">Mess Guarantee</span>
                </div>
              </div>
            </div>

            {/* Visual Mosaic Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Zanda Painting craftsmanship"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/80 backdrop-blur-md border border-red-100">
                  <p className="text-sm font-bold text-slate-900 font-heading">
                    Kampala Architectural Pride
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Transforming residences and corporate landmarks from Kololo to Muyenga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR MISSION SECTION
          ========================================================================= */}
      <section className="py-20 bg-white relative border-t border-b border-red-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
            Our North Star
          </span>

          <h2 className="text-xs sm:text-sm uppercase tracking-widest font-mono text-slate-500">
            OUR MISSION
          </h2>

          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            “To transform spaces through quality workmanship, creative color and dependable service.”
          </blockquote>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2">
            Every bucket of paint we open, every line we cut, and every handshake with a client is guided by our pledge to elevate how people live and work in Kampala.
          </p>
        </div>
      </section>

      {/* =========================================================================
          OUR VALUES (5 Visual Cards)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight">
              OUR VALUES
            </h2>
            <p className="text-sm text-slate-600">
              The values that dictate how our team handles every wall, floor, and project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {BRAND_VALUES.map((val, idx) => {
              const valIcons = [
                <Award key="0" className="w-6 h-6 text-orange-400" />,
                <Shield key="1" className="w-6 h-6 text-sky-400" />,
                <Lightbulb key="2" className="w-6 h-6 text-amber-400" />,
                <Users key="3" className="w-6 h-6 text-purple-400" />,
                <CheckCircle2 key="4" className="w-6 h-6 text-emerald-400" />,
              ];

              return (
                <div
                  key={idx}
                  className="bg-white border border-red-100 hover:border-red-200 p-6 rounded-2xl space-y-4 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${val.color}15` }}
                    >
                      {valIcons[idx]}
                    </div>

                    <h3 className="text-lg font-bold font-heading text-slate-900 tracking-wide">
                      {val.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div
                    className="h-1 w-full rounded-full"
                    style={{ backgroundColor: val.color }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR PROCESS (4-Step Visual Process with Photos)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-red-50/40 relative border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              Proven Workflow
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight">
              OUR PROCESS
            </h2>
            <p className="text-sm text-slate-600">
              Four structured steps guaranteeing a stress-free experience and an immaculate, long-lasting finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {OUR_PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-red-100 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Step Photo */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/10 to-transparent" />
                  
                  {/* Step Number Tag */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black font-mono text-sm flex items-center justify-center shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Step Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-slate-900">
                      {step.step} — {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 p-8 rounded-2xl bg-white border border-red-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Ready to begin Step 01 with a free consultation?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                We will visit your property anywhere in Kampala and deliver a transparent proposal.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all flex-shrink-0"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
