import React from 'react';
import { useLeadContext } from '../context/LeadContext';
import { 
  Building2, 
  UserCheck, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  HeartHandshake, 
  Compass, 
  Eye,
  ArrowRight
} from 'lucide-react';

export const AboutPage = ({ onNavigate }) => {
  const { openLeadModal, settings } = useLeadContext();

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Independent Financial Advisory</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            About HomeLoan Assist
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            We help customers understand their home-loan options, prepare for the application process and connect with the right assistance.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 space-y-12">
        {/* Core Mission & Value Props */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
              Our Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              Demystifying the Home Loan Experience
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Securing a home loan in India shouldn't be an ordeal of confusing banking jargon, endless branch visits, or unexpected document rejections. HomeLoan Assist was established to provide transparent, customer-first guidance to families, salaried professionals, and local entrepreneurs embarking on their home ownership journey.
            </p>
          </div>

          {/* 4 Pillars Required by Prompt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <Compass className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="font-bold text-base text-slate-900 mb-1">Professional Guidance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Objective advice on interest benchmarks (EBLR vs MCLR), repayment tenure optimization, and structuring loans to maximize income tax exemptions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <HeartHandshake className="w-6 h-6 text-emerald-600 mb-3" />
              <h3 className="font-bold text-base text-slate-900 mb-1">Customer-First Approach</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We represent your interests, ensuring you don't over-borrow or select restrictive conditions. Your financial peace of mind is our priority.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <Eye className="w-6 h-6 text-amber-600 mb-3" />
              <h3 className="font-bold text-base text-slate-900 mb-1">Transparent Communication</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero hidden charges, upfront disclosure of bank processing fees and stamp duty costs, and real-time updates throughout the sanction cycle.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <MapPin className="w-6 h-6 text-purple-600 mb-3" />
              <h3 className="font-bold text-base text-slate-900 mb-1">Local Assistance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                In-depth expertise in Bihar property laws, municipal registry verification, LPC documentation, and strong ties with local branch managers.
              </p>
            </div>
          </div>
        </div>

        {/* Advisor Profile Mock Card */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-28 h-28 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-900 border-2 border-amber-400 text-white font-extrabold text-4xl flex items-center justify-center shrink-0 shadow-lg">
              VK
            </div>

            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Independent Specialist
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {settings.advisorName}
              </h3>
              <p className="text-sm font-semibold text-blue-300">
                {settings.advisorRole} • {settings.experience} Experience
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Specializing in SBI Home Loan documentation, eligibility enhancement, and property legal clearance for borrowers across Bihar.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-amber-300">
                  <MapPin className="w-4 h-4" />
                  Service Areas: {settings.serviceAreas}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => openLeadModal({ source: 'About Page Advisor Card' })}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Consult with Vikram</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call {settings.phone}</span>
              </a>
            </div>
          </div>

          {/* Mandatory Disclaimers */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
            <p>
              * <strong>Regulatory Note:</strong> Vikram Kumar and HomeLoan Assist operate as independent home-loan assistance and financial facilitation professionals. We do not claim official employment with State Bank of India (SBI) or any specific lending institution unless explicitly contracted. All loan approvals, interest rates, and loan disbursements remain the exclusive discretion of the lending bank.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
