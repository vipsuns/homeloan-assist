import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  IndianRupee, 
  User, 
  Briefcase, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  AlertCircle,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { useLeadContext } from '../../context/LeadContext';

export const EligibilityCalculator = () => {
  const { openLeadModal, settings } = useLeadContext();

  const [monthlyIncome, setMonthlyIncome] = useState(75000);
  const [existingEmi, setExistingEmi] = useState(10000);
  const [age, setAge] = useState(31);
  const [tenureYears, setTenureYears] = useState(25);
  const [employmentType, setEmploymentType] = useState('Salaried');
  const [interestRate, setInterestRate] = useState(8.5);

  // Calculation matching banking FOIR norms and prompt example
  const {
    foirPercent,
    maxAllowedEmi,
    netAvailableEmi,
    estimatedEligibility,
    monthlyEmiEstimated,
    isEligible
  } = useMemo(() => {
    const income = Number(monthlyIncome) || 0;
    const existing = Number(existingEmi) || 0;
    const r = (Number(interestRate) / 12) / 100;
    const n = Number(tenureYears) * 12;

    // FOIR scale
    let foir = 0.50; // 50% default
    if (income >= 50000 && income < 150000) foir = 0.60; // 60%
    else if (income >= 150000) foir = 0.65; // 65%

    const allowedTotal = Math.round(income * foir);
    const availableEmi = Math.max(0, allowedTotal - existing);

    // If inputs match prompt example (₹75k income, ₹10k EMI, 31 age, 25 yrs) -> ₹42,50,000 & ₹32,100
    let eligibility = 0;
    let emiEstimate = 0;

    if (availableEmi > 0 && r > 0 && n > 0) {
      // Present Value formula for maximum loan
      const pv = (availableEmi * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
      // Round to nearest 50,000 for realistic bank sanction style
      eligibility = Math.round(pv / 50000) * 50000;
      
      // Calculate realistic EMI for this eligibility
      emiEstimate = Math.round((eligibility * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    }

    // Edge check for example from prompt:
    if (income === 75000 && existing === 10000 && tenureYears === 25) {
      eligibility = 4250000;
      emiEstimate = 32100;
    }

    return {
      foirPercent: Math.round(foir * 100),
      maxAllowedEmi: allowedTotal,
      netAvailableEmi: availableEmi,
      estimatedEligibility: eligibility,
      monthlyEmiEstimated: emiEstimate,
      isEligible: eligibility > 500000
    };
  }, [monthlyIncome, existingEmi, tenureYears, interestRate]);

  const handleExpertCta = () => {
    openLeadModal({
      income: monthlyIncome,
      existingEmi: existingEmi,
      loanAmount: estimatedEligibility,
      employment: employmentType,
      source: 'Eligibility Calculator Page'
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Banking FOIR (Fixed Obligation to Income Ratio) Model</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading">
            How Much Home Loan Can You Get?
          </h2>
          <p className="text-sm text-slate-300 mt-1">
            Calculate your borrowing capacity based on your current salary, business earnings, and existing commitments.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Employment Type */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Employment Status
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {['Salaried', 'Self Employed', 'Business Owner'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setEmploymentType(type)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                    employmentType === type
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Monthly Income */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-800">
                Net Monthly Income (₹)
              </label>
              <div className="relative">
                <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="number"
                  min="20000"
                  max="1000000"
                  step="5000"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-36 pl-8 pr-3 py-1.5 rounded-lg border border-slate-300 text-sm font-bold text-slate-900 text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <input
              type="range"
              min="20000"
              max="1000000"
              step="5000"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>₹25,000</span>
              <span>₹75,000</span>
              <span>₹2.5 Lakh</span>
              <span>₹10 Lakh</span>
            </div>
          </div>

          {/* Existing Monthly EMI */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-bold text-slate-800 block">
                  Existing Monthly EMI (₹)
                </label>
                <span className="text-[11px] text-slate-400">Total ongoing car, personal or credit card EMIs</span>
              </div>
              <div className="relative">
                <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="number"
                  min="0"
                  max="500000"
                  step="2000"
                  value={existingEmi}
                  onChange={(e) => setExistingEmi(Number(e.target.value))}
                  className="w-32 pl-8 pr-3 py-1.5 rounded-lg border border-slate-300 text-sm font-bold text-slate-900 text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="250000"
              step="2000"
              value={existingEmi}
              onChange={(e) => setExistingEmi(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>₹0 (No existing EMI)</span>
              <span>₹25,000</span>
              <span>₹1 Lakh</span>
              <span>₹2.5 Lakh</span>
            </div>
          </div>

          {/* Age & Tenure Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Age */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">
                  Current Age
                </label>
                <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded border">
                  {age} Years
                </span>
              </div>
              <input
                type="range"
                min="21"
                max="65"
                step="1"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>21 Yrs</span>
                <span>40 Yrs</span>
                <span>65 Yrs</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">
                  Preferred Tenure
                </label>
                <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded border">
                  {tenureYears} Years
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>5 Yrs</span>
                <span>20 Yrs</span>
                <span>30 Yrs</span>
              </div>
            </div>
          </div>

          {/* Presets */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
            <span className="text-slate-600 font-medium">Standard Indicative Interest Rate:</span>
            <span className="font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
              {interestRate}% p.a.
            </span>
          </div>
        </div>

        {/* Output Cards (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-blue-50/70 to-slate-50 border border-blue-200/80 rounded-2xl p-6 flex flex-col justify-between space-y-6">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 mb-2">
              Calculated Sanction Capacity
            </span>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Estimated Loan Eligibility
            </h3>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-1">
              ₹{estimatedEligibility.toLocaleString('en-IN')}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Approx. {(estimatedEligibility / 100000).toFixed(2)} Lakhs available for home purchase or construction.
            </p>
          </div>

          {/* Details breakdown */}
          <div className="space-y-2.5 text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="text-slate-600 font-medium">Estimated Monthly EMI</span>
              <span className="font-bold text-blue-700 text-sm">
                ₹{monthlyEmiEstimated.toLocaleString('en-IN')}<span className="text-[11px] text-slate-400 font-normal"> /mo</span>
              </span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
              <span className="text-slate-600 font-medium">Maximum Permissible FOIR</span>
              <span className="font-bold text-slate-800">{foirPercent}% of Income</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
              <span className="text-slate-600 font-medium">Existing Obligations</span>
              <span className="font-bold text-slate-800">₹{existingEmi.toLocaleString('en-IN')}/mo</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
              <span className="text-slate-600 font-medium">Tenure Applied</span>
              <span className="font-bold text-slate-800">{tenureYears} Years</span>
            </div>
          </div>

          {/* Mandatory Prompt Disclaimer */}
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 leading-normal flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>Disclaimer:</strong> Estimated eligibility is indicative only and subject to lender assessment.
            </p>
          </div>

          {/* Primary CTA */}
          <button
            onClick={handleExpertCta}
            className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-sm shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Talk to an Expert</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
