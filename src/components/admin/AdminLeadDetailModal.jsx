import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Briefcase, 
  IndianRupee, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Circle, 
  Plus, 
  User, 
  Home, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { useLeadContext } from '../../context/LeadContext';

export const AdminLeadDetailModal = ({ lead, onClose }) => {
  const { updateLeadStatus, addLeadNote, settings, showToast } = useLeadContext();
  const [noteInput, setNoteInput] = useState('');
  const [currentStatus, setCurrentStatus] = useState(lead?.status || 'New');

  if (!lead) return null;

  const handleStatusChange = (newStat) => {
    setCurrentStatus(newStat);
    updateLeadStatus(lead.id, newStat);
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!noteInput.trim()) return;
    addLeadNote(lead.id, noteInput);
    setNoteInput('');
  };

  const handleScheduleFollowup = () => {
    showToast(`Follow-up scheduled with ${lead.name} for tomorrow at 11:00 AM.`);
  };

  const cleanPhone = lead.mobile.replace(/[^0-9+]/g, '');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-lg shadow">
              {lead.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold font-heading">{lead.name}</h3>
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-blue-300 border border-slate-700">
                  {lead.id}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Created: {lead.date} at {lead.time} • Assigned to: <strong className="text-slate-200">{lead.assignedTo}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Action Bar & Status Dropdown */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600">Status:</span>
              <select
                value={currentStatus}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Converted">Converted</option>
                <option value="Lost">Lost</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call</span>
              </a>

              <a
                href={`https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(
                  `Hello ${lead.name}, this is ${settings.advisorName} from HomeLoan Assist regarding your home loan enquiry (${lead.id}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={handleScheduleFollowup}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Follow-up</span>
              </button>
            </div>
          </div>

          {/* Contact & Financial Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Details */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Contact Information
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-bold text-slate-900">{lead.mobile}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Email:</span>
                  <span className="font-medium text-slate-800">{lead.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">City / District:</span>
                  <span className="font-bold text-blue-700">{lead.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Assigned Agent:</span>
                  <span className="font-medium text-slate-800">{lead.assignedTo}</span>
                </div>
              </div>
            </div>

            {/* Financial Profile */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Financial Profile
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Monthly Net Income:</span>
                  <span className="font-bold text-slate-900">₹{lead.income?.toLocaleString('en-IN') || '65,000'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Existing Monthly EMI:</span>
                  <span className="font-bold text-slate-700">₹{lead.existingEmi?.toLocaleString('en-IN') || '0'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Required Loan:</span>
                  <span className="font-extrabold text-blue-700 text-sm">₹{lead.loanAmount?.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Employment:</span>
                  <span className="font-semibold text-slate-800">{lead.employment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Property / Type:</span>
                  <span className="font-medium text-slate-700 truncate max-w-[180px]">{lead.propertyType || lead.loanType}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Lead Activity Timeline
            </h4>
            <div className="space-y-3 pl-2">
              {(lead.timeline || [
                { stage: "Enquiry submitted", date: lead.date, completed: true },
                { stage: "Lead assigned", date: lead.date, completed: true },
                { stage: "Customer contacted", date: "Pending", completed: false },
                { stage: "Follow-up scheduled", date: "Pending", completed: false }
              ]).map((t, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs">
                  <div className="mt-0.5">
                    {t.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-300" />
                    )}
                  </div>
                  <div>
                    <span className={`font-semibold ${t.completed ? 'text-slate-900' : 'text-slate-400'}`}>
                      {t.stage}
                    </span>
                    <span className="text-[10px] text-slate-400 ml-2">({t.date})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notes Log & Add Note Input */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Internal Advisor Notes
            </h4>

            {/* Input */}
            <form onSubmit={handleAddNote} className="flex gap-2">
              <input
                type="text"
                placeholder="Type a new advisor note or interaction update..."
                value={noteInput}
                onChange={(e) => setNoteInput(e.target.value)}
                className="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shrink-0"
              >
                Add Note
              </button>
            </form>

            {/* Note items */}
            <div className="space-y-2 max-h-44 overflow-y-auto">
              {(lead.notes || []).map((n) => (
                <div key={n.id} className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
                    <span className="text-slate-700 font-bold">{n.author || 'Advisor'}</span>
                    <span>{n.date}</span>
                  </div>
                  <p className="text-slate-700 leading-normal">{n.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
