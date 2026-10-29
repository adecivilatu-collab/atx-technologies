import React, { useState } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Zap, 
  Layers, 
  MessageSquare,
  RefreshCw,
  Send,
  X,
  Star,
  ShieldCheck,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

const DEMOS = [
  {
    id: 'business-site',
    category: 'Corporate & SME',
    title: 'Modern Business Website',
    tagline: 'Built for enterprise credibility and qualified client inquiries',
    simulatedUrl: 'https://vanguard-logistics.com.ng',
    speed: '0.7s',
    lighthouse: '99',
    conversionFocus: 'Lead Capture & Service Authority',
    previewContent: {
      navTitle: 'VANGUARD LOGISTICS',
      badge: 'Certified West African Freight & Haulage',
      headline: 'Seamless Logistics for West Africa\'s Fastest Growing Businesses',
      subtext: 'End-to-end freight clearing, cold chain supply, and nationwide distribution managed with real-time GPS tracking.',
      cta: 'Request Freight Quote',
      features: [
        { label: 'Real-Time Telematics', desc: 'Continuous satellite cargo visibility' },
        { label: 'Sub-48hr Clearing', desc: 'Dedicated port clearance team' },
        { label: 'Full Transit Insurance', desc: 'Comprehensive goods protection' }
      ],
      clientTrust: 'Trusted by over 140+ manufacturing and distribution brands.',
      testimonial: '"ATX redesigned our web infrastructure and increased our corporate client inquiries by 240% in 60 days." — MD, Vanguard Logistics'
    }
  },
  {
    id: 'landing-page',
    category: 'Sales & Conversion',
    title: 'High-Converting Landing Page',
    tagline: 'Single-page conversion engine engineered for ad campaigns & product launches',
    simulatedUrl: 'https://propelsaas.io/launch',
    speed: '0.6s',
    lighthouse: '100',
    conversionFocus: 'Instant Lead Generation & High CTR',
    previewContent: {
      navTitle: 'PROPEL SAAS',
      badge: 'Limited Early Access • Phase 1 Launch',
      headline: 'Cut Manual Reporting in Half and Double Team Productivity',
      subtext: 'The all-in-one operational intelligence dashboard built specifically for African startups, agencies, and tech founders.',
      cta: 'Claim Free 14-Day Pilot',
      features: [
        { label: 'Instant Integrations', desc: 'Connects with Paystack, Slack & Sheets' },
        { label: 'Automated Invoicing', desc: 'Cut billing disputes down to zero' },
        { label: 'Smart Forecasting', desc: 'Predict monthly revenue churn' }
      ],
      clientTrust: 'Over 2,400 beta signups recorded in 30 days.',
      testimonial: '"Our Google ad conversion rate jumped from 3.2% to 11.4% with this landing page layout." — Growth Lead, Propel'
    }
  },
  {
    id: 'portfolio-site',
    category: 'Personal Brand',
    title: 'Executive Portfolio Website',
    tagline: 'Sleek, minimalist digital portfolio for founders, executives & creators',
    simulatedUrl: 'https://alexander-adeyemi.com',
    speed: '0.5s',
    lighthouse: '100',
    conversionFocus: 'Personal Authority & Speaking/Consulting Inquiries',
    previewContent: {
      navTitle: 'A. ADEYEMI',
      badge: 'Fintech Strategist & Angel Investor',
      headline: 'Advising High-Growth African Ventures from Seed to Series B',
      subtext: '12+ years building regulated fintech infrastructure, cross-border remittance channels, and advising top tier boards.',
      cta: 'Book Advisory Session',
      features: [
        { label: '14 Board Positions', desc: 'Active strategic governance' },
        { label: '$24M+ Raised', desc: 'Syndicated venture funding advised' },
        { label: 'Keynote Speaker', desc: 'Techpoint, Africa Tech Summit & Afrexim' }
      ],
      clientTrust: 'Featured in TechCabal, BusinessDay, and Quartz Africa.',
      testimonial: '"Having this sleek portfolio established instant credibility when closing advisory and speaking contracts across EMEA."'
    }
  },
  {
    id: 'ai-bot-demo',
    category: 'AI & Automation',
    title: 'Interactive AI Lead Assistant',
    tagline: '24/7 automated chatbot that qualifies leads and hands over to WhatsApp',
    simulatedUrl: 'https://atx-assistant.live',
    speed: '0.3s',
    lighthouse: '99',
    conversionFocus: 'Automated 24/7 Lead Qualification',
    isBotSimulation: true
  }
];

