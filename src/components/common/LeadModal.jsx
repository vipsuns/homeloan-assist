import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  Building2, 
  ArrowRight,
  Phone,
  User,
  MapPin,
  Briefcase,
  IndianRupee
} from 'lucide-react';
import { useLeadContext } from '../../context/LeadContext';

export const LeadModal = () => {
  const { 
    isLeadModalOpen, 
    modalInitialData, 
    closeLeadModal, 
    addLead,
    settings 
  } = useLeadContext();

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: 'Patna',
    employment: 'Salaried',
    income: '65000',
    loanAmount: '3500000',
    loanType: 'Home Purchase Loan'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (modalInitialData) {
      setFormData(prev => ({
        ...prev,
        ...modalInitialData,
        loanAmount: modalInitialData.loanAmount ? String(modalInitialData.loanAmount) : prev.loanAmount
      }));
    }
    setSubmittedData(null);
    setErrors({});
  }, [modalInitialData, isLeadModalOpen]);

  if (!isLeadModalOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    
    const cleanMobile = formData.mobile.replace(/[^0-9]/g, '');
    if (!cleanMobile) {
      errs.mobile = 'Mobile number is required';
    } else if (cleanMobile.length < 10) {
      errs.mobile = 'Enter valid 10-digit mobile number';
    }

    if (!formData.city) errs.city = 'Please select or enter your city';
    if (!formData.income || Number(formData.income) <= 0) errs.income = 'Enter valid monthly income';
    if (!formData.loanAmount || Number(formData.loanAmount) <= 0) errs.loanAmount = 'Enter required loan amount';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const created = addLead({
        ...formData,
        income: Number(formData.income),
        loanAmount: Number(formData.loanAmount),
        source: modalInitialData?.source || 'Eligibility Modal'
      });
      setIsSubmitting(false);
      setSubmittedData(created);
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    const firstName = submittedData?.name?.split(' ')[0] || 'Sir/Madam';
    const text = encodeURIComponent(
      `Hello ${settings.advisorName}, I just submitted an enquiry for a Home Loan of ₹${(
        submittedData?.loanAmount || 3500000
      ).toLocaleString('en-IN')} in ${submittedData?.city || 'Bihar'}. Lead ID: ${
        submittedData?.id || 'New'
      }. Looking forward to your guidance.`
    );
    window.open(`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/40 border border-blue-400/30 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base tracking-tight leading-tight">
                HomeLoan Assist
              </h3>
              <p className="text-[11px] text-slate-300 font-medium">
                Independent Home Loan Assistance &amp; Pre-Approval Review
              </p>
            </div>
          </div>
          <button
            onClick={closeLeadModal}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {submittedData ? (
            /* Beautiful Success State */
            <div className="text-center py-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border-2 border-emerald-200 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-1">
                Thank You, {submittedData.name.split(' ')[0]}!
              </h2>
              <p className="text-sm text-slate-600 max-w-sm mx-auto mb-5 leading-relaxed">
                Your enquiry has been received. Our home-loan expert will contact you shortly to review your eligibility and next steps.
              </p>

              {/* Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs mb-6 space-y-1.5">
                <div className="flex justify-between text-slate-500">
                  <span>Enquiry Reference:</span>
                  <span className="font-mono font-bold text-blue-700">{submittedData.id}</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Required Loan:</span>
                  <span className="font-bold">₹{submittedData.loanAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>City / Location:</span>
                  <span className="font-medium">{submittedData.city}</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Assigned Advisor:</span>
                  <span className="font-medium text-emerald-700">{settings.advisorName} ({settings.experience})</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </button>
                <button
                  onClick={closeLeadModal}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 font-semibold text-sm transition-all border border-slate-300"
                >
                  <span>Back to Home</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 mt-4">
                Tip: You can also explore our EMI Calculator or Documents checklist while our advisor prepares your file.
              </p>
            </div>
          ) : (
            /* Lead Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h2 className="text-xl font-bold font-heading text-slate-900">
                  Check Your Home Loan Eligibility
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Get personalized eligibility estimate, lowest rate advice &amp; door-step documentation guidance.
                </p>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                      errors.name ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:ring-blue-200 focus:border-blue-600'
                    }`}
                  />
                </div>
                {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
              </div>

              {/* Mobile & City row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="e.g. 98350 12345"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        errors.mobile ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:ring-blue-200 focus:border-blue-600'
                      }`}
                    />
                  </div>
                  {errors.mobile && <p className="text-[11px] text-rose-500 mt-1">{errors.mobile}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City / Location <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 bg-white"
                    >
                      <option value="Patna">Patna</option>
                      <option value="Siwan">Siwan</option>
                      <option value="Muzaffarpur">Muzaffarpur</option>
                      <option value="Gaya">Gaya</option>
                      <option value="Darbhanga">Darbhanga</option>
                      <option value="Bihar Sharif">Bihar Sharif</option>
                      <option value="Delhi">Delhi / NCR</option>
                      <option value="Noida">Noida</option>
                      <option value="Lucknow">Lucknow</option>
                      <option value="Ranchi">Ranchi</option>
                      <option value="Other">Other City</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Employment Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Employment Type <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select
                    value={formData.employment}
                    onChange={(e) => setFormData({ ...formData, employment: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 bg-white"
                  >
                    <option value="Salaried">Salaried (Private / Govt / PSU)</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Business Owner">Business Owner / Trader</option>
                    <option value="Professional">Professional (Doctor, CA, Lawyer)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Income & Required Loan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Net Monthly Income (₹) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="number"
                      placeholder="e.g. 65000"
                      value={formData.income}
                      onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        errors.income ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:ring-blue-200 focus:border-blue-600'
                      }`}
                    />
                  </div>
                  {errors.income && <p className="text-[11px] text-rose-500 mt-1">{errors.income}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Required Loan Amount (₹) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="number"
                      placeholder="e.g. 3500000"
                      value={formData.loanAmount}
                      onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        errors.loanAmount ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:ring-blue-200 focus:border-blue-600'
                      }`}
                    />
                  </div>
                  {errors.loanAmount && <p className="text-[11px] text-rose-500 mt-1">{errors.loanAmount}</p>}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 disabled:opacity-75 text-white font-semibold text-sm shadow-md shadow-blue-600/30 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Calculating Eligibility...</span>
                    </span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Check Eligibility</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Confidentiality & Disclaimer Note */}
              <div className="text-center space-y-1">
                <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Your information is used only to respond to your enquiry.</span>
                </p>
                <p className="text-[10px] text-slate-400">
                  Independent assistance service. Final loan approval, rates and terms are subject to lender policies.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
