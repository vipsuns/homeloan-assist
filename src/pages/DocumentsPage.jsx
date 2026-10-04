import React, { useState } from 'react';
import { useLeadContext } from '../context/LeadContext';
import { 
  FileText, 
  CheckCircle2, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Briefcase, 
  User, 
  Building, 
  Home, 
  ArrowRight,
  FileCheck
} from 'lucide-react';

export const DocumentsPage = ({ onNavigate }) => {
  const { openLeadModal, showToast } = useLeadContext();
  const [activeTab, setActiveTab] = useState('salaried');

  const handleDownloadMockChecklist = () => {
    showToast("Document Checklist PDF downloaded successfully (Mock Demo)");
  };

  const salariedDocs = [
    {
      category: "Identity & Address Proof (KYC)",
      items: [
        "PAN Card (Mandatory for all applicants & co-applicants)",
        "Aadhaar Card with linked mobile number for e-KYC",
        "Valid Passport / Voter ID Card / Driving License (as secondary proof)",
        "2 Passport-size recent color photographs"
      ]
    },
    {
      category: "Income Proof",
      items: [
        "Last 3 to 6 months Salary Slips stamped by employer",
        "Form 16 (Part A & Part B) for the last 2 Financial Years",
        "Latest Income Tax Return (ITR-1 / ITR-2) copies with acknowledgement"
      ]
    },
    {
      category: "Bank Statements",
      items: [
        "Last 6 months updated Salary Account statement (PDF with bank logo)",
        "Ongoing loan repayment bank statements (if existing EMIs are running)",
        "Proof of margin money contribution (savings / FD account statement)"
      ]
    },
    {
      category: "Employment Documents",
      items: [
        "Official Employee ID Card copy",
        "Appointment Letter / Job Offer Letter",
        "Official work email confirmation or HR verification letter"
      ]
    }
  ];

  const selfEmployedDocs = [
    {
      category: "Identity & Address Proof (KYC)",
      items: [
        "PAN Card of Individual & Proprietorship / Partnership / Company",
        "Aadhaar Card of all partners, promoters, and co-applicants",
        "Registered Office Address Proof (Utility bill, Rent agreement)"
      ]
    },
    {
      category: "Income Proof (ITR & Tax)",
      items: [
        "Last 3 Financial Years ITR with full Computation of Income",
        "CA-Audited Balance Sheet & Profit & Loss Statement (for audits > ₹1 Cr / ₹50L)",
        "Tax Audit Report (Form 3CD & 3CB) where applicable",
        "Advance Tax payment challans (if applicable)"
      ]
    },
    {
      category: "Business Proof & Registration",
      items: [
        "GST Registration Certificate & last 12 months GST returns (GSTR-3B)",
        "MSME Udyam Registration Certificate",
        "Shop & Establishment License / Trade License / Municipal Registration",
        "Partnership Deed / MOA & AOA for private limited firms"
      ]
    },
    {
      category: "Bank Statements & Financials",
      items: [
        "Last 12 months Current Account bank statements for all active business accounts",
        "Last 6 months Savings Account bank statements of all key promoters",
        "Sanction letters of all existing OD / CC / Business loans"
      ]
    }
  ];

  const propertyDocs = [
    {
      category: "Purchase of Ready / Under-Construction Flat",
      items: [
        "Agreement to Sale / Builder Buyer Agreement registered or notarized",
        "Allotment Letter & Payment receipts of token money paid to builder",
        "Approved Building Blueprint Plan & Layout plan",
        "RERA Registration Certificate of the builder's project",
        "NOC (No Objection Certificate) from Builder / Society for bank mortgage"
      ]
    },
    {
      category: "Plot Construction / Independent House",
      items: [
        "Original Registered Sale Deed (Kewala / Bynamah) in applicant's name",
        "Prior Chain Deeds tracing continuous ownership for 13 to 30 years",
        "Mutation Order (Dakhil Kharij) & updated online Lagan (rent) receipt",
        "LPC (Land Possession Certificate) issued by local Circle Officer (CO)",
        "Detailed Construction Estimate prepared by certified civil engineer/architect",
        "Municipal / Nagar Nigam / Gram Panchayat approved building map"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Document Checklist Guide</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Required Documents for Home Loan
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Ensure swift bank sanction with zero objections. Review the comprehensive documentation checklist tailored to your borrower profile.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 space-y-8">
        {/* Profile Tabs */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-2 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('salaried')}
            className={`flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'salaried'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <User className="w-4 h-4" />
            <span>For Salaried Employees</span>
          </button>

          <button
            onClick={() => setActiveTab('self-employed')}
            className={`flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'self-employed'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>For Self-Employed &amp; Business</span>
          </button>

          <button
            onClick={() => setActiveTab('property')}
            className={`flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'property'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Property &amp; Legal Papers</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="space-y-6 animate-fade-in">
          {(activeTab === 'salaried' ? salariedDocs : activeTab === 'self-employed' ? selfEmployedDocs : propertyDocs).map((sec, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm border border-blue-200">
                  {idx + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900">
                  {sec.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-0 sm:pl-12">
                {sec.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Note */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Important Notice:</strong> Required documents may vary based on applicant profile, property jurisdiction, and specific lender requirements (such as SBI, HDFC, ICICI, etc.). Our advisor will provide a tailored list after evaluating your profile.
          </p>
        </div>

        {/* Action Bar */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center sm:flex sm:items-center sm:justify-between gap-6 shadow-sm">
          <div className="text-left space-y-1 mb-4 sm:mb-0">
            <h4 className="text-lg font-bold font-heading text-slate-900">
              Need Help Reviewing Your Property Deeds or ITRs?
            </h4>
            <p className="text-xs text-slate-500">
              Get your documents pre-screened by Vikram Kumar before submitting to the bank.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownloadMockChecklist}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-colors"
            >
              <Download className="w-4 h-4 text-blue-600" />
              <span>Download Checklist (PDF)</span>
            </button>
            <button
              onClick={() => openLeadModal({ source: 'Documents Page CTA' })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <span>Request Document Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
