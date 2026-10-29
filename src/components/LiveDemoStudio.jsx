import React, { useState } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Zap, 
  Calculator,
  MessageSquare,
  ShieldCheck,
  RotateCcw,
  Send,
  Star
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

const PROTOTYPES = [
  {
    id: 'corporate-business',
    category: 'Corporate & SME',
    title: 'Corporate Business Website',
    badge: 'Enterprise Credibility & Authority',
    tagline: 'Multi-page corporate presence engineered to establish trust and win high-value contracts.',
    url: 'https://vanguard-logistics.com.ng',
    speed: '0.6s',
    lighthouse: '99',
    pages: {
      home: {
        headline: 'Reliable Freight & Haulage Infrastructure Across West Africa',
        subhead: 'End-to-end container clearing, cold-chain logistics, and nationwide distribution with real-time GPS fleet tracking.',
        cta: 'Request Freight Quote',
        highlights: [
          { title: 'Sub-48hr Port Clearance', desc: 'Dedicated customs clearing at Apapa & Tin Can ports' },
          { title: '100% Insured Fleet', desc: 'Comprehensive transit protection on all cargo' },
          { title: 'Real-Time Telematics', desc: '24/7 continuous satellite tracking for clients' }
        ],
        trust: 'Over 140+ manufacturing, FMCG, and corporate partners served.'
      },
      services: {
        headline: 'Comprehensive Logistics Solutions',
        subhead: 'Engineered for industrial scale and verified punctuality.',
        items: [
          { name: 'Nationwide Haulage', detail: '30-tonne flatbeds and heavy cargo transports' },
          { name: 'Cold-Chain Warehousing', detail: 'Temperature-controlled pharmaceutical & food storage' },
          { name: 'Customs & Port Clearing', detail: 'Complete documentation and expedited gate exit' }
        ]
      },
      quote: {
        headline: 'Instant Freight & Project Estimator',
        subhead: 'Simulate our instant quote workflow for enterprise clients.',
        baseRate: '₦450,000',
        timeline: '24–48 Hours',
        includes: ['Gate Clearance', 'Transit Insurance', 'Dedicated Driver']
      }
    }
  },
  {
    id: 'sales-landing-page',
    category: 'High-Converting Sales',
    title: 'High-Converting Landing Page',
    badge: 'Campaign & Ad-Traffic Machine',
    tagline: 'Laser-focused single-page architecture built to convert paid traffic into booked calls and sales.',
    url: 'https://propelsaas.io/launch',
    speed: '0.5s',
    lighthouse: '100',
    pages: {
      home: {
        headline: 'Cut Manual Operations in Half and Double Team Output',
        subhead: 'The unified business operations dashboard for African startups, agencies, and tech-forward businesses.',
        cta: 'Start Free 14-Day Pilot',
        highlights: [
          { title: '1-Click Paystack Sync', desc: 'Instant automated revenue reconciliation' },
          { title: 'Zero Invoicing Errors', desc: 'Automate client billing disputes away' },
          { title: 'WhatsApp Alerts', desc: 'Real-time sales alerts delivered to your team' }
        ],
        trust: '2,400+ beta registrations in the last 30 days.'
      },
      services: {
        headline: 'Why This Landing Page Converts at 11.4%',
        subhead: 'Notice how every element leads directly to a single conversion action.',
        items: [
          { name: 'Sticky Action Bar', detail: 'Call to action remains visible at all times' },
          { name: 'Social Proof Badges', detail: 'Real client reviews place trust above the fold' },
          { name: 'Sub-Second Loading', detail: 'Zero bounce rate from slow mobile connections' }
        ]
      },
      quote: {
        headline: 'Interactive SaaS Pricing Calculator',
        subhead: 'Test this live pricing tier calculator.',
        baseRate: '₦35,000 / month',
        timeline: 'Instant Provisioning',
        includes: ['Unlimited Team Members', 'Automated Backups', 'WhatsApp Webhooks']
      }
    }
  },
  {
    id: 'executive-portfolio',
    category: 'Personal Brand',
    title: 'Executive Portfolio Website',
    badge: 'Founders & Thought Leaders',
    tagline: 'Minimalist, prestigious showcase for consultants, executives, and creative directors.',
    url: 'https://alexander-adeyemi.com',
    speed: '0.4s',
    lighthouse: '100',
    pages: {
      home: {
        headline: 'Advising Africa\'s Leading Ventures from Seed to Series B',
        subhead: '12+ years building regulated fintech channels, board-level governance, and institutional fundraising.',
        cta: 'Book Advisory Session',
        highlights: [
          { title: '$24M+ Capital Advised', desc: 'Across 14 high-growth African startups' },
          { title: 'Keynote Speaker', desc: 'Africa Tech Summit, Techpoint, and Afrexim' },
          { title: 'Board Advisor', desc: 'Active strategic director for 4 fintech entities' }
        ],
        trust: 'Featured in TechCabal, BusinessDay, and Quartz Africa.'
      },
      services: {
        headline: 'Advisory & Speaking Engagements',
        subhead: 'Strategic retainers and keynote appearances.',
        items: [
          { name: 'Executive Strategy Retainer', detail: 'Monthly strategic direction and board advisory' },
          { name: 'Venture Fundraising Prep', detail: 'Financial modeling, pitch deck audit & investor intro' },
          { name: 'Keynote Tech Addresses', detail: 'Insights on African fintech regulations and growth' }
        ]
      },
      quote: {
        headline: 'Advisory Booking Simulator',
        subhead: 'Direct scheduling integration with automated calendar sync.',
        baseRate: '$1,500 / session',
        timeline: '90-Minute Deep Dive',
        includes: ['Pre-session Audit', 'Full Recording', 'Actionable Roadmap PDF']
      }
    }
  },
  {
    id: 'ai-chatbot-demo',
    category: 'AI & Automation',
    title: '24/7 AI Lead Qualification Bot',
    badge: 'Automated Sales & Support',
    tagline: 'Live interactive conversational assistant that answers FAQs and hands over to WhatsApp.',
    url: 'https://atx-assistant.live',
    speed: '0.3s',
    lighthouse: '99',
    isBot: true
  }
];

