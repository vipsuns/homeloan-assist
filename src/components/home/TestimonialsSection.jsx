import React from 'react';
import { Star, Quote, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../../data/mockData';

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Real Borrowers • Real Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Trusted by Families Across Bihar &amp; India
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            See how our dedicated advisory helped salaried employees, business owners, and doctors secure their dream home loans with confidence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-300" />
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-indigo-900 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {t.role}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-blue-700 mt-0.5">
                      <MapPin className="w-3 h-3 text-blue-600" />
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span>Sanctioned: <strong>{t.loanAmount}</strong></span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
