import React from 'react';
import { Phone, MessageCircle, Home } from 'lucide-react';
import { useLeadContext } from '../../context/LeadContext';

export const MobileBottomBar = () => {
  const { openLeadModal, settings } = useLeadContext();

  const cleanPhone = settings.phone.replace(/[^0-9+]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(
    'Hello HomeLoan Assist, I want expert assistance with my home loan eligibility and application.'
  )}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Expert */}
        <a
          href={`tel:${cleanPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-800 transition-all border border-slate-200"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center mb-0.5 text-emerald-700">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight">Call Expert</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 active:scale-95 text-emerald-900 transition-all border border-emerald-200"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center mb-0.5 text-white">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight text-emerald-800">WhatsApp</span>
        </a>

        {/* Apply Now */}
        <button
          onClick={() => openLeadModal({ source: 'Sticky Mobile Bottom Bar' })}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white transition-all shadow-md shadow-blue-600/30"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center mb-0.5 text-white">
            <Home className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight">Apply Now</span>
        </button>
      </div>
    </div>
  );
};
