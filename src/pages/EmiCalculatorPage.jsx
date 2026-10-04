import React from 'react';
import { EmiCalculator } from '../components/calculators/EmiCalculator';
import { useLeadContext } from '../context/LeadContext';
import { 
  Calculator, 
  Sparkles, 
  HelpCircle, 
  TrendingDown, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const EmiCalculatorPage = ({ onNavigate }) => {
  const { openLeadModal } = useLeadContext();

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Precise Mathematical Planning</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Home Loan EMI Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Estimate your monthly repayment schedule, visualize principal vs interest ratios, and optimize your loan tenure.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 space-y-12">
        {/* EMI Calculator */}
        <EmiCalculator isCardMode={false} />

        {/* Educational Content & Tips to Reduce EMI */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mb-2">
              How Is Your Home Loan EMI Calculated?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Banks in India utilize the standard <strong>Equated Monthly Installment (EMI) reducing balance formula</strong>:
            </p>
            <div className="mt-4 p-4 rounded-xl bg-slate-900 text-amber-300 font-mono text-center text-sm overflow-x-auto">
              EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center">
              Where P = Principal Amount, R = Monthly Interest Rate (Annual Rate / 12 / 100), N = Number of Monthly Installments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200">
              <TrendingDown className="w-6 h-6 text-blue-700 mb-3" />
              <h4 className="font-bold text-sm text-slate-900 mb-1">Make 1 Extra EMI / Year</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Paying just one additional EMI each year toward principal can cut down a 25-year home loan tenure by up to 4.5 years!
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
              <ShieldCheck className="w-6 h-6 text-emerald-700 mb-3" />
              <h4 className="font-bold text-sm text-slate-900 mb-1">Zero Prepayment Penalty</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                RBI rules mandate NIL prepayment or foreclosure charges on all individual floating-rate home loans.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
              <Sparkles className="w-6 h-6 text-amber-700 mb-3" />
              <h4 className="font-bold text-sm text-slate-900 mb-1">Opt for Balance Transfer</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your existing lender charges &gt;9.5%, switching to an 8.50% rate can save ₹5,000–₹12,000 every single month.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold font-heading">
              Ready to lock in the lowest interest rate?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Let our advisor compare current lender rates and handle file login for you.
            </p>
          </div>
          <button
            onClick={() => openLeadModal({ source: 'EMI Calculator Page Banner' })}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            Get Assistance With This Loan
          </button>
        </div>
      </div>
    </div>
  );
};
