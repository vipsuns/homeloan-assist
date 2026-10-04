import React from 'react';
import { 
  Home, 
  Hammer, 
  Maximize2, 
  Paintbrush, 
  ArrowLeftRight, 
  Globe2, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PRODUCTS } from '../../data/mockData';
import { useLeadContext } from '../../context/LeadContext';

export const ProductsSection = ({ onNavigate }) => {
  const { openLeadModal } = useLeadContext();

  const iconMap = {
    'home-purchase': Home,
    'home-construction': Hammer,
    'home-extension': Maximize2,
    'home-renovation': Paintbrush,
    'balance-transfer': ArrowLeftRight,
    'nri-home-loan': Globe2
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Tailored Home Financing Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Home Loan Solutions for Every Requirement
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Whether buying an apartment in Patna, building on a plot in Siwan, or transferring an existing loan for lower EMIs, we provide independent advisory at every step.
          </p>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => {
            const Icon = iconMap[prod.id] || Home;
            return (
              <div 
                key={prod.id}
                className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {prod.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                    {prod.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {prod.shortDesc}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2 mb-6">
                    {prod.keyFeatures.map((feat, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      onNavigate('/home-loans');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    Learn More →
                  </button>

                  <button
                    onClick={() => openLeadModal({ loanType: prod.title, source: `Product Card: ${prod.title}` })}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    <span>Check Eligibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg font-bold font-heading">
              Confused between Home Loan schemes or interest rate options?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Speak directly with an independent specialist to understand MCLR/EBLR floating vs fixed terms.
            </p>
          </div>
          <button
            onClick={() => openLeadModal({ source: 'Products Banner' })}
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
          >
            Get Free Loan Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
