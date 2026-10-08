import React, { useState } from 'react';
import { QuoteFormData } from '../types';
import { COMPANY_INFO } from '../data/content';
import zandaQuoteHero from '../assets/images/zanda_quote_hero_1791410306693.jpg';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Calculator,
  ShieldCheck,
} from 'lucide-react';

interface ContactPageProps {
  initialColorInterest?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialColorInterest }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyType: 'House',
    serviceRequired: 'Interior Painting',
    location: 'Kololo, Kampala',
    preferredStartDate: '',
    propertySize: '3-4 Bedrooms (~250 sqm)',
    message: initialColorInterest
      ? `Interested in color tone: ${initialColorInterest}. Please advise on wall preparation and timeline.`
      : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Property types
  const propertyTypes = [
    'House',
    'Apartment',
    'Office',
    'Shop',
    'Restaurant',
    'Hotel',
    'Church',
    'Other',
  ];

  // Service options
  const serviceOptions = [
    'Interior Painting',
    'Exterior Painting',
    'Commercial Painting',
    'Residential Painting',
    'Decorative Finishes',
    'Repainting',
    'Color Consultation',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate fast reliable network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleWhatsAppRelay = () => {
    const summaryText = `*NEW QUOTE REQUEST - ZANDA PAINTING*
Name: ${formData.fullName || 'Customer'}
Phone: ${formData.phone}
Property: ${formData.propertyType}
Service: ${formData.serviceRequired}
Location: ${formData.location}
Size: ${formData.propertySize}
Start: ${formData.preferredStartDate || 'Flexible'}
Message: ${formData.message}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(summaryText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative text-slate-900 overflow-hidden pt-20 bg-white">
      {/* =========================================================================
          CONTACT HERO
          ========================================================================= */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={zandaQuoteHero}
            alt="Painter applying final coat to wall"
            className="w-full h-full object-cover object-center filter brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/35 to-white/15" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-red-100 backdrop-blur-md text-xs font-mono font-bold text-red-500 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KAMPALA ESTIMATES & ON-SITE INSPECTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-slate-900 tracking-tight">
            LET’S TRANSFORM YOUR SPACE.
          </h1>

          <p className="text-base sm:text-2xl text-red-500 font-semibold font-heading max-w-2xl mx-auto">
            “Tell us what you are planning and we’ll help you get started.”
          </p>
        </div>
      </section>

      {/* =========================================================================
          QUOTE FORM & CONTACT DETAILS SPLIT
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Free Quote Form (7 Columns) */}
            <div className="lg:col-span-7 bg-white border border-red-100 rounded-3xl p-6 sm:p-10 shadow-lg relative">
              <div className="space-y-2 mb-8">
                <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                  Fast & Transparent Estimates
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
                  REQUEST A FREE QUOTE
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Fill in your property specifications below. We provide accurate itemized quotations with zero hidden charges.
                </p>
              </div>

              {isSubmitted ? (
                /* Success Message State */
                <div className="p-8 rounded-2xl bg-white border border-emerald-500/30 text-center space-y-6 animate-in fade-in duration-300 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                      Thank you, {formData.fullName || 'valued client'}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      “Thank you! Your request has been received. The Zanda Painting team will contact you shortly.”
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-xs text-slate-700 text-left space-y-1.5 max-w-md mx-auto font-mono">
                    <div><strong>Service:</strong> {formData.serviceRequired}</div>
                    <div><strong>Property:</strong> {formData.propertyType}</div>
                    <div><strong>Location:</strong> {formData.location}</div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={handleWhatsAppRelay}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up: Send to WhatsApp Now</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3.5 text-xs text-slate-600 hover:text-red-500 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Kato Mugisha"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number (Uganda) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+256 700 000 000"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-red-100 focus:border-red-300 focus:outline-none text-slate-900 text-sm transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="hello@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Property Location (Kampala / Area) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Kololo, Ntinda, Muyenga"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Property Type Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Property Type *
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                      >
                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Service Required Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Service Required *
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                      >
                        {serviceOptions.map((serv) => (
                          <option key={serv} value={serv}>
                            {serv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Preferred Start Date */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Preferred Start Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredStartDate}
                        onChange={(e) => setFormData({ ...formData, preferredStartDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>

                    {/* Approximate Property Size */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Approximate Property Size
                      </label>
                      <input
                        type="text"
                        value={formData.propertySize}
                        onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                        placeholder="e.g. 3 Bedrooms / 250 sqm"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message & Specific Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the current wall conditions, colors you have in mind, or special timing constraints..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 via-red-500 to-rose-500 hover:from-red-500 hover:via-red-400 hover:to-rose-400 text-white font-extrabold uppercase tracking-wider text-sm rounded-xl shadow-xl shadow-red-500/20 transition-all duration-200 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING REQUEST...</span>
                      ) : (
                        <>
                          <span>REQUEST FREE QUOTE</span>
                          <Send className="w-4 h-4 text-slate-950" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Contact Information & Direct Hotline (5 Columns) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Official Contact Info Card */}
              <div className="p-8 rounded-3xl bg-white border border-red-100 space-y-6 shadow-lg">
                <div className="space-y-1">
                  <h3 className="text-xl font-black font-heading text-slate-900">
                    ZANDA PAINTING
                  </h3>
                  <p className="text-xs font-mono uppercase text-red-500 font-bold">
                    Kampala, Uganda
                  </p>
                </div>

                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Headquarters:</strong>
                      <span>{COMPANY_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Phone:</strong>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-amber-300 font-mono">
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">WhatsApp:</strong>
                      <a
                        href={COMPANY_INFO.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-300 font-mono"
                      >
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Email:</strong>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-sky-300">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                    <Clock className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Opening Hours:</strong>
                      <p className="text-xs text-slate-600">{COMPANY_INFO.workingHours.weekdays}</p>
                      <p className="text-xs text-slate-500">{COMPANY_INFO.workingHours.sunday}</p>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Callout Button */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    'Hello Zanda Painting, I would like to request a free painting quote.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>

              {/* Service Areas Badge List */}
              <div className="p-6 rounded-2xl bg-white border border-red-100 space-y-3 shadow-sm">
                <span className="text-xs uppercase font-mono font-bold tracking-wider text-red-500 block">
                  Active Painting Service Zones:
                </span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                  {COMPANY_INFO.serviceAreas.map((area, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-2.5 py-1 rounded bg-white border border-red-100 text-[11px]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LARGE MAP AREA (Kampala, Uganda)
          ========================================================================= */}
      <section className="relative py-12 bg-white border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-red-500 uppercase">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Zanda Painting Kampala Operational Map</span>
            </div>
            <span className="text-xs text-slate-500">Plot 14, Upper Kololo Terrace, Kampala</span>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-red-100 shadow-lg bg-white">
            <iframe
              title="Zanda Painting Kampala Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.754807662589!2d32.58550131475394!3d0.3298689997576596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb7f43306be1%3A0x6b801456209b1f2e!2sKololo%2C%20Kampala!5e0!3m2!1sen!2sug!4v1650000000000!5m2!1sen!2sug"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlay Banner */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-red-100 shadow-lg flex items-center gap-3 pointer-events-none">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <p className="text-xs font-bold text-white font-heading">Kampala City & Environs</p>
                <p className="text-[10px] text-slate-400">Rapid dispatch crew ready across Uganda</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
