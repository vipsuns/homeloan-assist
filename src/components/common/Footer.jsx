import React from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink,
  Lock
} from 'lucide-react';
import { useLeadContext } from '../../context/LeadContext';

export const Footer = ({ onNavigate }) => {
  const { openLeadModal, settings } = useLeadContext();

  const handleLink = (path) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => handleLink('/')}
              className="flex items-center gap-3 cursor-pointer group inline-flex"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center border border-blue-500/40">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-tight text-white">
                  HomeLoan<span className="text-blue-400">Assist</span>
                </span>
                <span className="ml-2 text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700">
                  Advisory
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your Home Loan Journey, Made Simple. Get expert assistance for your home loan journey — from eligibility and EMI planning to application support and banking coordination.
            </p>

            {/* Direct Contact Pills */}
            <div className="pt-2 space-y-2 text-xs">
              <a 
                href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} 
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-6 h-6 rounded-md bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Phone: {settings.phone}</span>
              </a>

              <a 
                href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <div className="w-6 h-6 rounded-md bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <span>WhatsApp: {settings.whatsapp}</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <div className="w-6 h-6 rounded-md bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Patna • Siwan • Muzaffarpur • Gaya • Bihar</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleLink('/')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/home-loans')} className="hover:text-white transition-colors">
                  Home Loan Types
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/eligibility')} className="hover:text-white transition-colors">
                  Eligibility Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/emi-calculator')} className="hover:text-white transition-colors">
                  EMI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/loan-process')} className="hover:text-white transition-colors">
                  5-Step Loan Process
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/documents')} className="hover:text-white transition-colors">
                  Document Checklist
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/faqs')} className="hover:text-white transition-colors">
                  FAQs &amp; Help
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/about')} className="hover:text-white transition-colors">
                  About Us &amp; Advisor
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/contact')} className="hover:text-white transition-colors">
                  Contact Office
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Customer Support
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>Call Expert</span>
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={() => openLeadModal({ source: 'Footer Request Callback' })} 
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Request Callback</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('/about')} 
                  className="hover:text-white transition-colors text-left"
                >
                  <span>Advisor Profile ({settings.advisorName})</span>
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => handleLink('/admin')}
                  className="text-xs font-medium text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1.5 rounded-lg"
                >
                  <span>Admin CRM Portal Demo</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleLink('/privacy-policy')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/terms')} className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/disclaimer')} className="hover:text-white transition-colors">
                  Disclaimer Notice
                </button>
              </li>
              <li className="pt-3">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 leading-normal flex items-start gap-2">
                  <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Your financial data is encrypted and used only to respond to your explicit loan enquiry.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Regulatory & Legal Disclaimer */}
        <div className="py-6 border-b border-slate-900 text-xs text-slate-500 leading-relaxed space-y-2">
          <p className="font-semibold text-slate-400">
            Important Regulatory Disclaimer &amp; Notice:
          </p>
          <p>
            HomeLoan Assist is an independent home-loan assistance, advisory, and lead-generation platform. Loan approval, interest rates, eligibility, loan amounts, processing fees, documentation requirements, and other terms are subject to the respective lending bank's (such as State Bank of India or other financial institutions) independent credit underwriting, legal scrutiny, and technical assessment.
          </p>
          <p>
            This website is an independent facilitation platform and is NOT an official branch, authorized distributor, or official website of State Bank of India (SBI). All product names, logos, and brands are property of their respective owners. Indicative interest rates and calculations provided on this portal are for illustrative purposes and subject to change without prior notice.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} HomeLoan Assist. All rights reserved. Independent Financial Assistance.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleLink('/privacy-policy')} className="hover:underline">Privacy</button>
            <button onClick={() => handleLink('/terms')} className="hover:underline">Terms</button>
            <button onClick={() => handleLink('/disclaimer')} className="hover:underline">Disclaimer</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