export default function LiveDemoStudio({ isModalOpen, onCloseModal }) {
  const [activeDemoId, setActiveDemoId] = useState('business-site');
  const [deviceMode, setDeviceMode] = useState('desktop');
  const [simulatedBotStep, setSimulatedBotStep] = useState(0);
  const [buttonFeedback, setButtonFeedback] = useState('');

  const activeDemo = DEMOS.find((d) => d.id === activeDemoId) || DEMOS[0];

  const botDialogue = [
    { sender: 'bot', text: 'Hello! I am Vanguard Logistics 24/7 Assistant. Are you inquiring about nationwide haulage or seaport freight clearance?' },
    { sender: 'user', text: 'I need seaport clearance for two 40ft containers arriving at Apapa Port.' },
    { sender: 'bot', text: 'Understood! Our Apapa clearance team operates sub-48hr turnaround with guaranteed customs clearance. Would you like our specialist to send an itemized quote to your WhatsApp?' }
  ];

  const handleSimulatedClick = (actionName) => {
    setButtonFeedback(`✓ Interactive Demo Triggered: "${actionName}". In a live build, this converts directly into WhatsApp or checkout!`);
    setTimeout(() => setButtonFeedback(''), 4500);
  };

  const renderStudioContent = (inModal = false) => (
    <div className="w-full">
      {/* Demo Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {DEMOS.map((demo) => {
          const isSelected = demo.id === activeDemoId;
          return (
            <button
              key={demo.id}
              onClick={() => {
                setActiveDemoId(demo.id);
                setSimulatedBotStep(0);
                setButtonFeedback('');
              }}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border flex items-center gap-2 ${
                isSelected
                  ? 'bg-gradient-to-r from-atx-gold to-atx-gold-light text-atx-navy-dark border-atx-gold shadow-lg shadow-atx-gold/20 scale-105'
                  : 'bg-atx-navy-card text-slate-300 border-atx-navy-border hover:border-atx-gold/40 hover:text-white'
              }`}
            >
              <span>{demo.title}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                isSelected ? 'bg-atx-navy-dark text-atx-gold font-bold' : 'bg-atx-navy text-slate-400'
              }`}>
                {demo.category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Device Mode Switcher & Real-time Metrics Bar */}
      <div className="bg-atx-navy-card/90 border border-atx-navy-border rounded-xl p-3 sm:p-4 mb-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Viewport switch */}
        <div className="flex items-center gap-1.5 bg-atx-navy p-1 rounded-xl border border-atx-navy-border">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              deviceMode === 'desktop'
                ? 'bg-atx-gold text-atx-navy-dark shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop Mode</span>
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              deviceMode === 'mobile'
                ? 'bg-atx-gold text-atx-navy-dark shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Phone View</span>
          </button>
        </div>

        {/* Performance Metrics */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1 text-slate-300">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Speed: <strong className="text-white">{activeDemo.speed}</strong></span>
          </div>
          <div className="flex items-center gap-1 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-atx-gold" />
            <span>Lighthouse: <strong className="text-atx-gold">{activeDemo.lighthouse}/100</strong></span>
          </div>
          <div className="hidden md:flex items-center gap-1 text-slate-300">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>{activeDemo.conversionFocus}</span>
          </div>
        </div>
      </div>

      {buttonFeedback && (
        <div className="mb-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs text-center font-medium animate-in fade-in">
          {buttonFeedback}
        </div>
      )}

      {/* Simulated Browser Device Frame */}
      <div className="flex justify-center transition-all duration-300">
        <div
          className={`w-full bg-atx-navy-card rounded-2xl border-2 border-atx-gold/40 shadow-2xl overflow-hidden transition-all duration-300 ${
            deviceMode === 'mobile' ? 'max-w-[380px] border-4 border-slate-700' : 'max-w-4xl'
          }`}
        >
          {/* Browser Chrome Header */}
          <div className="bg-slate-900 px-4 py-2.5 border-b border-atx-navy-border flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <div className="flex-1 max-w-sm mx-3 px-3 py-1 bg-atx-navy rounded-lg text-center text-[11px] text-slate-300 font-mono flex items-center justify-center gap-1.5 border border-atx-navy-border">
              <span className="text-emerald-400 text-xs">🔒</span>
              <span className="truncate">{activeDemo.simulatedUrl}</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">● Live Preview</span>
          </div>

          {/* Website Canvas */}
          <div className="bg-slate-950 text-slate-100 min-h-[420px] max-h-[500px] overflow-y-auto p-5 sm:p-7 flex flex-col justify-between">
            {activeDemo.isBotSimulation ? (
              /* Interactive AI Bot Demo Canvas */
              <div className="max-w-md mx-auto w-full py-2 space-y-3">
                <div className="p-3.5 rounded-xl bg-atx-navy border border-atx-navy-border text-center">
                  <h4 className="text-sm font-bold text-white mb-0.5">Automated Lead Assistant Demo</h4>
                  <p className="text-[11px] text-slate-400">Click below to test how our AI answers customer questions and captures leads</p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {botDialogue.slice(0, simulatedBotStep + 1).map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-atx-gold text-atx-navy-dark font-semibold'
                            : 'bg-atx-navy border border-atx-navy-border text-slate-200'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {simulatedBotStep < botDialogue.length - 1 ? (
                  <div className="pt-2 text-center">
                    <button
                      onClick={() => setSimulatedBotStep((prev) => prev + 1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md"
                    >
                      <span>Simulate Customer Reply</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-1.5 mt-3">
                    <p className="text-xs font-semibold text-emerald-400">✨ Lead Successfully Qualified & Forwarded to WhatsApp in &lt; 30 seconds!</p>
                    <button
                      onClick={() => setSimulatedBotStep(0)}
                      className="text-[10px] font-bold text-slate-400 hover:text-white underline"
                    >
                      Reset AI simulation
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Simulated Website Layout */
              <div>
                {/* Simulated Nav */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs sm:text-sm font-extrabold tracking-wider text-white">
                    {activeDemo.previewContent.navTitle}
                  </span>
                  <button
                    onClick={() => handleSimulatedClick('Navigation Quote Button')}
                    className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-atx-gold/20 text-atx-gold border border-atx-gold/30 hover:bg-atx-gold hover:text-atx-navy-dark transition-colors"
                  >
                    Quick Quote
                  </button>
                </div>

                {/* Simulated Hero */}
                <div className="py-6 text-center max-w-xl mx-auto">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-atx-gold/15 text-atx-gold text-[10px] font-bold uppercase tracking-wider mb-3 border border-atx-gold/30">
                    {activeDemo.previewContent.badge}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2 leading-snug">
                    {activeDemo.previewContent.headline}
                  </h3>
                  <p className="text-xs text-slate-300 mb-5 leading-relaxed max-w-md mx-auto">
                    {activeDemo.previewContent.subtext}
                  </p>
                  
                  {/* Clickable Live Demo CTA Button */}
                  <button
                    onClick={() => handleSimulatedClick(activeDemo.previewContent.cta)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-atx-gold to-atx-gold-light text-atx-navy-dark text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-lg shadow-atx-gold/20 transition-all"
                  >
                    {activeDemo.previewContent.cta} &rarr;
                  </button>
                </div>

                {/* Simulated Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-800/80">
                  {activeDemo.previewContent.features.map((feat, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs font-bold text-white mb-0.5">{feat.label}</div>
                      <div className="text-[10px] text-slate-400">{feat.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Simulated Testimonial */}
                {activeDemo.previewContent.testimonial && (
                  <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800/70 text-center">
                    <div className="flex justify-center text-amber-400 text-xs mb-1">★★★★★</div>
                    <p className="text-[10px] text-slate-300 italic">{activeDemo.previewContent.testimonial}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Frame Bottom CTA */}
          <div className="bg-slate-900 px-5 py-3 border-t border-atx-navy-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-300 text-center sm:text-left">
              <span>Ready for a website like this? </span>
              <strong className="text-atx-gold">{activeDemo.title}</strong>
            </div>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20ATX%20Technologies,%20I%20tested%20your%20live%20demo%20for:%20${encodeURIComponent(activeDemo.title)}%20and%20would%20like%20a%20similar%20website%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-gradient-to-r from-atx-gold to-atx-gold-light hover:brightness-110 transition-all shadow-md"
            >
              <span>Build This Website For Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. Fullscreen / High-Impact Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-atx-navy-card border-2 border-atx-gold/60 rounded-3xl shadow-2xl p-5 sm:p-8 max-h-[92vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={onCloseModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-atx-navy hover:bg-atx-navy-light border border-atx-navy-border transition-colors z-10"
              aria-label="Close Demonstration"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atx-gold/15 border border-atx-gold/30 text-atx-gold text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Interactive Demonstration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Experience Our Website & AI Architectures
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-1">
                Test responsiveness, speed, and conversion flows across corporate sites, landing pages, and AI assistants.
              </p>
            </div>

            {renderStudioContent(true)}
          </div>
        </div>
      )}

      {/* 2. On-Page Section (#live-demos) */}
      <section id="live-demos" className="py-20 md:py-28 bg-atx-navy relative border-t border-atx-navy-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-atx-gold/15 border border-atx-gold/30 text-atx-gold text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Live Demonstration Studio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Test Our Website Architectures Live
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Click through our simulated live prototypes below. Switch between <strong>Desktop</strong> and <strong>Mobile</strong> view to experience our sub-second speed, mobile responsiveness, and conversion layout firsthand.
            </p>
          </div>

          {renderStudioContent(false)}
        </div>
      </section>
    </>
  );
}
