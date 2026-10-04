import React, { useState } from 'react';
import { useLeadContext } from '../../context/LeadContext';
import { 
  Kanban, 
  ChevronRight, 
  ChevronLeft, 
  MapPin, 
  User, 
  IndianRupee, 
  Clock, 
  Sparkles,
  ArrowRight,
  Plus
} from 'lucide-react';

export const AdminApplications = () => {
  const { applications, moveApplicationStage, showToast } = useLeadContext();

  const stages = [
    'New Lead',
    'Contacted',
    'Eligibility Checked',
    'Documents Pending',
    'Application Submitted',
    'Under Process',
    'Approved',
    'Disbursed',
    'Closed'
  ];

  const stageColorMap = {
    'New Lead': 'border-t-blue-500',
    'Contacted': 'border-t-indigo-500',
    'Eligibility Checked': 'border-t-purple-500',
    'Documents Pending': 'border-t-amber-500',
    'Application Submitted': 'border-t-cyan-500',
    'Under Process': 'border-t-orange-500',
    'Approved': 'border-t-emerald-500',
    'Disbursed': 'border-t-green-600',
    'Closed': 'border-t-slate-400'
  };

  const handleMove = (appId, currentStage, direction) => {
    const currentIndex = stages.indexOf(currentStage);
    const targetIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (targetIndex >= 0 && targetIndex < stages.length) {
      moveApplicationStage(appId, stages[targetIndex]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            Applications Pipeline (Kanban)
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Track bank sanction progression across all 9 workflow milestones.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-800">{applications.length}</span> Active Applications
        </div>
      </div>

      {/* Horizontal Scrollable Kanban Columns */}
      <div className="overflow-x-auto pb-6">
        <div className="flex gap-4 min-w-[1700px] items-start">
          {stages.map((stage, sIdx) => {
            const stageApps = applications.filter((app) => app.stage === stage);

            return (
              <div
                key={stage}
                className="w-72 bg-slate-100/90 rounded-2xl p-3.5 border border-slate-200/90 shrink-0 shadow-xs flex flex-col max-h-[75vh]"
              >
                {/* Column Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-extrabold text-[10px] flex items-center justify-center">
                      {sIdx + 1}
                    </span>
                    <h3 className="font-bold text-xs font-heading text-slate-900 truncate max-w-[170px]" title={stage}>
                      {stage}
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-700 border border-slate-200">
                    {stageApps.length}
                  </span>
                </div>

                {/* Cards Container */}
                <div className="space-y-3 overflow-y-auto pr-1 flex-1">
                  {stageApps.map((app) => (
                    <div
                      key={app.id}
                      className={`bg-white rounded-xl p-3.5 border border-slate-200 shadow-xs border-t-4 ${stageColorMap[stage] || 'border-t-blue-500'} hover:shadow-md transition-all group`}
                    >
                      {/* Customer & ID */}
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-xs text-slate-900 leading-tight">
                            {app.customerName}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-400">
                            {app.leadId || app.id}
                          </span>
                        </div>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          app.priority === 'Urgent' ? 'bg-rose-100 text-rose-800' :
                          app.priority === 'High' ? 'bg-amber-100 text-amber-800' :
                          'bg-slate-100 text-slate-700'
                        }`}>
                          {app.priority}
                        </span>
                      </div>

                      {/* Financial info */}
                      <div className="space-y-1 text-[11px] mb-3">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500">Loan Amount:</span>
                          <span className="font-extrabold text-blue-700">{app.amount}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500">City / Hub:</span>
                          <span className="font-semibold text-slate-800">{app.city}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500">Employment:</span>
                          <span className="text-slate-600">{app.employment}</span>
                        </div>
                      </div>

                      {/* Footer & Stage Mover Buttons */}
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                        <span className="truncate max-w-[100px]" title={app.agent}>
                          By: {app.agent?.split(' ')[0]}
                        </span>

                        <div className="flex items-center gap-1">
                          {sIdx > 0 && (
                            <button
                              onClick={() => handleMove(app.id, stage, 'prev')}
                              title="Move to previous stage"
                              className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600"
                            >
                              <ChevronLeft className="w-3 h-3" />
                            </button>
                          )}
                          {sIdx < stages.length - 1 && (
                            <button
                              onClick={() => handleMove(app.id, stage, 'next')}
                              title="Move to next stage"
                              className="p-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold"
                            >
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {stageApps.length === 0 && (
                    <div className="text-center py-8 text-[11px] text-slate-400 border border-dashed border-slate-200 rounded-xl bg-white/50">
                      No applications
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
