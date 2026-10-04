import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  IndianRupee, 
  User, 
  MapPin, 
  Briefcase,
  MessageCircle,
  Clock,
  Award,
  Layers
} from 'lucide-react';
import { useLeadContext } from '../../context/LeadContext';

export const HeroSection = ({ onNavigate }) => {
  const { addLead, openLeadModal, settings } = useLeadContext();

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: 'Patna',
    employment: 'Salaried',
    income: '75000',
    loanAmount: '3500000',
    loanType: 'Home Purchase Loan'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    const cleanMobile = formData.mobile.replace(/[^0-9]/g, '');
    if (!cleanMobile || cleanMobile.length < 10) errs.mobile = 'Enter 10-digit mobile number';
    if (!formData.income || Number(formData.income) <= 0) errs.income = 'Enter income';
    if (!formData.loanAmount || Number(formData.loanAmount) <= 0) errs.loanAmount = 'Enter loan amount';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const created = addLead({
        ...formData,
        income: Number(formData.income),
        loanAmount: Number(formData.loanAmount),
        source: 'Hero Floating Card'
      });
      setIsSubmitting(false);
      setSubmittedData(created);
    }, 500);
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hello ${settings.advisorName}, I submitted a Home Loan enquiry for ₹${Number(formData.loanAmount).toLocaleString('en-IN')} in ${formData.city}. Looking forward to your call.`
    );
    window.open(`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white pt-10 pb-20 lg:py-20">
      {/* Background Glows & Patterns */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>HomeLoan Assist • Independent Financial Guidance</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-tight">
              Make Your Dream Home a <span className="bg-gradient-to-r from-blue-300 via-blue-100 to-amber-300 bg-clip-text text-transparent">Reality</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Get expert assistance for your home loan journey with simple guidance, eligibility support and application assistance.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openLeadModal({ source: 'Hero Primary CTA' })}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/30 transition-all cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Check My Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 active:scale-95 text-slate-200 font-semibold text-sm sm:text-base border border-slate-700 backdrop-blur-sm transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Talk to an Expert</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Quick Enquiry</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Expert Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Secure Information</span>
                </div>
              </div>

              {/* Small Disclaimer */}
              <p className="text-[11px] text-slate-400 mt-4 leading-normal">
                * Independent assistance service. Final loan approval, rates and terms are subject to the lender's policies and assessment.
              </p>
            </div>

            {/* Regional Badge */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 max-w-xl text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Active on-ground assistance across <strong>Patna</strong>, <strong>Siwan</strong>, <strong>Muzaffarpur</strong>, <strong>Gaya</strong> &amp; all regions of Bihar.
              </span>
            </div>
          </div>

          {/* Right Hero Floating/Embedded Enquiry Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-7 relative overflow-hidden">
              {/* Card Header */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Fast Track Review
                  </span>
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Advisor Online
                  </span>
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 leading-snug">
                  Check Your Home Loan Eligibility
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Get a personalized sanction estimate &amp; lowest interest rate plan.
                </p>
              </div>

              {submittedData ? (
                /* Success State */
                <div className="py-6 text-center animate-fade-in space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">
                      Thank You, {submittedData.name.split(' ')[0]}!
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Your enquiry has been received. Our home-loan expert will contact you shortly.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-xs text-left space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Enquiry ID:</span>
                      <span className="font-mono font-bold text-blue-700">{submittedData.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Loan Amount:</span>
                      <span className="font-bold">₹{submittedData.loanAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Advisor:</span>
                      <span className="font-semibold text-emerald-700">{settings.advisorName}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <button
                      onClick={handleWhatsAppChat}
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Us</span>
                    </button>
                    <button
                      onClick={() => setSubmittedData(null)}
                      className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-300 transition-all"
                    >
                      <span>Back to Home</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                          errors.name ? 'border-rose-400' : 'border-slate-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600`}
                      />
                    </div>
                    {errors.name && <p className="text-[10px] text-rose-500 mt-0.5">{errors.name}</p>}
                  </div>

                  {/* Mobile & City */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9835012345"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className={`w-full px-3 py-2 text-sm rounded-xl border ${
                          errors.mobile ? 'border-rose-400' : 'border-slate-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600`}
                      />
                      {errors.mobile && <p className="text-[10px] text-rose-500 mt-0.5">{errors.mobile}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        City <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-2.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 bg-white"
                      >
                        <option value="Patna">Patna</option>
                        <option value="Siwan">Siwan</option>
                        <option value="Muzaffarpur">Muzaffarpur</option>
                        <option value="Gaya">Gaya</option>
                        <option value="Darbhanga">Darbhanga</option>
                        <option value="Bihar Sharif">Bihar Sharif</option>
                        <option value="Other">Other City</option>
                      </select>
                    </div>
                  </div>

                  {/* Employment Type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Employment Type <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.employment}
                      onChange={(e) => setFormData({ ...formData, employment: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 bg-white"
                    >
                      <option value="Salaried">Salaried (Private / PSU / Govt)</option>
                      <option value="Self Employed">Self Employed</option>
                      <option value="Business Owner">Business Owner</option>
                      <option value="Professional">Professional (Doctor, CA, Lawyer)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Monthly Income & Loan Amount */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Monthly Income (₹) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="75000"
                        value={formData.income}
                        onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Required Loan (₹) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="3500000"
                        value={formData.loanAmount}
                        onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 disabled:opacity-75 text-white font-bold text-sm shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        <span>Check Eligibility</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Form Footer Notice */}
                  <p className="text-[11px] text-center text-slate-500 leading-normal pt-1">
                    Your information is used only to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
