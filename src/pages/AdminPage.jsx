import React, { useState } from 'react';
import { AdminLayout } from '../components/admin/AdminLayout';
import { AdminDashboard } from '../components/admin/AdminDashboard';
import { AdminLeads } from '../components/admin/AdminLeads';
import { AdminApplications } from '../components/admin/AdminApplications';
import { AdminFollowups } from '../components/admin/AdminFollowups';
import { AdminCustomers } from '../components/admin/AdminCustomers';
import { AdminReports } from '../components/admin/AdminReports';
import { AdminSettings } from '../components/admin/AdminSettings';
import { AdminLeadDetailModal } from '../components/admin/AdminLeadDetailModal';

export const AdminPage = ({ onNavigatePublic }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedLead, setSelectedLead] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <AdminDashboard
            onSelectTab={setActiveTab}
            onOpenLeadDetail={(lead) => setSelectedLead(lead)}
          />
        );
      case 'leads':
        return <AdminLeads />;
      case 'applications':
        return <AdminApplications />;
      case 'follow-ups':
        return <AdminFollowups />;
      case 'customers':
        return <AdminCustomers />;
      case 'reports':
        return <AdminReports />;
      case 'settings':
        return <AdminSettings />;
      default:
        return (
          <AdminDashboard
            onSelectTab={setActiveTab}
            onOpenLeadDetail={(lead) => setSelectedLead(lead)}
          />
        );
    }
  };

  return (
    <AdminLayout
      activeTab={activeTab}
      onSelectTab={setActiveTab}
      onNavigatePublic={onNavigatePublic}
    >
      {renderContent()}

      {selectedLead && (
        <AdminLeadDetailModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
        />
      )}
    </AdminLayout>
  );
};
