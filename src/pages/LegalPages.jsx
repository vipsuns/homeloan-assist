import React from 'react';
import { ShieldCheck, AlertCircle, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-6 text-slate-700 leading-relaxed text-sm">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Data Privacy &amp; Trust
            </span>
            <h1 className="text-3xl font-extrabold font-heading text-slate-900">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-1">Last Updated: October 2026</p>
          </div>

          <p>
            At <strong>HomeLoan Assist</strong>, we take the confidentiality of your financial and personal data with utmost seriousness. This Privacy Policy details how we collect, store, and utilize the information provided on our website.
          </p>

          <h3 className="text-base font-bold text-slate-900 font-heading">1. Information We Collect</h3>
          <p>
            When you interact with our eligibility calculators, callback forms, or consultation widgets, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Contact details: Name, mobile number, email address, and city of residence.</li>
            <li>Employment and financial profile: Monthly net income, existing EMI liabilities, employer type, and desired loan amount.</li>
            <li>Property information: Location, property category (ready flat, plot construction, renovation).</li>
          </ul>

          <h3 className="text-base font-bold text-slate-900 font-heading">2. Purpose of Collection</h3>
          <p>
            Your information is solely used to compute preliminary home loan eligibility, provide customized loan advice, and contact you directly regarding your explicit inquiry. We do NOT sell, rent, or trade your data to third-party telemarketers.
          </p>

          <h3 className="text-base font-bold text-slate-900 font-heading">3. Security Standards</h3>
          <p>
            All submitted enquiries are processed securely and stored with modern encryption protocols. Only authorized advisors assigned to your case have access to your details.
          </p>
        </div>
      </div>
    </div>
  );
};

export const TermsPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-6 text-slate-700 leading-relaxed text-sm">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Agreement of Use
            </span>
            <h1 className="text-3xl font-extrabold font-heading text-slate-900">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-slate-500 mt-1">Last Updated: October 2026</p>
          </div>

          <p>
            By accessing and utilizing <strong>HomeLoan Assist</strong>, you acknowledge and agree to the terms outlined below:
          </p>

          <h3 className="text-base font-bold text-slate-900 font-heading">1. Advisory Facilitation Service</h3>
          <p>
            HomeLoan Assist operates as an independent facilitation and lead-generation portal. We provide advisory, eligibility estimation, and application assistance for bank home loans. We are not a direct lender, banking institution, or authorized representative of the Reserve Bank of India (RBI).
          </p>

          <h3 className="text-base font-bold text-slate-900 font-heading">2. Loan Sanction and Discretion</h3>
          <p>
            Final loan approval, sanctioned amounts, applicable interest rates (EBLR/MCLR), processing charges, and required collateral remain at the sole and absolute discretion of the respective lending financial institution (such as State Bank of India or other scheduled commercial banks).
          </p>

          <h3 className="text-base font-bold text-slate-900 font-heading">3. Accuracy of User Information</h3>
          <p>
            Applicants are responsible for the veracity and accuracy of information provided in calculators and callback forms. Misrepresentation of income or documents may result in bank file rejection.
          </p>
        </div>
      </div>
    </div>
  );
};

export const DisclaimerPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-6 text-slate-700 leading-relaxed text-sm">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Mandatory Legal Disclosure
            </span>
            <h1 className="text-3xl font-extrabold font-heading text-slate-900">
              Disclaimer Notice
            </h1>
            <p className="text-xs text-slate-500 mt-1">Last Updated: October 2026</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm leading-relaxed flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>HomeLoan Assist is an independent home-loan assistance and enquiry platform. This website is NOT an official website, authorized agency, or representative of State Bank of India (SBI) or any government department.</strong>
            </p>
          </div>

          <h3 className="text-base font-bold text-slate-900 font-heading">1. Independent Status</h3>
          <p>
            We do not copy, replicate, or claim ownership over SBI logos, trademarks, corporate design layouts, or copyrighted materials. All third-party trademarks and names mentioned are for identification and informational reference only.
          </p>

          <h3 className="text-base font-bold text-slate-900 font-heading">2. Indicative Calculations</h3>
          <p>
            All figures generated by our EMI Calculator and Eligibility Calculator are indicative and illustrative estimates based on standard mathematical reducing-balance and FOIR models. They do not constitute a formal loan sanction or legal commitment from any lender.
          </p>

          <h3 className="text-base font-bold text-slate-900 font-heading">3. Verification with Official Lender Sources</h3>
          <p>
            Interest rates, concessions, and lending norms are subject to periodic change by the Reserve Bank of India and individual lenders. Borrowers are advised to verify final terms against official branch sanction documentation before executing agreements.
          </p>
        </div>
      </div>
    </div>
  );
};
