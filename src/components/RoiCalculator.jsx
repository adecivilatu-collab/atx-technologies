import React, { useState } from 'react';
import { Calculator, ArrowRight, Clock, DollarSign, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(5);
  const [hoursPerDay, setHoursPerDay] = useState(2.5);
  const [hourlyRate, setHourlyRate] = useState(3500); // in NGN or equivalent

  // Calculations
  const weeklyHoursLost = (teamSize * hoursPerDay * 5).toFixed(0);
  const monthlyCostLost = (weeklyHoursLost * 4.3 * hourlyRate).toLocaleString();
  const estimatedSavings = (weeklyHoursLost * 0.75).toFixed(0); // 75% automation capture
  const monthlySavings = (estimatedSavings * 4.3 * hourlyRate).toLocaleString();

  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-atx-navy-card to-atx-navy border border-atx-gold/40 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-atx-gold/15 border border-atx-gold/30 flex items-center justify-center text-atx-gold">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">AI Automation ROI Estimator</h3>
          <p className="text-xs text-slate-300">Quantify your team's weekly manual repetitive work & projected recovery</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Sliders Input */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
              <span>Team Members Performing Repetitive Tasks</span>
              <span className="text-atx-gold font-bold">{teamSize} people</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full accent-atx-gold h-2 bg-atx-navy-light rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
              <span>Hours Spent Daily Per Person (Repetitive Work)</span>
              <span className="text-atx-gold font-bold">{hoursPerDay} hrs / day</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="6"
              step="0.5"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(Number(e.target.value))}
              className="w-full accent-atx-gold h-2 bg-atx-navy-light rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
              <span>Avg Estimated Hourly Cost Per Person (₦)</span>
              <span className="text-atx-gold font-bold">₦{hourlyRate.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="15000"
              step="500"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full accent-atx-gold h-2 bg-atx-navy-light rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Results Card */}
        <div className="p-6 rounded-xl bg-atx-navy border border-atx-navy-border/80 text-center space-y-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Estimated Monthly Labor Tied Up
            </span>
            <div className="text-3xl font-black text-rose-300">
              ₦{monthlyCostLost}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Across ~{weeklyHoursLost} manual hours wasted every week</p>
          </div>

          <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Projected Monthly Savings with ATX Automation
            </span>
            <div className="text-2xl font-black text-emerald-400">
              ₦{monthlySavings}
            </div>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-300 mt-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Recovers approx. {estimatedSavings} productive hours / week</span>
            </div>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20ATX%20Technologies,%20our%20team%20estimated%20${estimatedSavings}%20hours/week%20lost%20on%20repetitive%20tasks%20via%20your%20ROI%20Calculator.%20I%20would%20like%20to%20discuss%20an%20automation%20solution.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-atx-gold hover:bg-atx-gold-light transition-all shadow-md"
          >
            <span>Consult on Automating This</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
