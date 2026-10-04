import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Kanban, 
  CalendarClock, 
  BadgeCheck, 
  BarChart3, 
  Settings, 
  ArrowLeft, 
  Phone, 
  Bell, 
  Search, 
  Menu, 
  X,
  Building2,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { useLeadContext } from '../../context/LeadContext';

export const AdminLayout = ({ activeTab, onSelectTab, onNavigatePublic, children }) => {
  const { leads, settings, resetToDefaults } = useLeadContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'leads', label: 'Leads', icon: Users, badge: leads.filter(l => l.status === 'New').length },
    { id: 'applications', label: 'Applications Pipeline', icon: Kanban },
    { id: 'follow-ups', label: 'Follow-ups', icon: CalendarClock },
    { id: 'customers', label: 'Customers', icon: BadgeCheck },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row font-sans">
      {/* Sidebar for Desktop */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div>
          {/* Top Brand */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-heading font-bold text-base text-white tracking-tight leading-none">
                  HomeLoan Assist
                </h1>
                <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">
                  CRM Portal v2.0
                </span>
              </div>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800 space-y-3">
          {/* Active Advisor Profile */}
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-700 text-white font-bold flex items-center justify-center text-xs">
              VK
            </div>
            <div className="overflow-hidden">
              <span className="text-xs font-bold text-white block truncate">
                {settings.advisorName}
              </span>
              <span className="text-[10px] text-slate-400 block truncate">
                {settings.advisorRole}
              </span>
            </div>
          </div>

          {/* Back to Public Website Button */}
          <button
            onClick={onNavigatePublic}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors border border-slate-700 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Public Website</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Content Wrapper */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-lg font-bold font-heading text-slate-900 capitalize leading-tight">
                {activeTab.replace('-', ' ')}
              </h2>
              <span className="text-xs text-slate-500 hidden sm:inline-block">
                Independent Home Loan Lead Advisory Management System
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={resetToDefaults}
              title="Reset Mock Leads & Data"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 border border-slate-300 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
              <span>Reset Mock Data</span>
            </button>

            <button
              onClick={onNavigatePublic}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-semibold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Public Site</span>
            </button>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-4 sm:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden backdrop-blur-xs"
        />
      )}
    </div>
  );
};
