import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const prefilledMessage = encodeURIComponent(
    'Hello Zanda Painting, I would like to request a free painting quote.'
  );
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${prefilledMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 select-none group">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900/95 text-slate-100 text-xs px-3.5 py-2 rounded-xl shadow-2xl border border-emerald-500/30 backdrop-blur-md animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Chat with us on WhatsApp for a fast quote!</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transform hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
        aria-label="Chat with Zanda Painting on WhatsApp"
      >
        {/* Glow pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 text-white fill-white" />

        {/* Small Uganda / Kampala marker pill */}
        <span className="absolute -top-1 -left-1 px-1.5 py-0.5 bg-slate-950 border border-emerald-500/50 rounded-full text-[9px] font-mono font-bold text-emerald-400 shadow-md">
          UG
        </span>
      </a>
    </div>
  );
};
