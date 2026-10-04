import React from 'react';
import { useLeadContext } from '../../context/LeadContext';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const Toast = () => {
  const { toastMessage } = useLeadContext();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-50 animate-fade-in pointer-events-none">
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900 text-white text-xs font-semibold shadow-2xl border border-slate-700 pointer-events-auto">
        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5" />
        </div>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};
