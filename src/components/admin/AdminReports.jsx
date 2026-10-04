import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Award, 
  IndianRupee, 
  Users, 
  CheckCircle2,
  ArrowUpRight,
  MapPin
} from 'lucide-react';
import { useLeadContext } from '../../context/LeadContext';

export const AdminReports = () => {
  const { leads, applications } = useLeadContext();

  const funnelStages = [
    { name: 'Website Visitors (Monthly)', count: '14,850', percent: '100%', color: 'bg-slate-300' },
    { name: 'Enquiries / Leads Generated', count: '1,284', percent: '8.6%', color: 'bg-blue-500' },
    { name: 'First Contact / Pre-Screened', count: '742', percent: '57.8%', color: 'bg-indigo-500' },
    { name: 'Document Collection Complete', count: '380', percent: '29.5%', color: 'bg-purple-500' },
    { name: 'Bank Application Logged', count: '210', percent: '16.3%', color: 'bg-amber-500' },
    { name: 'Sanction Letters Issued', count: '118', percent: '9.2%', color: 'bg-emerald-500' },
    { name: 'Full Loan Disbursed', count: '96', percent: '7.5%', color: 'bg-emerald-600' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold font-heading text-slate-900">
          Conversion Reports &amp; Analytics
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          End-to-end funnel diagnostics, drop-off analysis, and regional disbursement figures.
        </p>
      </div>

      {/* Funnel Diagnostics Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold font-heading text-slate-900">
              Inquiry-to-Disbursement Conversion Funnel
            </h3>
            <p className="text-xs text-slate-500">
              Conversion benchmarks across digital campaigns and on-ground consultations
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
            7.5% Net Funnel Conversion
          </span>
        </div>

        <div className="space-y-4">
          {funnelStages.map((stg, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">{stg.name}</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">{stg.count}</span>
                  <span className="text-slate-400 font-medium">({stg.percent})</span>
                </div>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <div 
                  style={{ width: stg.percent }}
                  className={`h-full ${stg.color} rounded-full transition-all duration-700`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid of Key Performance Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Average Ticket Size</span>
          <div className="text-3xl font-extrabold text-blue-700 font-heading">₹38.5 Lakhs</div>
          <p className="text-xs text-slate-500">Highest ticket volume: 2BHK &amp; 3BHK flats in Patna &amp; Danapur</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Turnaround Time (TAT)</span>
          <div className="text-3xl font-extrabold text-emerald-600 font-heading">6.8 Days</div>
          <p className="text-xs text-slate-500">From verified document handover to formal bank sanction letter</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Top Source of Conversion</span>
          <div className="text-3xl font-extrabold text-purple-700 font-heading">Hero Card</div>
          <p className="text-xs text-slate-500">54% of sanctioned leads originated from homepage quick eligibility card</p>
        </div>
      </div>
    </div>
  );
};
