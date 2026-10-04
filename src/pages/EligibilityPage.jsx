import React from 'react';
import { EligibilityCalculator } from '../components/calculators/EligibilityCalculator';
import { useLeadContext } from '../context/LeadContext';
import { 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  CreditCard, 
  HelpCircle,
  ArrowRight,
  Phone
} from 'lucide-react';

export const EligibilityPage = ({ onNavigate }) => {
  const { openLeadModal, settings } = useLeadContext();

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smart Financial Eligibility Assessment</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            How Much Home Loan Can You Get?
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Check your exact borrowing limits using the standard banking FOIR (Fixed Obligation to Income Ratio) calculation.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 space-y-12">
        {/* The Eligibility Calculator Widget */}
        <EligibilityCalculator />

        {/* Factors Affecting Eligibility Guide */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mb-6">
            Key Factors That Determine Your Loan Sanction
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <CreditCard className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1">CIBIL Credit Score</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A score of 750+ qualifies you for the lowest SBI EBLR rates and faster processing without additional security.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1">FOIR (Debt-to-Income)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Banks restrict total monthly obligations (existing + new EMI) between 50% to 65% of your net in-hand income.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1">Co-Applicants</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adding your earning spouse or parent substantially boosts eligibility and allows tax deductions under Sec 80C &amp; 24(b).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900 mb-1">Property Valuation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Loan sanction cannot exceed 80%–90% of the independent technical valuation report conducted by the bank's engineer.
              </p>
            </div>
          </div>
        </div>

        {/* Conversion Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-heading">
              Want to Maximize Your Eligible Loan Amount?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 max-w-xl">
              Our advisor can help you consolidate minor personal loans or structure co-borrower incomes to unlock up to 35% higher eligibility.
            </p>
          </div>
          <button
            onClick={() => openLeadModal({ source: 'Eligibility Page Banner' })}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </div>
  );
};
