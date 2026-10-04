import React from 'react';
import { 
  ShieldCheck, 
  Compass, 
  FileCheck, 
  UserCheck, 
  Eye, 
  HeartHandshake,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { TRUST_FEATURES } from '../../data/mockData';
import { useLeadContext } from '../../context/LeadContext';

export const WhyChooseUs = () => {
  const { openLeadModal } = useLeadContext();

  const iconList = [
    Compass,          // Expert Guidance
    UserCheck,        // Eligibility Assistance
    FileCheck,        // Simple Documentation
    ShieldCheck,      // Application Support
    Eye,              // Transparent Process
    HeartHandshake    // Personalized Assistance
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold mb-3 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Why Borrowers Trust HomeLoan Assist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Guidance That Makes Home Loans Easier
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Bank branches handle thousands of files; we focus on <strong>your</strong> home loan. From document validation to sanction acceleration, experience frictionless borrowing.
          </p>
        </div>

        {/* 6 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRUST_FEATURES.map((item, idx) => {
            const Icon = iconList[idx] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Advisory Trust Callout */}
        <div className="mt-14 text-center">
          <button
            onClick={() => openLeadModal({ source: 'Why Choose Us Section' })}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
          >
            <span>Talk to an Expert Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
