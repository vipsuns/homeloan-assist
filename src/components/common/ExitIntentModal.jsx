import React, { useState, useEffect } from 'react';
import { X, Sparkles, Phone, User, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLeadContext } from '../../context/LeadContext';

export const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('Patna');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const { addLead, isLeadModalOpen } = useLeadContext();

  useEffect(() => {
    // Check if dismissed before in session
    const isDismissed = sessionStorage.getItem('homeloan_popup_dismissed_v2');
    if (isDismissed) return;

    // Show after 12 seconds of browsing
    const timer = setTimeout(() => {
      // Only show if main modal isn't already active
      if (!isLeadModalOpen) {
        setIsOpen(true);
      }
    }, 12000);

    return () => clearTimeout(timer);
  }, [isLeadModalOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('homeloan_popup_dismissed_v2', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name');
      return;
    }
    const cleanMobile = mobile.replace(/[^0-9]/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    addLead({
      name,
      mobile,
      city,
      income: 65000,
      loanAmount: 3500000,
      employment: 'Salaried',
      source: 'Timed Exit/Browsing Popup'
    });

    setIsSuccess(true);
    sessionStorage.setItem('homeloan_popup_dismissed_v2', 'true');
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 z-10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top visual banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 p-6 text-white text-left relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-10">
            <Sparkles className="w-32 h-32" />
          </div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-2">
            Free Home Loan Consultation
          </span>
          <h3 className="text-xl font-bold font-heading leading-snug">
            Planning to Buy Your Home?
          </h3>
          <p className="text-xs text-blue-100 mt-1">
            Check your home-loan eligibility and speak with an independent expert.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
              <h4 className="text-lg font-bold text-slate-900">Callback Requested!</h4>
              <p className="text-xs text-slate-600 mt-1">
                Our advisor Vikram Kumar will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {error && (
                <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setError(''); }}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    placeholder="e.g. 98350 12345"
                    value={mobile}
                    onChange={(e) => { setMobile(e.target.value); setError(''); }}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  City / Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 bg-white"
                  >
                    <option value="Patna">Patna</option>
                    <option value="Siwan">Siwan</option>
                    <option value="Muzaffarpur">Muzaffarpur</option>
                    <option value="Gaya">Gaya</option>
                    <option value="Darbhanga">Darbhanga</option>
                    <option value="Other">Other City</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-sm shadow-md shadow-blue-600/30 transition-all cursor-pointer mt-1"
              >
                <span>Get a Callback</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-slate-400 mt-2">
                No spam. 100% confidential financial advisory.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
