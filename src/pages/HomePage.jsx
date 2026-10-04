import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ProductsSection } from '../components/home/ProductsSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProcessSection } from '../components/home/ProcessSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { AdvisorSection } from '../components/home/AdvisorSection';
import { FaqSection } from '../components/home/FaqSection';
import { EmiCalculator } from '../components/calculators/EmiCalculator';
import { useLeadContext } from '../context/LeadContext';
import { 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Calculator, 
  Phone,
  CheckCircle2,
  TrendingDown
} from 'lucide-react';

export const HomePage = ({ onNavigate }) => {
  const { openLeadModal, settings } = useLeadContext();

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Key Stats Ribbon */}
      <section className="bg-slate-900 border-y border-slate-800 py-6 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-heading block">₹125+ Cr</span>
              <span className="text-xs text-slate-300 font-medium mt-0.5 block">Loans Facilitated</span>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-heading block">8+ Years</span>
              <span className="text-xs text-slate-300 font-medium mt-0.5 block">Advisory Experience</span>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading block">98.4%</span>
              <span className="text-xs text-slate-300 font-medium mt-0.5 block">Documentation Accuracy</span>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading block">4,200+</span>
              <span className="text-xs text-slate-300 font-medium mt-0.5 block">Happy Borrowers Guided</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products Section */}
      <ProductsSection onNavigate={onNavigate} />

      {/* 4. Trust Section: "Guidance That Makes Home Loans Easier" */}
      <WhyChooseUs />

      {/* 5. Interactive EMI Calculator Showcase */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3 border border-blue-200">
              <Calculator className="w-3.5 h-3.5 text-blue-600" />
              <span>Interactive Financial Planning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Calculate Your Monthly EMI Instantly
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Experiment with loan amounts, tenure, and competitive interest rates to design a comfortable monthly budget.
            </p>
          </div>

          <EmiCalculator isCardMode={false} />
        </div>
      </section>

      {/* 6. Visual 5-Step Process */}
      <ProcessSection onNavigate={onNavigate} />

      {/* 7. Advisor Spotlight (Vikram Kumar) */}
      <AdvisorSection onNavigate={onNavigate} />

      {/* 8. Testimonials Section */}
      <TestimonialsSection />

      {/* 9. Accordion FAQ Section */}
      <FaqSection onNavigate={onNavigate} />

      {/* 10. High-converting Final CTA Banner */}
      <section className="py-16 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zero Upfront Consultation Fees</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            Take the First Step Toward Your Dream Home Today
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get personalized assistance, transparent bank comparisons, and doorstep document collection across Patna, Siwan, and Bihar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openLeadModal({ source: 'Final CTA Banner' })}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-base shadow-xl shadow-blue-600/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Check Eligibility &amp; Get Callback</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base border border-slate-700 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Advisor Now</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Confidential
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              No Hard CIBIL Inquiry
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Direct Lender Sanction
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
