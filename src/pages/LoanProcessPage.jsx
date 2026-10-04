import React from 'react';
import { PROCESS_STEPS } from '../data/mockData';
import { useLeadContext } from '../context/LeadContext';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  FileText, 
  MapPin,
  Send,
  Calculator,
  FolderOpen,
  SendHorizontal,
  BadgeCheck
} from 'lucide-react';

export const LoanProcessPage = ({ onNavigate }) => {
  const { openLeadModal } = useLeadContext();

  const stepDetails = [
    {
      step: "01",
      title: "Share Your Requirement",
      duration: "5 to 10 Minutes",
      summary: "Start with an initial phone or online consultation. Share your target property location (Patna, Siwan, etc.), estimated budget, and employment profile.",
      checklist: [
        "Identity verification (PAN & Aadhaar)",
        "Desired loan amount and property status",
        "Preferred bank or lender preferences (SBI, HDFC, etc.)"
      ]
    },
    {
      step: "02",
      title: "Check Eligibility & Pre-Approval",
      duration: "Within 4 Hours",
      summary: "We evaluate your FOIR (Fixed Obligation to Income Ratio), credit score, and income stability. If there are co-applicants, we compute joint borrowing power.",
      checklist: [
        "Soft credit check (No negative score impact)",
        "FOIR calculation and maximum EMI determination",
        "Structuring optimal tenure (up to 30 years)"
      ]
    },
    {
      step: "03",
      title: "Prepare & Audit Documents",
      duration: "24 to 48 Hours",
      summary: "Our advisor verifies all income proofs and property papers against bank credit policies. We eliminate common errors before file submission.",
      checklist: [
        "Salaried: Salary slips, Form 16, bank statements",
        "Self-employed: ITRs, Computation, CA certified P&L, GST",
        "Property: Chain deed, Sale Agreement, Mutation & LPC"
      ]
    },
    {
      step: "04",
      title: "Submit Bank Application",
      duration: "2 to 3 Working Days",
      summary: "Your complete dossier is submitted to the lending branch. Bank managers initiate technical evaluation and legal title vetting.",
      checklist: [
        "Panel lawyer title search (13 to 30 years chain)",
        "Panel engineer physical property valuation",
        "KYC biometric or branch verification"
      ]
    },
    {
      step: "05",
      title: "Sanction Letter & Disbursement",
      duration: "3 to 5 Working Days",
      summary: "Formal sanction letter is issued specifying approved loan amount, interest rate, and tenure. Upon signing agreement, funds are disbursed directly to seller/builder.",
      checklist: [
        "Sanction letter review & acceptance",
        "Execution of loan agreement & MODT stamping",
        "Cheque or RTGS disbursement to builder or seller"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>End-to-End Workflow</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            The 5-Step Loan Journey
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Transparent, predictable, and hassle-free. Discover exactly what happens at every stage from your initial enquiry to sanction.
          </p>
        </div>
      </section>

      {/* Main Timeline Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 space-y-8">
        {stepDetails.map((item, idx) => (
          <div
            key={item.step}
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start"
          >
            {/* Step Number Badge */}
            <div className="flex md:flex-col items-center gap-3 shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 text-white font-extrabold font-heading text-2xl flex items-center justify-center shadow-md">
                {item.step}
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">
                <Clock className="w-3 h-3 text-blue-600" />
                {item.duration}
              </span>
            </div>

            {/* Details */}
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Checklist */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Stage Deliverables &amp; Focus:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.checklist.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Regional Bihar Specific Guidance Card */}
        <div className="bg-white rounded-3xl border border-amber-200/80 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-2">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>Special Documentation Notice for Bihar (Patna, Siwan &amp; Districts)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
            For plot construction or independent house purchases in Bihar, banks strictly require:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
            <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
              <strong>LPC (Land Possession Certificate)</strong>
              <p className="text-slate-500 mt-1">Issued by Circle Officer (CO) certifying peaceful possession.</p>
            </div>
            <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
              <strong>Updated Lagan (Revenue) Receipt</strong>
              <p className="text-slate-500 mt-1">Paid online through Bihar Bhumi portal for current financial year.</p>
            </div>
            <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
              <strong>Municipal / PRDA Approved Map</strong>
              <p className="text-slate-500 mt-1">Certified building blueprint stamped by authorized engineer/body.</p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-8 rounded-3xl bg-blue-600 text-white text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold font-heading">
            Begin Your 5-Step Process Today
          </h3>
          <p className="text-sm text-blue-100 max-w-lg mx-auto">
            Take the first step. Our advisor handles branch coordination and file tracking so you don't face unnecessary visits.
          </p>
          <button
            onClick={() => openLeadModal({ source: 'Loan Process Bottom CTA' })}
            className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Start Step 01: Share Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
