import React from 'react';
import { useLeadContext } from '../../context/LeadContext';
import { 
  Users, 
  UserPlus, 
  PhoneCall, 
  CalendarClock, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  ArrowUpRight, 
  IndianRupee, 
  MapPin, 
  Sparkles,
  BarChart3,
  PieChart,
  ArrowRight
} from 'lucide-react';

export const AdminDashboard = ({ onSelectTab, onOpenLeadDetail }) => {
  const { leads, applications } = useLeadContext();

  // Top Metrics matching prompt specification
  const topMetrics = [
    { label: 'Total Leads', count: 1284, current: leads.length, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', change: '+14% vs last month' },
    { label: 'New Leads', count: 186, current: leads.filter(l => l.status === 'New').length, icon: UserPlus, color: 'text-amber-600', bg: 'bg-amber-50', change: '+22% this week' },
    { label: 'Contacted', count: 742, current: leads.filter(l => l.status === 'Contacted').length, icon: PhoneCall, color: 'text-indigo-600', bg: 'bg-indigo-50', change: '58% conversion' },
    { label: 'Follow-up', count: 231, current: leads.filter(l => l.status === 'Follow-up').length, icon: CalendarClock, color: 'text-purple-600', bg: 'bg-purple-50', change: 'Active pipeline' },
    { label: 'Converted', count: 96, current: leads.filter(l => l.status === 'Converted').length, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', change: '₹48.2 Cr Sanctioned' },
    { label: 'Lost', count: 29, current: leads.filter(l => l.status === 'Lost').length, icon: XCircle, color: 'text-rose-600', bg: 'bg-rose-50', change: '2.2% drop rate' }
  ];

  // Lead Generation Monthly Trend Data (Jan - Oct)
  const monthlyData = [
    { month: 'Jan', count: 85 },
    { month: 'Feb', count: 98 },
    { month: 'Mar', count: 112 },
    { month: 'Apr', count: 124 },
    { month: 'May', count: 140 },
    { month: 'Jun', count: 135 },
    { month: 'Jul', count: 152 },
    { month: 'Aug', count: 168 },
    { month: 'Sep', count: 184 },
    { month: 'Oct', count: 186 }
  ];
  const maxMonthly = Math.max(...monthlyData.map(d => d.count));

  // Weekly Enquiries (Past 7 Days)
  const weeklyData = [
    { day: 'Mon', count: 24 },
    { day: 'Tue', count: 32 },
    { day: 'Wed', count: 28 },
    { day: 'Thu', count: 36 },
    { day: 'Fri', count: 42 },
    { day: 'Sat', count: 38 },
    { day: 'Sun', count: 26 }
  ];
  const maxWeekly = Math.max(...weeklyData.map(d => d.count));

  // Loan Amount Distribution
  const loanDistribution = [
    { range: '₹15L – ₹30L', percent: 34, color: 'bg-blue-600', label: '34%' },
    { range: '₹30L – ₹50L', percent: 42, color: 'bg-indigo-600', label: '42%' },
    { range: '₹50L – ₹80L', percent: 18, color: 'bg-amber-500', label: '18%' },
    { range: '> ₹80L (HNI)', percent: 6, color: 'bg-emerald-500', label: '6%' }
  ];

  // City-wise Leads
  const cityData = [
    { city: 'Patna', count: 520, percent: 40.5, tag: 'Highest' },
    { city: 'Siwan', count: 310, percent: 24.1, tag: 'High Growth' },
    { city: 'Muzaffarpur', count: 185, percent: 14.4, tag: 'Active' },
    { city: 'Gaya', count: 135, percent: 10.5, tag: 'Active' },
    { city: 'Darbhanga', count: 82, percent: 6.4, tag: 'Emerging' },
    { city: 'Other (Delhi, NCR, etc.)', count: 52, percent: 4.1, tag: 'Inbound' }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-2">
            Performance Overview
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading">
            Home Loan Advisory Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Real-time pipeline monitoring, customer callback tracking, and sanction conversion analytics.
          </p>
        </div>

        <button
          onClick={() => onSelectTab('leads')}
          className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-2"
        >
          <span>View All Leads ({leads.length})</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Top 6 KPI Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {topMetrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500">{m.label}</span>
                <div className={`w-8 h-8 rounded-xl ${m.bg} ${m.color} flex items-center justify-center`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold font-heading text-slate-900 leading-none">
                  {m.count.toLocaleString()}
                </div>
                <div className="text-[10px] text-slate-400 font-medium mt-1">
                  Active in CRM: <strong className="text-slate-700">{m.current}</strong>
                </div>
                <span className="text-[10px] font-semibold text-emerald-600 mt-1.5 block">
                  {m.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Monthly Lead Generation Bar Chart (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold font-heading text-slate-900">
                Lead Generation Trend (2026)
              </h3>
              <p className="text-xs text-slate-500">
                Monthly verified home-loan inquiries received
              </p>
            </div>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
              Total: 1,284 Enquiries
            </span>
          </div>

          {/* SVG Bar Chart */}
          <div className="h-56 flex items-end justify-between gap-2 pt-6 pb-2 border-b border-slate-100">
            {monthlyData.map((d, i) => {
              const heightPct = Math.round((d.count / maxMonthly) * 100);
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full max-w-[32px] bg-slate-100 rounded-t-lg relative flex items-end justify-center h-44">
                    <div 
                      style={{ height: `${heightPct}%` }}
                      className="w-full bg-blue-600 group-hover:bg-blue-500 rounded-t-lg transition-all duration-500 relative"
                    >
                      {/* Tooltip on hover */}
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] font-bold py-0.5 px-1.5 rounded transition-opacity pointer-events-none whitespace-nowrap">
                        {d.count} leads
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-500 font-semibold">{d.month}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Average: 128 leads / month</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              Peak Growth in Q3 &amp; Q4 festive season
            </span>
          </div>
        </div>

        {/* Weekly Enquiries (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold font-heading text-slate-900">
                Weekly Inquiries (This Week)
              </h3>
              <p className="text-xs text-slate-500">
                Day-by-day inbound enquiries
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              226 Leads
            </span>
          </div>

          <div className="h-56 flex items-end justify-between gap-3 pt-6 pb-2 border-b border-slate-100">
            {weeklyData.map((w, i) => {
              const hPct = Math.round((w.count / maxWeekly) * 100);
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full max-w-[36px] bg-slate-100 rounded-t-lg relative flex items-end justify-center h-44">
                    <div 
                      style={{ height: `${hPct}%` }}
                      className="w-full bg-indigo-600 group-hover:bg-indigo-500 rounded-t-lg transition-all duration-500 relative"
                    >
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] font-bold py-0.5 px-1.5 rounded transition-opacity pointer-events-none">
                        {w.count}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-500 font-semibold">{w.day}</span>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-slate-500">
            Highest traffic observed on Friday and Saturday following website digital campaigns in Bihar.
          </p>
        </div>
      </div>

      {/* Row 2: Loan Amount Distribution & City-wise Leads */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Loan Amount Distribution (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
          <div>
            <h3 className="text-base font-bold font-heading text-slate-900">
              Loan Amount Ticket Size Distribution
            </h3>
            <p className="text-xs text-slate-500">
              Breakdown of borrower loan ticket requests
            </p>
          </div>

          {/* Stacked bar */}
          <div className="h-4 w-full rounded-full bg-slate-100 overflow-hidden flex">
            {loanDistribution.map((seg, i) => (
              <div 
                key={i} 
                style={{ width: `${seg.percent}%` }}
                className={`${seg.color} transition-all`}
                title={`${seg.range}: ${seg.percent}%`}
              />
            ))}
          </div>

          {/* Distribution Rows */}
          <div className="space-y-3">
            {loanDistribution.map((seg, i) => (
              <div key={i} className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${seg.color}`}></span>
                  <span className="font-semibold text-slate-800">{seg.range}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">{seg.percent}%</span>
                  <span className="text-slate-400">of enquiries</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-400">
            Average sanctioned ticket size in Patna is ₹42.5 Lakhs; in Siwan it is ₹36 Lakhs.
          </p>
        </div>

        {/* City-wise Leads (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold font-heading text-slate-900">
                City-wise Leads Distribution
              </h3>
              <p className="text-xs text-slate-500">
                Regional demand across key operational hubs
              </p>
            </div>
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>

          <div className="space-y-3">
            {cityData.map((c, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">{c.city}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{c.count} leads</span>
                    <span className="text-slate-400">({c.percent}%)</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700">
                      {c.tag}
                    </span>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div 
                    style={{ width: `${c.percent}%` }}
                    className="h-full bg-blue-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3: Recent Activity & Quick Lead Action List */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold font-heading text-slate-900">
              Recent Leads &amp; Quick Action Stream
            </h3>
            <p className="text-xs text-slate-500">
              Latest enquiries from public website forms &amp; eligibility calculator
            </p>
          </div>
          <button
            onClick={() => onSelectTab('leads')}
            className="text-xs font-bold text-blue-600 hover:text-blue-800"
          >
            Open Full Leads Table →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left divide-y divide-slate-200">
            <thead className="bg-slate-50 text-slate-600 font-bold uppercase">
              <tr>
                <th className="py-2.5 px-3">Lead ID</th>
                <th className="py-2.5 px-3">Borrower Name</th>
                <th className="py-2.5 px-3">City</th>
                <th className="py-2.5 px-3">Employment</th>
                <th className="py-2.5 px-3">Loan Amount</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {leads.slice(0, 6).map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/80">
                  <td className="py-2.5 px-3 font-mono font-bold text-blue-700">{lead.id}</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">{lead.name}</td>
                  <td className="py-2.5 px-3">{lead.city}</td>
                  <td className="py-2.5 px-3">{lead.employment}</td>
                  <td className="py-2.5 px-3 font-semibold">₹{(lead.loanAmount / 100000).toFixed(1)}L</td>
                  <td className="py-2.5 px-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      lead.status === 'New' ? 'bg-amber-100 text-amber-800' :
                      lead.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                      lead.status === 'Follow-up' ? 'bg-purple-100 text-purple-800' :
                      lead.status === 'Converted' ? 'bg-emerald-100 text-emerald-800' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-2.5 px-3">
                    <button
                      onClick={() => onOpenLeadDetail(lead)}
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 underline"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
