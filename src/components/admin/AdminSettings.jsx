import React, { useState } from 'react';
import { useLeadContext } from '../../context/LeadContext';
import { 
  Settings, 
  User, 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Save, 
  RotateCcw, 
  ShieldCheck, 
  CheckCircle2,
  Bell
} from 'lucide-react';

export const AdminSettings = () => {
  const { settings, setSettings, resetToDefaults, showToast } = useLeadContext();
  const [formData, setFormData] = useState({ ...settings });

  const handleSave = (e) => {
    e.preventDefault();
    setSettings(formData);
    showToast("Settings updated successfully! Changes reflect on the public website.");
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all mock leads and applications back to the initial demo database?")) {
      resetToDefaults();
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold font-heading text-slate-900">
          Advisor &amp; System Settings
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Configure advisor contact details, WhatsApp integration numbers, and demo database state.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Advisor Details */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <h3 className="text-base font-bold font-heading text-slate-900 border-b border-slate-100 pb-3">
            Primary Advisor Profile
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Advisor Name</label>
              <input
                type="text"
                value={formData.advisorName}
                onChange={(e) => setFormData({ ...formData, advisorName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Official Role</label>
              <input
                type="text"
                value={formData.advisorRole}
                onChange={(e) => setFormData({ ...formData, advisorRole: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Experience</label>
              <input
                type="text"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Contact Phone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">WhatsApp Number</label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">Official Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="text-xs">
            <label className="font-semibold text-slate-700 block mb-1">Service Areas (Locations)</label>
            <input
              type="text"
              value={formData.serviceAreas}
              onChange={(e) => setFormData({ ...formData, serviceAreas: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-xs">
            <label className="font-semibold text-slate-700 block mb-1">Physical Office Address</label>
            <input
              type="text"
              value={formData.office}
              onChange={(e) => setFormData({ ...formData, office: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/30 transition-all cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save Settings</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Demo Database (30+ Initial Mock Leads)</span>
          </button>
        </div>
      </form>
    </div>
  );
};
