import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  IndianRupee, 
  Percent, 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  FileSpreadsheet,
  ShieldCheck
} from 'lucide-react';
import { useLeadContext } from '../../context/LeadContext';

export const EmiCalculator = ({ isCardMode = false }) => {
  const { openLeadModal } = useLeadContext();

  const [loanAmount, setLoanAmount] = useState(3000000); // 30 Lakhs
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState(20); // 20 years
  const [showAmortization, setShowAmortization] = useState(false);

  // EMI Math Calculation
  const {
    monthlyEmi,
    totalInterest,
    totalPayment,
    principalPercent,
    interestPercent,
    yearlySchedule
  } = useMemo(() => {
    const P = Number(loanAmount);
    const annualR = Number(interestRate);
    const N = Number(tenureYears) * 12;

    if (P <= 0 || annualR <= 0 || N <= 0) {
      return {
        monthlyEmi: 0,
        totalInterest: 0,
        totalPayment: 0,
        principalPercent: 50,
        interestPercent: 50,
        yearlySchedule: []
      };
    }

    const r = (annualR / 12) / 100;
    const emi = Math.round((P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1));
    const totalPay = emi * N;
    const totalInt = Math.max(0, totalPay - P);

    const princPct = Math.round((P / totalPay) * 100) || 50;
    const intPct = 100 - princPct;

    // Build Amortization Schedule
    const schedule = [];
    let balance = P;

    for (let year = 1; year <= tenureYears; year++) {
      let annualPrincipal = 0;
      let annualInterest = 0;

      for (let m = 1; m <= 12; m++) {
        if (balance <= 0) break;
        const interestForMonth = balance * r;
        const principalForMonth = Math.min(balance, emi - interestForMonth);
        
        annualInterest += interestForMonth;
        annualPrincipal += principalForMonth;
        balance = Math.max(0, balance - principalForMonth);
      }

      schedule.push({
        year,
        annualEmi: emi * 12,
        annualPrincipal: Math.round(annualPrincipal),
        annualInterest: Math.round(annualInterest),
        closingBalance: Math.round(balance)
      });
    }

    return {
      monthlyEmi: emi,
      totalInterest: totalInt,
      totalPayment: totalPay,
      principalPercent: princPct,
      interestPercent: intPct,
      yearlySchedule: schedule
    };
  }, [loanAmount, interestRate, tenureYears]);

  const handleApplyAssistance = () => {
    openLeadModal({
      loanAmount: loanAmount,
      source: 'EMI Calculator',
      loanType: 'Home Purchase Loan'
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Real-Time Reducing Balance Formula</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">
              Home Loan EMI Calculator
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Plan your monthly budget, interest payout, and total loan cost with accuracy.
            </p>
          </div>

          <button
            onClick={handleApplyAssistance}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Get Assistance With This Loan</span>
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sliders Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Loan Amount */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-700">
                Loan Amount
              </label>
              <div className="relative">
                <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="number"
                  min="500000"
                  max="50000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-40 pl-8 pr-3 py-1.5 rounded-lg border border-slate-300 text-sm font-bold text-slate-900 text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <input
              type="range"
              min="500000"
              max="50000000"
              step="50000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>₹5 Lakh</span>
              <span>₹50 Lakh</span>
              <span>₹1 Crore</span>
              <span>₹5 Crore</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-700">
                Interest Rate (% p.a.)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="7.0"
                  max="15.0"
                  step="0.05"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-28 pr-7 pl-3 py-1.5 rounded-lg border border-slate-300 text-sm font-bold text-slate-900 text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Percent className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5" />
              </div>
            </div>
            <input
              type="range"
              min="7.0"
              max="15.0"
              step="0.05"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>7.0%</span>
              <span>8.5% (SBI Benchmark)</span>
              <span>11.0%</span>
              <span>15.0%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-700">
                Loan Tenure (Years)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-24 pr-8 pl-3 py-1.5 rounded-lg border border-slate-300 text-sm font-bold text-slate-900 text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-xs text-slate-400 absolute right-2.5 top-2.5 font-medium">Yrs</span>
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>5 Years</span>
              <span>15 Years</span>
              <span>20 Years</span>
              <span>30 Years</span>
            </div>
          </div>

          {/* Quick preset buttons */}
          <div className="pt-2">
            <span className="text-xs text-slate-500 font-semibold block mb-2">Popular Loan Presets:</span>
            <div className="flex flex-wrap gap-2">
              {[
                { label: '₹25L @ 8.5% (20Y)', amount: 2500000, rate: 8.5, tenure: 20 },
                { label: '₹35L @ 8.5% (25Y)', amount: 3500000, rate: 8.5, tenure: 25 },
                { label: '₹50L @ 8.5% (20Y)', amount: 5000000, rate: 8.5, tenure: 20 },
                { label: '₹75L @ 8.4% (30Y)', amount: 7500000, rate: 8.4, tenure: 30 }
              ].map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setLoanAmount(p.amount);
                    setInterestRate(p.rate);
                    setTenureYears(p.tenure);
                  }}
                  className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-medium border border-slate-200 transition-colors"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results & Interactive Donut Chart (5 cols) */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-6">
          {/* Monthly EMI Big Card */}
          <div className="text-center p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Equated Monthly Installment (EMI)
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-700 mt-1">
              ₹{monthlyEmi.toLocaleString('en-IN')}
              <span className="text-sm font-medium text-slate-500"> /month</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Based on reducing balance method at {interestRate}% for {tenureYears} years
            </p>
          </div>

          {/* Interactive SVG Donut Chart */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-44 h-44">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                {/* Background circle */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="3.8"
                />
                {/* Principal segment */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="3.8"
                  strokeDasharray={`${principalPercent}, 100`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
                {/* Interest segment */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="3.8"
                  strokeDasharray={`${interestPercent}, 100`}
                  strokeDashoffset={`-${principalPercent}`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-[11px] text-slate-400 font-semibold uppercase">Total Repayment</span>
                <span className="text-base font-bold text-slate-800">
                  ₹{(totalPayment / 100000).toFixed(2)}L
                </span>
              </div>
            </div>

            {/* Legend & Breakdown */}
            <div className="w-full mt-4 space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-600 shrink-0"></span>
                  <span className="text-slate-600 font-medium">Principal Amount</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-slate-900">₹{loanAmount.toLocaleString('en-IN')}</span>
                  <span className="text-[10px] text-slate-400 ml-1">({principalPercent}%)</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0"></span>
                  <span className="text-slate-600 font-medium">Total Interest</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-slate-900">₹{totalInterest.toLocaleString('en-IN')}</span>
                  <span className="text-[10px] text-slate-400 ml-1">({interestPercent}%)</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 font-semibold">
                <span>Total Amount Payable</span>
                <span className="font-bold">₹{totalPayment.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <button
            onClick={handleApplyAssistance}
            className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-sm shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Get Assistance With This Loan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Amortization Schedule Accordion */}
      <div className="border-t border-slate-200 bg-slate-50/50 p-6">
        <button
          onClick={() => setShowAmortization(!showAmortization)}
          className="w-full flex items-center justify-between text-left text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors"
        >
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-blue-600" />
            <span>View Year-by-Year Amortization Schedule ({tenureYears} Years)</span>
          </div>
          {showAmortization ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {showAmortization && (
          <div className="mt-4 overflow-x-auto border border-slate-200 rounded-xl bg-white animate-fade-in shadow-inner">
            <table className="min-w-full text-xs text-left divide-y divide-slate-200">
              <thead className="bg-slate-100 font-bold text-slate-700 uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-3">Year</th>
                  <th className="py-2.5 px-3">Annual EMI</th>
                  <th className="py-2.5 px-3 text-blue-700">Principal Paid</th>
                  <th className="py-2.5 px-3 text-amber-700">Interest Paid</th>
                  <th className="py-2.5 px-3">Closing Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600 font-medium">
                {yearlySchedule.map((row) => (
                  <tr key={row.year} className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-bold text-slate-900">Year {row.year}</td>
                    <td className="py-2 px-3">₹{row.annualEmi.toLocaleString('en-IN')}</td>
                    <td className="py-2 px-3 font-semibold text-blue-700">₹{row.annualPrincipal.toLocaleString('en-IN')}</td>
                    <td className="py-2 px-3 font-semibold text-amber-700">₹{row.annualInterest.toLocaleString('en-IN')}</td>
                    <td className="py-2 px-3 font-bold text-slate-800">₹{row.closingBalance.toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
