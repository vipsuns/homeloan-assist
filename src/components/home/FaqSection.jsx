import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Search, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { FAQS } from '../../data/mockData';
import { useLeadContext } from '../../context/LeadContext';

export const FaqSection = ({ onNavigate }) => {
  const [openId, setOpenId] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const { openLeadModal } = useLeadContext();

  const filteredFaqs = FAQS.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3 border border-blue-200">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Got Questions? We Have Answers.</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Clear, transparent answers regarding SBI and major bank home loans, eligibility requirements, and application procedures.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Search questions (e.g. self-employed, balance transfer, documents, CIBIL)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Accordions List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50/80 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 border border-blue-100">
                      Q{faq.id}
                    </span>
                    <span className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1 rounded-full bg-slate-100 text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/40 animate-fade-in">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-blue-700 font-semibold">
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No matching questions found for "{searchTerm}".
            </div>
          )}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h4 className="font-bold text-base text-slate-900 font-heading">
            Still have a specific question about your profile?
          </h4>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            Every borrower's situation is unique. Our advisor Vikram Kumar is available for personal consultation.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openLeadModal({ source: 'FAQ Section CTA' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <span>Ask an Advisor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                onNavigate('/faqs');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-200"
            >
              View Full FAQ Knowledgebase
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
