import React from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES_LIST } from '../data/content';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white text-slate-600 border-t border-red-100 overflow-hidden">
      {/* Decorative colorful paint wave accent border at top */}
      <div className="h-1.5 w-full bg-gradient-to-r from-red-700 via-red-500 via-rose-400 to-red-400" />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/60">
          {/* Col 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md"
            >
              <Logo size="lg" variant="light" />
            </button>

            <p className="text-xl font-bold font-heading text-white italic tracking-wide">
              “{COMPANY_INFO.slogan}”
            </p>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Kampala’s premier professional painting and architectural finishing contractor. Specializing in residential, commercial, interior and exterior transformations crafted with passion, precision, and enduring color.
            </p>

            {/* Kampala quick highlight */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="text-amber-400 font-semibold">Service Coverage:</span>
              <span>Kololo · Nakasero · Ntinda · Bugolobi · Muyenga · Naguru · Greater Kampala</span>
            </div>

            {/* Social Links */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={COMPANY_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 flex items-center justify-center transition-colors"
                title="WhatsApp Zanda Painting"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-pink-500/50 transition-colors"
              >
                Instagram
              </a>
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-sky-500/50 transition-colors"
              >
                Facebook
              </a>
              <a
                href={COMPANY_INFO.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-amber-500/50 transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-amber-400 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-300 transition-colors focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-amber-300 transition-colors focus:outline-none"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-300 transition-colors focus:outline-none"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-amber-300 transition-colors focus:outline-none"
                >
                  Projects & Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-amber-300 transition-colors focus:outline-none"
                >
                  Visual Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-amber-300 transition-colors focus:outline-none"
                >
                  Contact & Free Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-sky-400 font-mono">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-sky-300 transition-colors text-left focus:outline-none"
                  >
                    {srv.title.replace('& FINISHES', '').trim()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-emerald-400 font-mono">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-white font-mono text-slate-300"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white text-slate-300"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-slate-300">{COMPANY_INFO.workingHours.weekdays}</p>
                  <p className="text-slate-400">{COMPANY_INFO.workingHours.sunday}</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-500 rounded-md hover:from-red-500 hover:to-red-400 transition-colors"
                >
                  <span>Request Inspection</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Zanda Painting. All Rights Reserved. Kampala, Uganda.
          </div>
          <div className="flex items-center gap-6">
            <span>Residential & Commercial Painting</span>
            <span>·</span>
            <span>Kampala Craftsmanship</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
