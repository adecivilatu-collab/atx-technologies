import React, { useState } from 'react';
import { ShieldCheck, Check, Sparkles, LayoutDashboard, ArrowRight, UserCheck, Activity, BellRing, PhoneCall } from 'lucide-react';
import { PLATFORM_SERVICES, CLIENT_DEMO_ACCOUNT } from '../data/phase5Content';
import { COMPANY_INFO } from '../data/content';

export default function PlatformPortal() {
  const [activeTab, setActiveTab] = useState('pricing'); // 'pricing' or 'portal-demo'

  return (
    <section id="platform" className="py-20 md:py-28 bg-atx-navy relative border-t border-atx-navy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-atx-navy-card border border-atx-gold/30 text-atx-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Phase 5: Integrated Technology Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ongoing Engineering Retainers & Client Dashboard
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Beyond one-off project delivery. Partner with ATX Technologies for continuous software optimization, automation uptime, and managed cloud infrastructure.
          </p>

          {/* Tab Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-atx-navy-card border border-atx-navy-border">
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'pricing'
                  ? 'bg-atx-gold text-atx-navy-dark shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Managed Service Plans
            </button>
            <button
              onClick={() => setActiveTab('portal-demo')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'portal-demo'
                  ? 'bg-atx-gold text-atx-navy-dark shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Client Portal Preview
            </button>
          </div>
        </div>

        {/* Tab 1: Retainer Plans & Pricing */}
        {activeTab === 'pricing' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PLATFORM_SERVICES.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.recommended
                    ? 'bg-gradient-to-b from-atx-navy-card via-atx-navy to-atx-navy-card border-2 border-atx-gold shadow-2xl shadow-atx-gold/10'
                    : 'bg-atx-navy-card/70 border border-atx-navy-border hover:border-atx-gold/40'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-atx-gold text-atx-navy-dark text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                    Recommended Partner Plan
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-atx-gold">
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{plan.desc}</p>

                  <div className="mb-6 pb-6 border-b border-atx-navy-border/60">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-xs text-slate-400">/{plan.period}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Included Deliverables:</p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-atx-gold flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20ATX%20Technologies,%20I%20would%20like%20to%20discuss%20subscribing%20to%20the%20${encodeURIComponent(plan.name)}%20(${plan.price}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md ${
                      plan.recommended
                        ? 'text-atx-navy-dark bg-gradient-to-r from-atx-gold to-atx-gold-light hover:brightness-110'
                        : 'text-white bg-atx-navy-light hover:bg-atx-gold/20 border border-atx-gold/30 hover:border-atx-gold'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Client Portal Mockup & Demonstration */}
        {activeTab === 'portal-demo' && (
          <div className="max-w-5xl mx-auto rounded-2xl bg-atx-navy-card border border-atx-gold/40 p-6 sm:p-8 shadow-2xl">
            
            {/* Portal top bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-atx-navy-border gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-atx-gold/15 border border-atx-gold/30 flex items-center justify-center text-atx-gold">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>Client Portal Environment</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">LIVE METRICS</span>
                  </h3>
                  <p className="text-xs text-slate-400">Account: {CLIENT_DEMO_ACCOUNT.clientName}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20ATX%20Support,%20inquiring%20about%20Client%20Portal%20access.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-atx-gold bg-atx-gold/10 border border-atx-gold/30"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Priority Lead Line</span>
                </a>
              </div>
            </div>

            {/* Portal Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-atx-navy border border-atx-navy-border/70">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>System Uptime SLA</span>
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-black text-emerald-400">{CLIENT_DEMO_ACCOUNT.slaUptime}</div>
                <p className="text-[10px] text-slate-400 mt-1">Monitored 24/7 across 3 global regions</p>
              </div>

              <div className="p-4 rounded-xl bg-atx-navy border border-atx-navy-border/70">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>Inbound Leads Captured</span>
                  <BellRing className="w-4 h-4 text-atx-gold" />
                </div>
                <div className="text-2xl font-black text-white">{CLIENT_DEMO_ACCOUNT.leadsCapturedThisMonth}</div>
                <p className="text-[10px] text-slate-400 mt-1">Processed through WhatsApp & Web forms</p>
              </div>

              <div className="p-4 rounded-xl bg-atx-navy border border-atx-navy-border/70">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>Open Critical Incidents</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-black text-white">{CLIENT_DEMO_ACCOUNT.openTickets}</div>
                <p className="text-[10px] text-slate-400 mt-1">All pipelines and integrations healthy</p>
              </div>
            </div>

            {/* Active Deployments & Milestones */}
            <div className="p-5 rounded-xl bg-atx-navy/70 border border-atx-navy-border text-xs space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">Active Production Deployments:</span>
                <span className="text-emerald-400 font-semibold">{CLIENT_DEMO_ACCOUNT.projectStatus}</span>
              </div>
              <div className="text-slate-300">
                <strong className="text-atx-gold">Next Scheduled Milestone:</strong> {CLIENT_DEMO_ACCOUNT.nextMilestone}
              </div>
            </div>

            {/* Portal Callout */}
            <div className="p-4 rounded-xl bg-atx-gold/10 border border-atx-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <p className="text-xs font-bold text-white">Need a dedicated client account for your business?</p>
                <p className="text-[11px] text-slate-300">Retainer clients receive a real-time reporting dashboard with WhatsApp alerts and direct engineer access.</p>
              </div>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20ATX%20Technologies,%20I%20would%20like%20to%20set%20up%20a%20Managed%20Platform%20Retainer%20and%20Client%20Portal.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-atx-gold hover:bg-atx-gold-light transition-all flex-shrink-0"
              >
                <span>Request Client Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
