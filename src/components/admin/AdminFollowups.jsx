import React, { useState } from 'react';
import { useLeadContext } from '../../context/LeadContext';
import { 
  CalendarClock, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Plus,
  User
} from 'lucide-react';

export const AdminFollowups = () => {
  const { followups, completeFollowup, showToast } = useLeadContext();
  const [filter, setFilter] = useState('All');

  const filtered = followups.filter((f) => {
    if (filter === 'All') return true;
    return f.status === filter;
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Scheduled Follow-ups
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Never miss a callback. Stay on top of document pickups, NRI video calls, and banker appointments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
          {['All', 'Due Today', 'Upcoming', 'Overdue', 'Completed'].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filter === s
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Follow-ups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => {
          const isDone = item.status === 'Completed';
          const cleanPhone = item.mobile.replace(/[^0-9+]/g, '');

          return (
            <div
              key={item.id}
              className={`bg-white rounded-2xl border p-5 shadow-xs transition-all flex flex-col justify-between ${
                isDone 
                  ? 'border-slate-200 opacity-60 bg-slate-50/50' 
                  : item.status === 'Overdue'
                  ? 'border-rose-300 bg-rose-50/30'
                  : item.status === 'Due Today'
                  ? 'border-amber-300 bg-amber-50/30'
                  : 'border-slate-200 hover:border-blue-300'
              }`}
            >
              <div>
                {/* Top Badge & Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    item.status === 'Overdue' ? 'bg-rose-100 text-rose-800' :
                    item.status === 'Due Today' ? 'bg-amber-100 text-amber-800' :
                    item.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {item.status}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{item.date} • {item.time}</span>
                  </div>
                </div>

                {/* Customer name & ID */}
                <div className="mb-2">
                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {item.customerName}
                  </h4>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Ref: {item.leadId} • {item.city}
                  </span>
                </div>

                {/* Note */}
                <p className="text-xs text-slate-600 leading-relaxed bg-white/80 p-3 rounded-xl border border-slate-200/80 mb-4">
                  {item.note}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${cleanPhone}`}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    title="Call"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                  </a>

                  <a
                    href={`https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(
                      `Hello ${item.customerName}, following up regarding your home loan enquiry.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                </div>

                <button
                  onClick={() => completeFollowup(item.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isDone
                      ? 'bg-slate-200 text-slate-700'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isDone ? 'Mark Pending' : 'Mark Completed'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm">
          No follow-ups matching current filter.
        </div>
      )}
    </div>
  );
};
