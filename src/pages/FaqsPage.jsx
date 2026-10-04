import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { useLeadContext } from '../context/LeadContext';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageCircle
} from 'lucide-react';

export const FaqsPage = ({ onNavigate }) => {
  const { openLeadModal, settings } = useLeadContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openId, setOpenId] = useState(1);

  const categories = ['All', 'Eligibility & Loan Amount', 'Documents & Process', 'Employment & Profile', 'Balance Transfer & Savings', 'Approval Guarantee & Disclaimers'];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Knowledgebase &amp; FAQs</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Get clear, realistic answers regarding home loan eligibility, documentation, bank interest rates, and loan approvals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 space-y-6">
        {/* Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-4 space-y-3">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search by keywords (e.g. self-employed, balance transfer, documents, CIBIL, EMI)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
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
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/40 animate-fade-in space-y-3">
                    <p>{faq.answer}</p>
                    <div className="flex items-center gap-2 text-[11px] text-blue-700 font-medium">
                      <span className="px-2 py-0.5 rounded bg-blue-100/60">{faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No questions found matching your search. Feel free to contact our advisor directly.
            </div>
          )}
        </div>

        {/* Support Card */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl mt-8">
          <div>
            <h3 className="text-xl font-bold font-heading">
              Didn't find what you are looking for?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Speak directly with our advisor Vikram Kumar for individual mortgage counseling.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openLeadModal({ source: 'FAQs Page CTA' })}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              Ask an Advisor
            </button>
            <a
              href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
