import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  Menu, 
  X, 
  ShieldCheck, 
  Calculator, 
  FileText, 
  HelpCircle, 
  User, 
  ArrowRight,
  Sparkles,
  LayoutDashboard
} from 'lucide-react';
import { useLeadContext } from '../../context/LeadContext';

export const Navbar = ({ currentPath, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openLeadModal, settings } = useLeadContext();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Home Loans', path: '/home-loans' },
    { label: 'Eligibility', path: '/eligibility' },
    { label: 'EMI Calculator', path: '/emi-calculator' },
    { label: 'Loan Process', path: '/loan-process' },
    { label: 'Documents', path: '/documents' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top Advisory Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Independent Home Loan Assistance &amp; Advisory</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">Serving Patna, Siwan, Muzaffarpur &amp; all Bihar</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${settings.phone.replace(/\s+/g, '')}`} 
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-medium text-slate-200"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Talk to Advisor: {settings.phone}</span>
            </a>
            <button
              onClick={() => handleLinkClick('/admin')}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium bg-slate-800 px-2 py-0.5 rounded border border-slate-700"
            >
              <LayoutDashboard className="w-3 h-3" />
              <span>Admin CRM Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <div 
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center shadow-md shadow-blue-950/20 border border-slate-700 group-hover:scale-105 transition-transform">
              <div className="relative">
                <Building2 className="w-6 h-6 text-white" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-slate-900"></span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-xl font-bold tracking-tight text-slate-900">
                  HomeLoan<span className="text-blue-600">Assist</span>
                </span>
                <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                  Advisory
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-none mt-0.5">
                Your Home Loan Journey, Made Simple.
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('/admin')}
              className="text-xs font-semibold px-3 py-2 rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center gap-1.5 transition-colors xl:flex"
              title="Open Admin CRM Dashboard"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-blue-600" />
              <span>CRM Portal</span>
            </button>

            <button
              onClick={() => openLeadModal({ source: 'Navbar Header' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold shadow-md shadow-blue-600/25 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Check Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => openLeadModal({ source: 'Mobile Header CTA' })}
              className="sm:inline-flex hidden items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-sm"
            >
              <span>Check Eligibility</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-fade-in">
          {/* Quick Notice */}
          <div className="p-3 mb-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Independent guidance for SBI &amp; major bank home loans</span>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`flex items-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg text-left transition-colors ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50 font-bold' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                handleLinkClick('/admin');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold border border-slate-300"
            >
              <LayoutDashboard className="w-4 h-4 text-blue-600" />
              <span>Open Admin CRM Demo Dashboard</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openLeadModal({ source: 'Mobile Menu Drawer' });
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-md shadow-blue-600/30"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Check My Eligibility Now</span>
            </button>

            <a
              href={`tel:${settings.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct Advisor Call: {settings.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
