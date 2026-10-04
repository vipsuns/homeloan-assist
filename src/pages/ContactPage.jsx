import React, { useState } from 'react';
import { useLeadContext } from '../context/LeadContext';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  Navigation,
  ShieldCheck,
  Building2
} from 'lucide-react';

export const ContactPage = () => {
  const { addLead, settings, showToast } = useLeadContext();

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: 'Patna',
    loanRequirement: 'Home Purchase Loan (₹35 Lakhs)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.mobile.trim()) {
      setError('Name and mobile number are required.');
      return;
    }

    addLead({
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      city: formData.city,
      loanType: formData.loanRequirement,
      source: 'Contact Page Form'
    });

    setSubmitted(true);
    showToast("Callback request received! Advisor will call you shortly.");
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Advisory Contact</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Connect With Our Specialist
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Have questions regarding your eligibility, ongoing bank application, or property verification? We are here to help.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm text-slate-600">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block">Telephone:</span>
                    <a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-slate-900 hover:text-blue-600 text-base">
                      {settings.phone}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Mon–Sat: 9:30 AM to 7:30 PM IST</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block">WhatsApp Direct:</span>
                    <a 
                      href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-slate-900 hover:text-emerald-600 text-base"
                    >
                      {settings.whatsapp}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Instant chat &amp; document sharing</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block">Email Inquiries:</span>
                    <a href={`mailto:${settings.email}`} className="font-bold text-slate-900 hover:text-purple-600 text-base">
                      {settings.email}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Response within 2 business hours</p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block">Primary Office:</span>
                    <span className="font-bold text-slate-900 text-sm">
                      {settings.office}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5">Patna, Bihar, India (Doorstep service available)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Style Mock Location Card */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Service Hubs: Patna &amp; Siwan</span>
                </div>
                <span className="text-[11px] text-slate-400">Bihar, India</span>
              </div>

              {/* Styled Mock Map Canvas */}
              <div className="h-44 bg-slate-100 relative flex items-center justify-center overflow-hidden border-b border-slate-200">
                {/* Abstract grid lines simulating map streets */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                {/* Simulated River Ganga curve */}
                <div className="absolute w-full h-8 bg-blue-200/50 -rotate-6 top-10 blur-xs"></div>

                {/* Pin 1: Patna */}
                <div className="absolute left-1/3 top-16 flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold bg-white text-slate-900 px-1.5 py-0.5 rounded shadow mt-1 border">
                    Patna Hub
                  </span>
                </div>

                {/* Pin 2: Siwan */}
                <div className="absolute right-1/4 top-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md border-2 border-white">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <span className="text-[10px] font-bold bg-white text-slate-900 px-1.5 py-0.5 rounded shadow mt-1 border">
                    Siwan Desk
                  </span>
                </div>
              </div>

              <div className="p-4 text-xs text-slate-600 flex items-center justify-between bg-slate-50">
                <span>In-person meetings by appointment</span>
                <span className="font-semibold text-blue-700">Get Directions →</span>
              </div>
            </div>
          </div>

          {/* Contact Callback Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                  Enquiry Form
                </span>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Request a Priority Callback
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill out your details below and Vikram Kumar will connect with you to review your home loan options.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center animate-fade-in space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your callback request has been registered. Our home-loan specialist will call you on <strong>{formData.mobile}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        mobile: '',
                        email: '',
                        city: 'Patna',
                        loanRequirement: 'Home Purchase Loan (₹35 Lakhs)',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-rose-50 text-rose-700 text-xs font-medium border border-rose-200">
                      {error}
                    </div>
                  )}

                  {/* Name & Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98350 12345"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Email & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        City / Location <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="Patna">Patna</option>
                        <option value="Siwan">Siwan</option>
                        <option value="Muzaffarpur">Muzaffarpur</option>
                        <option value="Gaya">Gaya</option>
                        <option value="Darbhanga">Darbhanga</option>
                        <option value="Bihar Sharif">Bihar Sharif</option>
                        <option value="Other">Other Location</option>
                      </select>
                    </div>
                  </div>

                  {/* Loan Requirement */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Loan Requirement &amp; Budget
                    </label>
                    <select
                      value={formData.loanRequirement}
                      onChange={(e) => setFormData({ ...formData, loanRequirement: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="Home Purchase Loan (Up to ₹30 Lakhs)">Home Purchase Loan (Up to ₹30 Lakhs)</option>
                      <option value="Home Purchase Loan (₹30L – ₹60 Lakhs)">Home Purchase Loan (₹30L – ₹60 Lakhs)</option>
                      <option value="Home Construction on Owned Plot">Home Construction on Owned Plot</option>
                      <option value="Home Loan Balance Transfer + Top-Up">Home Loan Balance Transfer + Top-Up</option>
                      <option value="Home Extension / Renovation Loan">Home Extension / Renovation Loan</option>
                      <option value="NRI Home Loan">NRI Home Loan</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Specific Requirements (Optional)
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Share details about property, employer, current CIBIL score or queries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-sm shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
                  >
                    <span>Request a Callback</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    We respect your privacy. No unsolicited promotional spam or telemarketing.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
