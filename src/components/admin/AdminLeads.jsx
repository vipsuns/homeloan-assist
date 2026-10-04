import React, { useState, useMemo } from 'react';
import { useLeadContext } from '../../context/LeadContext';
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  Eye, 
  Phone, 
  MessageCircle, 
  UserPlus, 
  ChevronLeft, 
  ChevronRight,
  Download,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { AdminLeadDetailModal } from './AdminLeadDetailModal';

export const AdminLeads = () => {
  const { leads, updateLeadStatus, addLead, settings, showToast } = useLeadContext();

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [cityFilter, setCityFilter] = useState('All');
  const [employmentFilter, setEmploymentFilter] = useState('All');
  const [amountFilter, setAmountFilter] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Selected lead for detail modal
  const [selectedLead, setSelectedLead] = useState(null);

  // Manual Add Lead Modal state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState({
    name: '',
    mobile: '',
    city: 'Patna',
    employment: 'Salaried',
    income: '75000',
    loanAmount: '3500000',
    loanType: 'Home Purchase Loan'
  });

  // Filter & Sort Logic
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch = 
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.mobile.includes(searchTerm) ||
        lead.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.city.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
      const matchesCity = cityFilter === 'All' || lead.city === cityFilter;
      const matchesEmp = employmentFilter === 'All' || lead.employment === employmentFilter;

      let matchesAmount = true;
      if (amountFilter === '<30L') matchesAmount = lead.loanAmount < 3000000;
      else if (amountFilter === '30L-50L') matchesAmount = lead.loanAmount >= 3000000 && lead.loanAmount <= 5000000;
      else if (amountFilter === '50L-80L') matchesAmount = lead.loanAmount > 5000000 && lead.loanAmount <= 8000000;
      else if (amountFilter === '>80L') matchesAmount = lead.loanAmount > 8000000;

      return matchesSearch && matchesStatus && matchesCity && matchesEmp && matchesAmount;
    }).sort((a, b) => {
      if (sortBy === 'newest') return b.id.localeCompare(a.id);
      if (sortBy === 'oldest') return a.id.localeCompare(b.id);
      if (sortBy === 'amount-high') return b.loanAmount - a.loanAmount;
      if (sortBy === 'amount-low') return a.loanAmount - b.loanAmount;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [leads, searchTerm, statusFilter, cityFilter, employmentFilter, amountFilter, sortBy]);

  // Pagination Slice
  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage) || 1;
  const paginatedLeads = filteredLeads.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleExportCSV = () => {
    showToast(`Exported ${filteredLeads.length} leads to CSV (Mock Demo)`);
  };

  const handleManualAddSubmit = (e) => {
    e.preventDefault();
    if (!newLeadForm.name.trim() || !newLeadForm.mobile.trim()) {
      showToast("Name and Mobile are required");
      return;
    }
    addLead({
      ...newLeadForm,
      income: Number(newLeadForm.income),
      loanAmount: Number(newLeadForm.loanAmount),
      source: 'Admin CRM Manual Entry'
    });
    setIsAddOpen(false);
    setNewLeadForm({
      name: '',
      mobile: '',
      city: 'Patna',
      employment: 'Salaried',
      income: '75000',
      loanAmount: '3500000',
      loanType: 'Home Purchase Loan'
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Leads Directory
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage, filter, contact, and progress home-loan applicant records.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 shadow-xs transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={() => setIsAddOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/30 transition-all cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            <span>Add New Lead</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3.5">
        {/* Search row */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by ID, borrower name, phone number, or city..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="sm:col-span-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="newest">Sort: Newest First</option>
              <option value="oldest">Sort: Oldest First</option>
              <option value="amount-high">Sort: Loan Amount (High to Low)</option>
              <option value="amount-low">Sort: Loan Amount (Low to High)</option>
              <option value="name">Sort: Borrower Name (A-Z)</option>
            </select>
          </div>

          <div className="sm:col-span-3 text-right">
            <span className="text-xs text-slate-500 font-medium">
              Showing <strong>{filteredLeads.length}</strong> matching records
            </span>
          </div>
        </div>

        {/* Filter Chips / Dropdowns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-100">
          {/* Status Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Converted">Converted</option>
              <option value="Lost">Lost</option>
            </select>
          </div>

          {/* City Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              City
            </label>
            <select
              value={cityFilter}
              onChange={(e) => { setCityFilter(e.target.value); setCurrentPage(1); }}
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="All">All Cities</option>
              <option value="Patna">Patna</option>
              <option value="Siwan">Siwan</option>
              <option value="Muzaffarpur">Muzaffarpur</option>
              <option value="Gaya">Gaya</option>
              <option value="Darbhanga">Darbhanga</option>
              <option value="Bihar Sharif">Bihar Sharif</option>
              <option value="Delhi">Delhi</option>
              <option value="Noida">Noida</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Ranchi">Ranchi</option>
            </select>
          </div>

          {/* Employment Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Employment
            </label>
            <select
              value={employmentFilter}
              onChange={(e) => { setEmploymentFilter(e.target.value); setCurrentPage(1); }}
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="All">All Employment</option>
              <option value="Salaried">Salaried</option>
              <option value="Self Employed">Self Employed</option>
              <option value="Business Owner">Business Owner</option>
              <option value="Professional">Professional</option>
            </select>
          </div>

          {/* Loan Amount Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Loan Amount Range
            </label>
            <select
              value={amountFilter}
              onChange={(e) => { setAmountFilter(e.target.value); setCurrentPage(1); }}
              className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="All">All Ticket Sizes</option>
              <option value="<30L">&lt; ₹30 Lakhs</option>
              <option value="30L-50L">₹30L – ₹50 Lakhs</option>
              <option value="50L-80L">₹50L – ₹80 Lakhs</option>
              <option value=">80L">&gt; ₹80 Lakhs</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left divide-y divide-slate-200">
            <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-3.5">Lead ID</th>
                <th className="py-3 px-3.5">Borrower Name</th>
                <th className="py-3 px-3.5">Mobile</th>
                <th className="py-3 px-3.5">City</th>
                <th className="py-3 px-3.5">Employment</th>
                <th className="py-3 px-3.5">Monthly Income</th>
                <th className="py-3 px-3.5">Required Loan</th>
                <th className="py-3 px-3.5">Status</th>
                <th className="py-3 px-3.5">Date</th>
                <th className="py-3 px-3.5">Assigned To</th>
                <th className="py-3 px-3.5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {paginatedLeads.map((lead) => {
                const cleanPhone = lead.mobile.replace(/[^0-9+]/g, '');
                return (
                  <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* ID */}
                    <td className="py-3 px-3.5 font-mono font-bold text-blue-700">
                      {lead.id}
                    </td>

                    {/* Name */}
                    <td className="py-3 px-3.5 font-bold text-slate-900 whitespace-nowrap">
                      {lead.name}
                    </td>

                    {/* Mobile */}
                    <td className="py-3 px-3.5 font-mono text-slate-600 whitespace-nowrap">
                      {lead.mobile}
                    </td>

                    {/* City */}
                    <td className="py-3 px-3.5 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-semibold">
                        {lead.city}
                      </span>
                    </td>

                    {/* Employment */}
                    <td className="py-3 px-3.5 whitespace-nowrap">
                      {lead.employment}
                    </td>

                    {/* Income */}
                    <td className="py-3 px-3.5 font-semibold text-slate-900 whitespace-nowrap">
                      ₹{lead.income ? lead.income.toLocaleString('en-IN') : '65,000'}
                    </td>

                    {/* Loan Amount */}
                    <td className="py-3 px-3.5 font-extrabold text-blue-700 whitespace-nowrap">
                      ₹{(lead.loanAmount / 100000).toFixed(1)}L
                    </td>

                    {/* Status with quick change dropdown */}
                    <td className="py-3 px-3.5 whitespace-nowrap">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                        className={`text-[11px] font-bold px-2 py-1 rounded-full border cursor-pointer focus:outline-none ${
                          lead.status === 'New' ? 'bg-amber-50 text-amber-800 border-amber-300' :
                          lead.status === 'Contacted' ? 'bg-blue-50 text-blue-800 border-blue-300' :
                          lead.status === 'Follow-up' ? 'bg-purple-50 text-purple-800 border-purple-300' :
                          lead.status === 'Converted' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' :
                          'bg-slate-100 text-slate-700 border-slate-300'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Follow-up">Follow-up</option>
                        <option value="Converted">Converted</option>
                        <option value="Lost">Lost</option>
                      </select>
                    </td>

                    {/* Date */}
                    <td className="py-3 px-3.5 text-slate-500 whitespace-nowrap">
                      {lead.date}
                    </td>

                    {/* Assigned To */}
                    <td className="py-3 px-3.5 whitespace-nowrap text-slate-600">
                      {lead.assignedTo}
                    </td>

                    {/* Actions: View, Call, WhatsApp */}
                    <td className="py-3 px-3.5 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          title="View Full Profile & Notes"
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={`tel:${cleanPhone}`}
                          title="Call Lead"
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-700 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href={`https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(
                            `Hello ${lead.name}, Vikram here from HomeLoan Assist.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="WhatsApp Chat"
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-700 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {paginatedLeads.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm">
              No leads found matching current search and filters.
            </div>
          )}
        </div>

        {/* Pagination Bar */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div>
            Showing <strong>{((currentPage - 1) * itemsPerPage) + 1}</strong> to <strong>{Math.min(currentPage * itemsPerPage, filteredLeads.length)}</strong> of <strong>{filteredLeads.length}</strong> leads
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg border border-slate-300 bg-white disabled:opacity-40 hover:bg-slate-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                  currentPage === i + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg border border-slate-300 bg-white disabled:opacity-40 hover:bg-slate-100"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedLead && (
        <AdminLeadDetailModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
        />
      )}

      {/* Manual Add Lead Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-heading text-slate-900">
                Manually Add New Lead
              </h3>
              <button onClick={() => setIsAddOpen(false)} className="text-slate-400 hover:text-slate-700">
                ✕
              </button>
            </div>

            <form onSubmit={handleManualAddSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Borrower Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={newLeadForm.name}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Mobile Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98350 00000"
                  value={newLeadForm.mobile}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, mobile: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">City</label>
                  <select
                    value={newLeadForm.city}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, city: e.target.value })}
                    className="w-full px-2.5 py-2 rounded-xl border border-slate-300 text-xs bg-white"
                  >
                    <option value="Patna">Patna</option>
                    <option value="Siwan">Siwan</option>
                    <option value="Muzaffarpur">Muzaffarpur</option>
                    <option value="Gaya">Gaya</option>
                    <option value="Darbhanga">Darbhanga</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Employment</label>
                  <select
                    value={newLeadForm.employment}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, employment: e.target.value })}
                    className="w-full px-2.5 py-2 rounded-xl border border-slate-300 text-xs bg-white"
                  >
                    <option value="Salaried">Salaried</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Business Owner">Business Owner</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Net Income (₹)</label>
                  <input
                    type="number"
                    value={newLeadForm.income}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, income: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Loan Amount (₹)</label>
                  <input
                    type="number"
                    value={newLeadForm.loanAmount}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, loanAmount: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                  />
                </div>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
                >
                  Create Lead
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
