import React, { useState } from 'react';
import { PRODUCTS } from '../data/mockData';
import { useLeadContext } from '../context/LeadContext';
import { 
  Home, 
  Hammer, 
  Maximize2, 
  Paintbrush, 
  ArrowLeftRight, 
  Globe2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  Percent,
  Calendar,
  Layers
} from 'lucide-react';

export const HomeLoansPage = ({ onNavigate }) => {
  const { openLeadModal } = useLeadContext();
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);

  const iconMap = {
    'home-purchase': Home,
    'home-construction': Hammer,
    'home-extension': Maximize2,
    'home-renovation': Paintbrush,
    'balance-transfer': ArrowLeftRight,
    'nri-home-loan': Globe2
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Product Catalogue</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Explore Home Loan Options
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Find the right loan structure tailored to your property type, repayment capacity, and tax-saving objectives.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Loan Type Selector Tabs */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-2 flex flex-wrap gap-2 mb-8">
          {PRODUCTS.map((prod) => {
            const Icon = iconMap[prod.id] || Home;
            const isSelected = selectedProduct.id === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`flex-1 min-w-[150px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{prod.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Product Deep Dive */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                  {selectedProduct.badge}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Reference: SBI &amp; Major Indian Banks
                </span>
              </div>

              <h2 className="text-3xl font-extrabold font-heading text-slate-900">
                {selectedProduct.title}
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                {selectedProduct.shortDesc}
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Key Benefits &amp; Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProduct.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Candidate */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-blue-950">
                <span className="font-bold block mb-1">Ideal For:</span>
                <p>{selectedProduct.idealFor}</p>
              </div>

              {/* Benchmark Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                <table className="w-full text-left divide-y divide-slate-200">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase">
                    <tr>
                      <th className="py-2.5 px-4">Parameter</th>
                      <th className="py-2.5 px-4">Typical Terms</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-900">Indicative Interest Rate</td>
                      <td className="py-2.5 px-4 text-blue-700 font-bold">8.50% – 9.15% p.a. (linked to CIBIL &amp; EBLR)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-900">Maximum Tenure</td>
                      <td className="py-2.5 px-4">Up to 30 Years (or borrower age 70)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-900">Loan To Value (LTV)</td>
                      <td className="py-2.5 px-4">Up to 90% for loans &le; ₹30L; up to 80% for &gt; ₹30L</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-slate-900">Prepayment Penalty</td>
                      <td className="py-2.5 px-4 text-emerald-700 font-bold">NIL (for individual floating rate loans)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Card CTA (4 cols) */}
            <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 space-y-6 shadow-xl">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Fast Application Support
                </span>
                <h3 className="text-xl font-bold font-heading">
                  Apply for {selectedProduct.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Connect with advisor Vikram Kumar for door-step document pickup and bank branch liaison.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => openLeadModal({ loanType: selectedProduct.title, source: `Loans Page: ${selectedProduct.title}` })}
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Check My Eligibility</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('/emi-calculator');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                >
                  Calculate EMI for this Loan
                </button>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Free Initial Financial Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No Bank Branch Queue Waiting</span>
                </div>
              </div>

              <p className="text-[10px] text-slate-500 leading-tight">
                * Note: Exact interest rates, processing fees, and margin money are determined by the lender following credit evaluation.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Overview */}
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">
            Need Help Choosing the Best Loan Type?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6">
            Our experts review your property papers and income profile to recommend whether a regular purchase loan, composite construction loan, or balance transfer suits you best.
          </p>
          <button
            onClick={() => openLeadModal({ source: 'Home Loans Compare CTA' })}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md"
          >
            Get a Free Recommendation Callback
          </button>
        </div>
      </div>
    </div>
  );
};
