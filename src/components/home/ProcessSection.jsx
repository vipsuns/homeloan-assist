import React from 'react';
import { 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Send,
  Calculator,
  FolderOpen,
  SendHorizontal,
  BadgeCheck
} from 'lucide-react';
import { PROCESS_STEPS } from '../../data/mockData';
import { useLeadContext } from '../../context/LeadContext';

export const ProcessSection = ({ onNavigate }) => {
  const { openLeadModal } = useLeadContext();

  const stepIcons = [
    Send,
    Calculator,
    FolderOpen,
    SendHorizontal,
    BadgeCheck
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frictionless 5-Step Journey</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight">
            How Your Loan Gets Approved
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            From your first enquiry to loan disbursement in your account, here is how our structured process protects your time and finances.
          </p>
        </div>

        {/* 5-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || CheckCircle2;
            return (
              <div 
                key={step.step}
                className="relative bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-blue-400 flex flex-col justify-between transition-all duration-300 group shadow-lg"
              >
                {/* Step Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-heading text-blue-400">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-900/60 text-blue-300 border border-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold font-heading text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 text-[10px] text-slate-400 font-medium">
                  {idx === 0 && "Time: 5 Minutes"}
                  {idx === 1 && "Time: 2–4 Hours"}
                  {idx === 2 && "Time: 24–48 Hours"}
                  {idx === 3 && "Time: 2–3 Days"}
                  {idx === 4 && "Time: 3–7 Days"}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-xl font-bold font-heading">
              Ready to start Step 01?
            </h4>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              Submit your basic requirements online. Zero paperwork needed for initial eligibility assessment.
            </p>
          </div>
          <button
            onClick={() => openLeadModal({ source: 'Process Section Step 01' })}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 active:scale-95 text-slate-900 font-bold text-sm shadow-lg transition-all cursor-pointer"
          >
            Start My Application
          </button>
        </div>
      </div>
    </section>
  );
};
