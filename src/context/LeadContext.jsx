import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_LEADS,
  INITIAL_APPLICATIONS,
  INITIAL_FOLLOWUPS,
  INITIAL_CUSTOMERS
} from '../data/mockData';

const LeadContext = createContext();

const LEADS_STORAGE_KEY = 'homeloan_assist_leads_v2';
const APPS_STORAGE_KEY = 'homeloan_assist_apps_v2';
const FOLLOWUPS_STORAGE_KEY = 'homeloan_assist_followups_v2';
const CUSTOMERS_STORAGE_KEY = 'homeloan_assist_customers_v2';
const SETTINGS_STORAGE_KEY = 'homeloan_assist_settings_v2';

export const LeadProvider = ({ children }) => {
  // Leads state
  const [leads, setLeads] = useState(() => {
    try {
      const stored = localStorage.getItem(LEADS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : INITIAL_LEADS;
    } catch {
      return INITIAL_LEADS;
    }
  });

  // Applications Kanban state
  const [applications, setApplications] = useState(() => {
    try {
      const stored = localStorage.getItem(APPS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : INITIAL_APPLICATIONS;
    } catch {
      return INITIAL_APPLICATIONS;
    }
  });

  // Follow-ups state
  const [followups, setFollowups] = useState(() => {
    try {
      const stored = localStorage.getItem(FOLLOWUPS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : INITIAL_FOLLOWUPS;
    } catch {
      return INITIAL_FOLLOWUPS;
    }
  });

  // Customers state
  const [customers, setCustomers] = useState(() => {
    try {
      const stored = localStorage.getItem(CUSTOMERS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : INITIAL_CUSTOMERS;
    } catch {
      return INITIAL_CUSTOMERS;
    }
  });

  // Advisor & System Settings
  const [settings, setSettings] = useState(() => {
    try {
      const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {
        advisorName: "Vikram Kumar",
        advisorRole: "Home Loan Assistance Specialist",
        experience: "8+ Years",
        phone: "+91 98765 43210",
        whatsapp: "+91 98765 43210",
        email: "hello@homeloanassist.in",
        office: "Boring Road & Bailey Road Hub, Patna, Bihar",
        serviceAreas: "Patna • Siwan • Muzaffarpur • Gaya • Bihar",
        notificationAlerts: true,
        autoAssign: true
      };
    } catch {
      return {
        advisorName: "Vikram Kumar",
        advisorRole: "Home Loan Assistance Specialist",
        experience: "8+ Years",
        phone: "+91 98765 43210",
        whatsapp: "+91 98765 43210",
        email: "hello@homeloanassist.in",
        office: "Boring Road & Bailey Road Hub, Patna, Bihar",
        serviceAreas: "Patna • Siwan • Muzaffarpur • Gaya • Bihar",
        notificationAlerts: true,
        autoAssign: true
      };
    }
  });

  // Modal & Toast states
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
    } catch (e) {
      console.error(e);
    }
  }, [leads]);

  useEffect(() => {
    try {
      localStorage.setItem(APPS_STORAGE_KEY, JSON.stringify(applications));
    } catch (e) {
      console.error(e);
    }
  }, [applications]);

  useEffect(() => {
    try {
      localStorage.setItem(FOLLOWUPS_STORAGE_KEY, JSON.stringify(followups));
    } catch (e) {
      console.error(e);
    }
  }, [followups]);

  useEffect(() => {
    try {
      localStorage.setItem(CUSTOMERS_STORAGE_KEY, JSON.stringify(customers));
    } catch (e) {
      console.error(e);
    }
  }, [customers]);

  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error(e);
    }
  }, [settings]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const openLeadModal = (initial = null) => {
    setModalInitialData(initial);
    setIsLeadModalOpen(true);
  };

  const closeLeadModal = () => {
    setIsLeadModalOpen(false);
    setModalInitialData(null);
  };

  // Add new lead from public forms/calculators
  const addLead = (leadInput) => {
    const nextNumber = leads.length + 1001;
    const newId = `HL${nextNumber}`;
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newLead = {
      id: newId,
      name: leadInput.name || "Interested Applicant",
      mobile: leadInput.mobile || "+91 98000 00000",
      email: leadInput.email || `${(leadInput.name || 'lead').toLowerCase().replace(/\s+/g, '.')}@example.com`,
      city: leadInput.city || "Patna",
      employment: leadInput.employment || "Salaried",
      income: Number(leadInput.income) || 60000,
      loanAmount: Number(leadInput.loanAmount) || 3500000,
      existingEmi: Number(leadInput.existingEmi) || 0,
      loanType: leadInput.loanType || "Home Purchase Loan",
      propertyType: leadInput.propertyType || "Residential Property",
      status: "New",
      date: dateStr,
      time: timeStr,
      assignedTo: settings.advisorName || "Vikram Kumar",
      notes: [
        {
          id: 1,
          text: `Enquiry received from ${leadInput.source || 'Website Form'}. Required loan: ₹${(Number(leadInput.loanAmount) || 3500000).toLocaleString('en-IN')}.`,
          date: `${dateStr} ${timeStr}`,
          author: "System"
        }
      ],
      timeline: [
        { stage: "Enquiry Submitted", date: `${dateStr}, ${timeStr}`, completed: true },
        { stage: `Assigned to ${settings.advisorName}`, date: `${dateStr}, ${timeStr}`, completed: true },
        { stage: "First Contact Call", date: "Pending", completed: false }
      ]
    };

    // Update leads
    setLeads(prev => [newLead, ...prev]);

    // Create Kanban card
    const newApp = {
      id: `APP-${800 + leads.length + 1}`,
      customerName: newLead.name,
      leadId: newId,
      amount: `₹${(newLead.loanAmount).toLocaleString('en-IN')}`,
      city: newLead.city,
      stage: "New Lead",
      employment: newLead.employment,
      agent: newLead.assignedTo,
      lastUpdated: "Just Now",
      priority: newLead.loanAmount >= 5000000 ? "High" : "Medium"
    };
    setApplications(prev => [newApp, ...prev]);

    // Create Follow-up item
    const newFollowup = {
      id: `FUP-${followups.length + 10}`,
      customerName: newLead.name,
      leadId: newId,
      mobile: newLead.mobile,
      city: newLead.city,
      date: dateStr,
      time: "Within 2 Hours",
      status: "Due Today",
      note: `New web lead. Call to confirm requirement and check basic eligibility documents.`,
      type: "Call"
    };
    setFollowups(prev => [newFollowup, ...prev]);

    showToast(`Lead registered successfully! ID: ${newId}`);
    return newLead;
  };

  // Update lead status
  const updateLeadStatus = (leadId, newStatus) => {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setLeads(prev => prev.map(lead => {
      if (lead.id === leadId) {
        const updatedNotes = [
          ...lead.notes,
          {
            id: Date.now(),
            text: `Status updated to "${newStatus}"`,
            date: `${dateStr} ${timeStr}`,
            author: settings.advisorName
          }
        ];
        return {
          ...lead,
          status: newStatus,
          notes: updatedNotes
        };
      }
      return lead;
    }));

    // Also update corresponding application stage in Kanban
    const stageMap = {
      "New": "New Lead",
      "Contacted": "Contacted",
      "Follow-up": "Eligibility Checked",
      "Converted": "Approved",
      "Lost": "Closed"
    };
    const mappedStage = stageMap[newStatus];
    if (mappedStage) {
      setApplications(prev => prev.map(app => {
        if (app.leadId === leadId) {
          return { ...app, stage: mappedStage, lastUpdated: "Just Now" };
        }
        return app;
      }));
    }

    showToast(`Lead ${leadId} status changed to ${newStatus}`);
  };

  // Add note to lead
  const addLeadNote = (leadId, noteText) => {
    if (!noteText.trim()) return;
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setLeads(prev => prev.map(lead => {
      if (lead.id === leadId) {
        const newNote = {
          id: Date.now(),
          text: noteText.trim(),
          date: `${dateStr} ${timeStr}`,
          author: settings.advisorName
        };
        return {
          ...lead,
          notes: [newNote, ...lead.notes]
        };
      }
      return lead;
    }));

    showToast("Note added successfully");
  };

  // Move Kanban Stage
  const moveApplicationStage = (appId, newStage) => {
    setApplications(prev => prev.map(app => {
      if (app.id === appId) {
        return { ...app, stage: newStage, lastUpdated: "Just Now" };
      }
      return app;
    }));
    showToast(`Application moved to ${newStage}`);
  };

  // Toggle/Complete Follow-up
  const completeFollowup = (followupId) => {
    setFollowups(prev => prev.map(f => {
      if (f.id === followupId) {
        return {
          ...f,
          status: f.status === "Completed" ? "Upcoming" : "Completed"
        };
      }
      return f;
    }));
    showToast("Follow-up updated");
  };

  // Reset to initial mock data
  const resetToDefaults = () => {
    setLeads(INITIAL_LEADS);
    setApplications(INITIAL_APPLICATIONS);
    setFollowups(INITIAL_FOLLOWUPS);
    setCustomers(INITIAL_CUSTOMERS);
    localStorage.removeItem(LEADS_STORAGE_KEY);
    localStorage.removeItem(APPS_STORAGE_KEY);
    localStorage.removeItem(FOLLOWUPS_STORAGE_KEY);
    localStorage.removeItem(CUSTOMERS_STORAGE_KEY);
    showToast("Reset to initial mock database successfully");
  };

  return (
    <LeadContext.Provider
      value={{
        leads,
        applications,
        followups,
        customers,
        settings,
        setSettings,
        addLead,
        updateLeadStatus,
        addLeadNote,
        moveApplicationStage,
        completeFollowup,
        resetToDefaults,
        isLeadModalOpen,
        modalInitialData,
        openLeadModal,
        closeLeadModal,
        toastMessage,
        showToast
      }}
    >
      {children}
    </LeadContext.Provider>
  );
};

export const useLeadContext = () => useContext(LeadContext);