export default function LiveDemoStudio() {
  const [activeProtoId, setActiveProtoId] = useState('corporate-business');
  const [activePage, setActivePage] = useState('home'); // 'home' | 'services' | 'quote'
  const [deviceMode, setDeviceMode] = useState('desktop'); // 'desktop' | 'mobile'
  
  // Interactive mini-calculator state inside the demo
  const [calcSelectedTier, setCalcSelectedTier] = useState('standard');
  const [calcFeedback, setCalcFeedback] = useState('');

  // Bot simulation state
  const [botChatStep, setBotChatStep] = useState(0);

  const activeProto = PROTOTYPES.find((p) => p.id === activeProtoId) || PROTOTYPES[0];

  const botMessages = [
    { sender: 'bot', text: 'Hello! Welcome to Vanguard Logistics. Are you inquiring about nationwide haulage or seaport freight clearance?' },
    { sender: 'user', text: 'I need seaport clearance for two 40ft containers arriving at Apapa Port next Tuesday.' },
    { sender: 'bot', text: 'Understood! Our Apapa clearance team offers sub-48hr turnaround with 100% transit insurance. Would you like an itemized invoice sent directly to your WhatsApp?' },
    { sender: 'user', text: 'Yes please, send to 0815 088 2291.' },
    { sender: 'bot', text: 'Perfect! A senior freight manager has been assigned and is reaching out to your WhatsApp right now with your quote.' }
  ];

  const handleSimulatedAction = (actionTitle) => {
    setCalcFeedback(`✓ Interactive Action Triggered: "${actionTitle}". In a live build, this seamlessly opens your WhatsApp or payments checkout!`);
    setTimeout(() => setCalcFeedback(''), 4500);
  };

  return (
    <section id="live-demos" className="py-20 md:py-28 bg-atx-navy relative border-t border-atx-navy-border/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-atx-gold/15 border border-atx-gold/30 text-atx-gold text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Interactive Live Demonstration Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Test Our Website Architectures Live
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Click through the prototypes below, switch between <strong>Desktop</strong> and <strong>Mobile</strong> view, test interactive buttons, and see how our builds convert visitors into paying clients.
          </p>
        </div>

        {/* 1. Main Prototype Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {PROTOTYPES.map((proto) => {
            const isSelected = proto.id === activeProtoId;
            return (
              <button
                key={proto.id}
                type="button"
                onClick={() => {
                  setActiveProtoId(proto.id);
                  setActivePage('home');
                  setBotChatStep(0);
                  setCalcFeedback('');
                }}
                className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all border flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-atx-gold to-atx-gold-light text-atx-navy-dark border-atx-gold shadow-lg shadow-atx-gold/25 scale-105'
                    : 'bg-atx-navy-card text-slate-300 border-atx-navy-border hover:border-atx-gold/40 hover:text-white'
                }`}
              >
                <span>{proto.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-md ${
                  isSelected ? 'bg-atx-navy-dark text-atx-gold' : 'bg-atx-navy text-slate-400'
                }`}>
                  {proto.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2. Controls & Performance Bar */}
        <div className="bg-atx-navy-card border border-atx-navy-border rounded-2xl p-4 mb-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          
          {/* Device Switcher */}
          <div className="flex items-center gap-2 bg-atx-navy p-1 rounded-xl border border-atx-navy-border">
            <button
              type="button"
              onClick={() => setDeviceMode('desktop')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                deviceMode === 'desktop'
                  ? 'bg-atx-gold text-atx-navy-dark shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop View</span>
            </button>
            <button
              type="button"
              onClick={() => setDeviceMode('mobile')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                deviceMode === 'mobile'
                  ? 'bg-atx-gold text-atx-navy-dark shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Phone View</span>
            </button>
          </div>

          {/* Performance Gauges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Speed: <strong className="text-white">{activeProto.speed}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-atx-gold" />
              <span>Lighthouse Score: <strong className="text-atx-gold">{activeProto.lighthouse}/100</strong></span>
            </div>
            <div className="inline-flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-slate-300">{activeProto.badge}</span>
            </div>
          </div>

        </div>

        {/* Interactive Action Toast */}
        {calcFeedback && (
          <div className="mb-4 p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm text-center font-semibold animate-in fade-in">
            {calcFeedback}
          </div>
        )}

        {/* 3. Interactive Device Frame */}
        <div className="flex justify-center transition-all duration-300">
          <div
            className={`w-full bg-slate-950 rounded-2xl border-2 border-atx-gold/50 shadow-2xl overflow-hidden transition-all duration-300 ${
              deviceMode === 'mobile' ? 'max-w-[390px] border-4 border-slate-700' : 'max-w-5xl'
            }`}
          >
            
            {/* Top Chrome / Address Bar */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div className="flex-1 max-w-sm mx-3 px-3 py-1 bg-slate-950 rounded-lg text-center text-[11px] text-slate-300 font-mono flex items-center justify-center gap-1.5 border border-slate-800">
                <span className="text-emerald-400 text-xs">🔒</span>
                <span className="truncate">{activeProto.url}</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                ● Interactive
              </span>
            </div>

            {/* Inner Interactive Navigation for Website Prototypes */}
            {!activeProto.isBot && (
              <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActivePage('home')}
                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-colors cursor-pointer ${
                      activePage === 'home'
                        ? 'bg-atx-gold text-atx-navy-dark'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    1. Home
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePage('services')}
                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-colors cursor-pointer ${
                      activePage === 'services'
                        ? 'bg-atx-gold text-atx-navy-dark'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    2. Services
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePage('quote')}
                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-colors cursor-pointer ${
                      activePage === 'quote'
                        ? 'bg-atx-gold text-atx-navy-dark'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    3. Live Quote Simulator
                  </button>
                </div>
                <span className="text-[10px] text-slate-400 hidden sm:inline">
                  Click tabs above to switch pages
                </span>
              </div>
            )}

            {/* Canvas Area */}
            <div className="p-6 sm:p-8 min-h-[460px] max-h-[580px] overflow-y-auto flex flex-col justify-between">
              
              {activeProto.isBot ? (
                /* AI Bot Conversational Simulator */
                <div className="max-w-md mx-auto w-full py-4 space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <h4 className="text-sm font-bold text-white mb-1">
                      Live AI Lead Qualification Chatbot
                    </h4>
                    <p className="text-xs text-slate-400">
                      Click the button below to simulate an incoming client inquiry in real time.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {botMessages.slice(0, botChatStep + 1).map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                            msg.sender === 'user'
                              ? 'bg-atx-gold text-atx-navy-dark font-semibold'
                              : 'bg-slate-900 border border-slate-800 text-slate-200'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  {botChatStep < botMessages.length - 1 ? (
                    <div className="pt-3 text-center">
                      <button
                        type="button"
                        onClick={() => setBotChatStep((prev) => prev + 1)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md cursor-pointer"
                      >
                        <span>Simulate Next Customer Message</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 mt-4">
                      <p className="text-xs font-bold text-emerald-400">
                        ✨ Lead Qualified & Routed to WhatsApp in Under 30 Seconds!
                      </p>
                      <button
                        type="button"
                        onClick={() => setBotChatStep(0)}
                        className="text-xs font-semibold text-slate-400 hover:text-white underline cursor-pointer"
                      >
                        Reset Conversation Simulation
                      </button>
                    </div>
                  )}
                </div>
              ) : activePage === 'home' ? (
                /* Subpage 1: Home */
                <div>
                  <div className="py-8 text-center max-w-xl mx-auto">
                    <span className="inline-block px-3 py-1 rounded-full bg-atx-gold/15 text-atx-gold text-[10px] font-bold uppercase tracking-wider mb-4 border border-atx-gold/30">
                      {activeProto.badge}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                      {activeProto.pages.home.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                      {activeProto.pages.home.subhead}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleSimulatedAction(activeProto.pages.home.cta)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-atx-gold to-atx-gold-light text-atx-navy-dark text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-lg shadow-atx-gold/25 transition-all cursor-pointer"
                    >
                      {activeProto.pages.home.cta} &rarr;
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800">
                    {activeProto.pages.home.highlights.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-xs font-bold text-white mb-1">{item.title}</div>
                        <div className="text-[11px] text-slate-400">{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 text-center text-xs text-slate-400">
                    {activeProto.pages.home.trust}
                  </div>
                </div>
              ) : activePage === 'services' ? (
                /* Subpage 2: Services */
                <div>
                  <div className="py-6 text-center max-w-lg mx-auto">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                      {activeProto.pages.services.headline}
                    </h3>
                    <p className="text-xs text-slate-400 mb-6">
                      {activeProto.pages.services.subhead}
                    </p>
                  </div>

                  <div className="space-y-3 max-w-lg mx-auto">
                    {activeProto.pages.services.items.map((svc, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-white">{svc.name}</div>
                          <div className="text-[11px] text-slate-400">{svc.detail}</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleSimulatedAction(`Select Service: ${svc.name}`)}
                          className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-atx-gold/20 text-atx-gold border border-atx-gold/40 hover:bg-atx-gold hover:text-atx-navy-dark transition-colors cursor-pointer"
                        >
                          Select
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Subpage 3: Interactive Quote Simulator */
                <div className="max-w-lg mx-auto py-4">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-extrabold text-white mb-1">
                      {activeProto.pages.quote.headline}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {activeProto.pages.quote.subhead}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-xs text-slate-300">Estimated Project Fee:</span>
                      <span className="text-lg font-black text-atx-gold">{activeProto.pages.quote.baseRate}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
                      <span className="text-slate-300">Target Delivery Timeline:</span>
                      <span className="font-bold text-emerald-400">{activeProto.pages.quote.timeline}</span>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-slate-300 block mb-2">Package Deliverables:</span>
                      <div className="space-y-1.5">
                        {activeProto.pages.quote.includes.map((inc, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-atx-gold" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSimulatedAction(`Lock In Estimate: ${activeProto.pages.quote.baseRate}`)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-atx-gold to-atx-gold-light text-atx-navy-dark text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-md transition-all cursor-pointer"
                    >
                      Test Simulated Order Confirmation &rarr;
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Bar: Action to build similar site */}
            <div className="bg-slate-900 px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-300 text-center sm:text-left">
                <span>Like this architecture? </span>
                <strong className="text-atx-gold">{activeProto.title}</strong>
              </div>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20ATX%20Technologies,%20I%20tested%20your%20live%20demo%20for:%20${encodeURIComponent(activeProto.title)}%20and%20would%20like%20a%20similar%20website%20for%20my%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-gradient-to-r from-atx-gold to-atx-gold-light hover:brightness-110 transition-all shadow-md"
              >
                <span>Build This Website For My Business</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
