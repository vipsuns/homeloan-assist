import React from 'react';
import { 
  UserCheck, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Briefcase, 
  Award, 
  ShieldCheck, 
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { useLeadContext } from '../../context/LeadContext';

export const AdvisorSection = ({ onNavigate }) => {
  const { openLeadModal, settings } = useLeadContext();

  const cleanPhone = settings.phone.replace(/[^0-9+]/g, '');

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Background circles */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Advisor Profile Card (5 cols) */}
            <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 relative">
              <div className="flex items-start gap-4 mb-6">
                {/* Advisor Avatar / Photo */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-800 to-indigo-950 text-white flex items-center justify-center font-bold text-2xl shadow-lg border-2 border-amber-400 shrink-0 relative">
                  <span>VK</span>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white">
                    ✓
                  </span>
                </div>

                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 mb-1">
                    Lead Advisor
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 leading-snug">
                    {settings.advisorName}
                  </h3>
                  <p className="text-xs font-semibold text-blue-700">
                    {settings.advisorRole}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>{settings.experience} Advisory Experience</span>
                  </p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 mb-6 text-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-semibold">Primary Service Areas:</span>
                </div>
                <p className="text-slate-600 pl-6 font-medium">
                  {settings.serviceAreas}
                </p>
              </div>

              {/* Quick Connect Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-800 font-bold text-xs transition-colors border border-slate-300"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Call Vikram</span>
                </a>
                <a
                  href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    'Hello Vikram ji, I need home loan guidance.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Disclaimer inside card */}
              <p className="text-[10px] text-slate-400 leading-normal text-center border-t border-slate-100 pt-3">
                Independent assistance professional. Does not claim official SBI employment or authorization unless explicitly verified.
              </p>
            </div>

            {/* Right Information & Value proposition (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Personalized Consultation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight leading-tight">
                One-on-One Assistance for Your Largest Financial Milestone
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Applying for a home loan in Bihar often comes with regional hurdles — such as ancestral mutation records, municipal building map approvals, LPC (Land Possession Certificate) validation, and CA ITR abstracts. With Vikram Kumar's 8+ years of grassroots banking liaison experience, your application is audited before it reaches the banker's desk.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="text-2xl font-bold text-amber-400 font-heading block">₹125+ Cr</span>
                  <span className="text-xs text-slate-300 mt-1 block">Cumulative Loans Facilitated</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="text-2xl font-bold text-emerald-400 font-heading block">98.4%</span>
                  <span className="text-xs text-slate-300 mt-1 block">First-Time Document Accuracy</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="text-2xl font-bold text-blue-400 font-heading block">4,200+</span>
                  <span className="text-xs text-slate-300 mt-1 block">Happy Families Guided</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openLeadModal({ source: 'Advisor Spotlight' })}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all cursor-pointer"
                >
                  Schedule Free 15-Min Advisory Call
                </button>
                <button
                  onClick={() => onNavigate('/about')}
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors"
                >
                  Read More About Us →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
