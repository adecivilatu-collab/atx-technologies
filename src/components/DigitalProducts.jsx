import React, { useState } from 'react';
import { Cpu, Download, ArrowUpRight, CheckCircle, Zap, ShieldCheck, Layers, Sparkles } from 'lucide-react';
import { DIGITAL_TOOLS } from '../data/phase3Content';
import { COMPANY_INFO } from '../data/content';
import RoiCalculator from './RoiCalculator';

export default function DigitalProducts() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadBlueprint = () => {
    // Generate a structured markdown / text blueprint for download
    const blueprintContent = `ATX TECHNOLOGIES — AUTOMATION BLUEPRINT
Title: Smart WhatsApp Lead Intake & Qualification Pipeline
Architecture: WhatsApp Business Webhook -> ATX Automated Qualification Engine -> Google Sheets / CRM Sync -> Sales Team Telegram/WhatsApp Alert

1. TRIGGER
- Customer initiates chat on WhatsApp (+234 815 088 2291).
- Automated webhook triggers ATX Assistant intake state machine.

2. QUALIFICATION FLOW
- Question 1: Nature of project (AI & Automation, Web Development, IT Consulting, Training).
- Question 2: Estimated timeline (Immediate, 1-3 months, Exploratory).
- Question 3: Organization name & contact email.

3. DATA SYNCHRONIZATION
- Lead details are structured as JSON.
- Appended to primary business CRM / Google Sheets.
- Notification webhook dispatched to account executive.

4. HANDOFF
- High-intent leads receive automated scheduler link or immediate rep transfer.

Prepared by ATX Technologies (Advanced Technology Xcellence)
Website: https://atxtechnologies.com | WhatsApp: +234 815 088 2291
`;
    const element = document.createElement("a");
    const file = new Blob([blueprintContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "ATX-WhatsApp-Lead-Intake-Blueprint.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  return (
    <section id="digital-products" className="py-20 md:py-28 bg-atx-navy relative border-t border-atx-navy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-atx-gold mb-3">Phase 3: Digital Products & AI Tools</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Proprietary Tools & Enterprise Automation Blueprints
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Explore ready-to-deploy blueprints, interactive calculators, and specialized AI utilities engineered to accelerate business operations.
          </p>
        </div>

        {/* 1. Interactive ROI Estimator Tool */}
        <div className="mb-16">
          <RoiCalculator />
        </div>

        {/* 2. Automation Blueprints & Digital Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* WhatsApp Lead Intake Blueprint */}
          <div className="rounded-2xl bg-atx-navy-card border border-atx-navy-border hover:border-atx-gold/50 transition-all p-7 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Ready to Deploy
                </span>
                <Cpu className="w-5 h-5 text-atx-gold" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Smart WhatsApp Lead Intake Pipeline</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Complete pre-engineered pipeline specification to capture, qualify, and sync incoming WhatsApp inquiries directly with your team's CRM.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-atx-gold" />
                  <span>24/7 Automated qualification</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-atx-gold" />
                  <span>Google Sheets / CRM webhook sync</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-atx-gold" />
                  <span>Instant escalation for urgent deals</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-atx-navy-border/60">
              <button
                onClick={handleDownloadBlueprint}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-atx-gold hover:bg-atx-gold-light transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Free Spec Blueprint</span>
              </button>
              {downloadSuccess && (
                <p className="text-[11px] text-center text-emerald-400 font-semibold animate-pulse">
                  ✓ Blueprint downloaded successfully!
                </p>
              )}
            </div>
          </div>

          {/* Enterprise Knowledge AI Assistant */}
          <div className="rounded-2xl bg-atx-navy-card border border-atx-navy-border hover:border-atx-gold/50 transition-all p-7 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Proprietary AI Agent
                </span>
                <Layers className="w-5 h-5 text-atx-gold" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Internal Enterprise Knowledge Assistant</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Bespoke RAG assistant trained on internal manuals, contracts, SOPs, and product sheets so staff get instant answers in seconds.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-atx-gold" />
                  <span>Private & air-gapped data architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-atx-gold" />
                  <span>PDF, Word, Notion & SQL document parsing</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-atx-gold" />
                  <span>Role-based access permissions</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-atx-navy-border/60">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20ATX%20Technologies,%20I%20am%20interested%20in%20a%20custom%20Enterprise%20Knowledge%20Base%20AI%20Assistant%20for%20our%20organization.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-atx-navy-light hover:bg-atx-gold/20 border border-atx-gold/30 hover:border-atx-gold transition-all"
              >
                <span>Request Custom Deployment</span>
                <ArrowUpRight className="w-4 h-4 text-atx-gold" />
              </a>
            </div>
          </div>

          {/* Cloud Transformation Blueprint */}
          <div className="rounded-2xl bg-atx-navy-card border border-atx-navy-border hover:border-atx-gold/50 transition-all p-7 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  IT Audit Blueprint
                </span>
                <ShieldCheck className="w-5 h-5 text-atx-gold" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Systems & SaaS Optimization Audit</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Comprehensive audit template to pinpoint redundant software subscriptions, eliminate data silos, and cut unnecessary monthly SaaS expenses.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-atx-gold" />
                  <span>SaaS spend consolidation plan</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-atx-gold" />
                  <span>Legacy workflow bottleneck identification</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-atx-gold" />
                  <span>Phased modernization roadmap</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-atx-navy-border/60">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20ATX%20Technologies,%20I%20would%20like%20to%20book%20a%20Systems%20and%20SaaS%20Optimization%20Audit%20for%20our%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-atx-navy-light hover:bg-atx-gold/20 border border-atx-gold/30 hover:border-atx-gold transition-all"
              >
                <span>Book Infrastructure Audit</span>
                <ArrowUpRight className="w-4 h-4 text-atx-gold" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
