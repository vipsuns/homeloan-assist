import React, { useState } from 'react';
import { useLeadContext } from '../../context/LeadContext';
import { 
  BadgeCheck, 
  MapPin, 
  IndianRupee, 
  Calendar, 
  Phone, 
  Percent, 
  Home, 
  UserCheck,
  Search,
  Sparkles
} from 'lucide-react';

export const AdminCustomers = () => {
  const { customers } = useLeadContext();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = customers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Converted Customers Directory
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Borrowers whose home loans have been sanctioned and disbursed through our assistance.
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search customer by name or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Grid of Converted Borrowers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">
                    {c.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 leading-snug">
                      {c.name}
                    </h4>
                    <span className="font-mono text-[10px] text-slate-400">
                      ID: {c.id} • {c.city}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                  <BadgeCheck className="w-3 h-3" />
                  Sanctioned
                </span>
              </div>

              {/* Loan Details List */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Sanctioned Amount:</span>
                  <span className="font-extrabold text-blue-700 text-sm">{c.loanAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Approved Interest:</span>
                  <span className="font-bold text-emerald-700">{c.interestRate} p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Repayment Tenure:</span>
                  <span className="font-semibold text-slate-800">{c.tenure}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Sanction Date:</span>
                  <span className="font-medium text-slate-700">{c.sanctionDate}</span>
                </div>
              </div>

              <div className="mt-3 text-xs text-slate-600 flex items-start gap-1.5">
                <Home className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{c.property}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Advisor: <strong>{c.manager}</strong></span>
              <a
                href={`tel:${c.mobile.replace(/[^0-9+]/g, '')}`}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Call Customer
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
