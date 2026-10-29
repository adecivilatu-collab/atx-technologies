import React, { useState } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Zap, 
  MessageSquare,
  ShieldCheck,
  Send,
  Star,
  Calendar,
  Check,
  Truck,
  Layers,
  Award,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function LiveDemoStudio() {
  const [activeProto, setActiveProto] = useState('corporate'); // 'corporate' | 'landing' | 'portfolio' | 'chatbot'
  const [deviceView, setDeviceView] = useState('desktop'); // 'desktop' | 'mobile'

  // Corporate Demo State
  const [freightWeight, setFreightWeight] = useState('10');
  const [freightDest, setFreightDest] = useState('Ikeja, Lagos');
  const [freightCalculated, setFreightCalculated] = useState(false);

  // Landing Page Demo State
  const [leadEmail, setLeadEmail] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Portfolio Demo State
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 2:00 PM');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // AI Chatbot State
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello! I am your 24/7 Virtual Assistant. How can I assist your business today?' },
    { sender: 'bot', text: 'You can tap any question below or type your message:', isChips: true }
  ]);

  const quickQuestions = [
    "How much does a corporate website cost?",
    "Can you build an automated WhatsApp bot?",
    "How fast can you redesign my slow website?"
  ];

  const handleSendChat = (text) => {
    const userQuery = text || chatInput;
    if (!userQuery.trim()) return;

    const newMsgs = [...chatMessages, { sender: 'user', text: userQuery }];
    setChatMessages(newMsgs);
    setChatInput('');

    setTimeout(() => {
      let botReply = "Thank you for asking! ATX Technologies builds high-converting business websites in 1–2 weeks and custom AI bots that connect directly to your WhatsApp. Would you like to chat with an engineer on WhatsApp right now?";
      if (userQuery.toLowerCase().includes('cost') || userQuery.toLowerCase().includes('price')) {
        botReply = "Our bespoke corporate websites and landing pages start with clear transparent milestones. We can prepare a customized quote for your exact scope in under 24 hours.";
      } else if (userQuery.toLowerCase().includes('fast') || userQuery.toLowerCase().includes('redesign')) {
        botReply = "Full website redesigns take typically 10 to 14 days, with sub-second mobile page loads (< 0.8s) and 99+ Google Lighthouse scores guaranteed.";
      }
      setChatMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <section id="live-demos" className="py-20 md:py-28 bg-atx-navy relative border-t border-atx-navy-border/60 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-atx-gold/15 border border-atx-gold/30 text-atx-gold text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-atx-gold" />
            <span>Working Interactive Demonstration Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Experience Our Website Architectures Live
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            This is an actual working simulator. Click the prototype tabs, toggle between <strong>Desktop</strong> and <strong>Mobile Phone</strong> view, and test real interactive forms, calculators, and automated chat.
          </p>
        </div>

        {/* 1. Prototype Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <button
            type="button"
            onClick={() => setActiveProto('corporate')}
            className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all border flex items-center gap-2 cursor-pointer ${
              activeProto === 'corporate'
                ? 'bg-atx-gold text-atx-navy-dark border-atx-gold shadow-lg shadow-atx-gold/20 scale-105'
                : 'bg-atx-navy-card text-slate-300 border-atx-navy-border hover:border-atx-gold/40 hover:text-white'
            }`}
          >
            <span>🏢 Corporate Business Website</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveProto('landing')}
            className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all border flex items-center gap-2 cursor-pointer ${
              activeProto === 'landing'
                ? 'bg-atx-gold text-atx-navy-dark border-atx-gold shadow-lg shadow-atx-gold/20 scale-105'
                : 'bg-atx-navy-card text-slate-300 border-atx-navy-border hover:border-atx-gold/40 hover:text-white'
            }`}
          >
            <span>⚡ High-Converting Landing Page</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveProto('portfolio')}
            className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all border flex items-center gap-2 cursor-pointer ${
              activeProto === 'portfolio'
                ? 'bg-atx-gold text-atx-navy-dark border-atx-gold shadow-lg shadow-atx-gold/20 scale-105'
                : 'bg-atx-navy-card text-slate-300 border-atx-navy-border hover:border-atx-gold/40 hover:text-white'
            }`}
          >
            <span>🎨 Executive Portfolio Website</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveProto('chatbot')}
            className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all border flex items-center gap-2 cursor-pointer ${
              activeProto === 'chatbot'
                ? 'bg-atx-gold text-atx-navy-dark border-atx-gold shadow-lg shadow-atx-gold/20 scale-105'
                : 'bg-atx-navy-card text-slate-300 border-atx-navy-border hover:border-atx-gold/40 hover:text-white'
            }`}
          >
            <span>🤖 24/7 AI Chatbot Assistant</span>
          </button>
        </div>

        {/* 2. Device Mode & Live Indicators Bar */}
        <div className="bg-atx-navy-card border border-atx-navy-border rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          {/* Viewport switch */}
          <div className="flex items-center gap-2 bg-atx-navy p-1 rounded-xl border border-atx-navy-border">
            <button
              type="button"
              onClick={() => setDeviceView('desktop')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                deviceView === 'desktop'
                  ? 'bg-atx-gold text-atx-navy-dark shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop View</span>
            </button>
            <button
              type="button"
              onClick={() => setDeviceView('mobile')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                deviceView === 'mobile'
                  ? 'bg-atx-gold text-atx-navy-dark shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Phone View</span>
            </button>
          </div>

          {/* Performance Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Speed: <strong className="text-white">&lt; 0.7s</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-atx-gold" />
              <span>Lighthouse: <strong className="text-atx-gold">99-100/100</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Fully Responsive & Interactive</span>
            </div>
          </div>
        </div>

        {/* 3. Simulated Device Container */}
        <div className="flex justify-center transition-all duration-300">
          <div
            className={`w-full bg-slate-950 rounded-2xl border-2 border-atx-gold/50 shadow-2xl overflow-hidden transition-all duration-300 ${
              deviceView === 'mobile' ? 'max-w-[390px] border-4 border-slate-700' : 'max-w-5xl'
            }`}
          >
            {/* Browser Top Window Bar */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div className="flex-1 max-w-sm mx-3 px-3 py-1 bg-slate-950 rounded-lg text-center text-[11px] text-slate-300 font-mono flex items-center justify-center gap-1.5 border border-slate-800">
                <span className="text-emerald-400 text-xs">🔒</span>
                <span className="truncate">
                  {activeProto === 'corporate' && 'https://vanguard-freight.com.ng'}
                  {activeProto === 'landing' && 'https://propelsaas.io/launch'}
                  {activeProto === 'portfolio' && 'https://alexander-adeyemi.com'}
                  {activeProto === 'chatbot' && 'https://atx-assistant.live/demo'}
                </span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block"></span>
                <span>Live</span>
              </span>
            </div>

            {/* Canvas: Truly Functional Simulated Websites */}
            <div className="min-h-[480px] max-h-[620px] overflow-y-auto p-5 sm:p-8 bg-slate-950 text-slate-100 flex flex-col justify-between">
              
              {/* ================= PROTO 1: CORPORATE BUSINESS ================= */}
              {activeProto === 'corporate' && (
                <div className="space-y-6">
                  {/* Simulated Nav */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-atx-gold text-atx-navy-dark flex items-center justify-center font-black text-xs">
                        VF
                      </div>
                      <span className="text-xs sm:text-sm font-extrabold tracking-wider text-white">
                        VANGUARD FREIGHT
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-slate-400 hidden sm:inline">Fleet • Tracking • Network</span>
                      <button
                        type="button"
                        onClick={() => setFreightCalculated(true)}
                        className="px-3 py-1.5 rounded-lg bg-atx-gold text-atx-navy-dark text-[11px] font-bold uppercase cursor-pointer hover:brightness-110"
                      >
                        Freight Rate
                      </button>
                    </div>
                  </div>

                  {/* Simulated Hero */}
                  <div className="py-4 text-center max-w-xl mx-auto">
                    <span className="inline-block px-3 py-1 rounded-full bg-atx-gold/15 text-atx-gold text-[10px] font-bold uppercase tracking-wider mb-3 border border-atx-gold/30">
                      West Africa Cargo & Seaport Clearance
                    </span>
                    <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                      Reliable Haulage & Container Clearance in Under 48 Hours
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                      Connecting industrial manufacturers, importers, and FMCG brands with 100% insured road haulage and GPS cargo tracking.
                    </p>
                  </div>

                  {/* Interactive Rate Calculator Widget */}
                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 max-w-lg mx-auto space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-atx-gold" />
                        <span className="text-xs font-bold text-white">Interactive Freight Estimator</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold uppercase">Instant Result</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">Cargo Weight (Tonnes)</label>
                        <select
                          value={freightWeight}
                          onChange={(e) => setFreightWeight(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs cursor-pointer"
                        >
                          <option value="5">5 Tonnes (Light Truck)</option>
                          <option value="15">15 Tonnes (Semi-Trailer)</option>
                          <option value="30">30 Tonnes (Flatbed Container)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">Delivery Destination</label>
                        <select
                          value={freightDest}
                          onChange={(e) => setFreightDest(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs cursor-pointer"
                        >
                          <option value="Ikeja, Lagos">Ikeja / Mainland, Lagos</option>
                          <option value="Ibadan, Oyo">Ibadan, Oyo State</option>
                          <option value="Abuja, FCT">Abuja Industrial Zone</option>
                          <option value="Port Harcourt">Port Harcourt, Rivers</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <div className="text-[10px] text-slate-400">Calculated Freight Rate:</div>
                        <div className="text-base font-extrabold text-atx-gold">
                          ₦{(parseInt(freightWeight) * 35000 + (freightDest.includes('Abuja') ? 250000 : 80000)).toLocaleString()}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-slate-400">Transit ETA:</div>
                        <div className="text-xs font-bold text-emerald-400">
                          {freightDest.includes('Abuja') ? '48 - 72 Hours' : 'Under 24 Hours'}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setFreightCalculated(true)}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-atx-gold to-atx-gold-light text-atx-navy-dark text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-md cursor-pointer"
                    >
                      {freightCalculated ? '✓ Rate Locked & Transmitted!' : 'Request Dispatch for This Rate →'}
                    </button>
                    {freightCalculated && (
                      <p className="text-[11px] text-emerald-400 text-center font-semibold">
                        ✨ Simulated Lead Captured! In your production site, this routes directly into your WhatsApp & CRM.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* ================= PROTO 2: SALES LANDING PAGE ================= */}
              {activeProto === 'landing' && (
                <div className="space-y-6">
                  {/* Simulated Nav */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <span className="text-xs sm:text-sm font-extrabold tracking-wider text-white">
                      PROPEL SAAS
                    </span>
                    <span className="text-[10px] text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-bold">
                      ⚡ 14-Day Free Pilot
                    </span>
                  </div>

                  {/* Hero Conversion Section */}
                  <div className="py-4 text-center max-w-xl mx-auto">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-3 border border-emerald-500/20">
                      Rated 4.9/5 by 240+ African Founders
                    </span>
                    <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                      Stop Losing Hours Every Week on Manual Revenue Reconciliation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                      Connect Paystack, Flutterwave, and bank feeds in under 5 minutes. Generate audit-ready financial statements automatically.
                    </p>

                    {/* Interactive Lead Capture Box */}
                    <div className="max-w-md mx-auto p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                      <div className="text-xs font-bold text-slate-200 text-left">
                        Start your 14-day free pilot (No credit card required):
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="email"
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                          placeholder="Enter your work email..."
                          className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:border-atx-gold focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => setLeadSubmitted(true)}
                          className="px-5 py-2.5 rounded-xl bg-atx-gold text-atx-navy-dark text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-md cursor-pointer whitespace-nowrap"
                        >
                          Claim Pilot
                        </button>
                      </div>

                      {leadSubmitted && (
                        <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                          🎉 Success! Pilot access provisioned for {leadEmail || 'your email'}.
                        </div>
                      )}
                    </div>

                    {/* Trust Proof */}
                    <div className="pt-6 flex items-center justify-center gap-6 text-[11px] text-slate-400">
                      <div className="flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Instant Setup</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>SOC-2 Certified</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>WhatsApp Sync</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= PROTO 3: EXECUTIVE PORTFOLIO ================= */}
              {activeProto === 'portfolio' && (
                <div className="space-y-6">
                  {/* Simulated Nav */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <span className="text-xs sm:text-sm font-extrabold tracking-wider text-white">
                      ALEXANDER ADEYEMI
                    </span>
                    <span className="text-[10px] text-atx-gold font-bold uppercase tracking-wider">
                      Advisory & Ventures
                    </span>
                  </div>

                  {/* Profile & Metrics */}
                  <div className="py-2 text-center max-w-xl mx-auto">
                    <div className="w-16 h-16 rounded-full bg-atx-gold/20 border-2 border-atx-gold mx-auto mb-3 flex items-center justify-center font-extrabold text-atx-gold text-lg">
                      AA
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                      Fintech Strategist, Board Director & Angel Investor
                    </h3>
                    <p className="text-xs text-slate-300 mb-6 leading-relaxed max-w-md mx-auto">
                      12+ years advising regulated cross-border payment platforms and mentoring executive founders from Seed to Series B.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-base font-black text-atx-gold">$24M+</div>
                        <div className="text-[10px] text-slate-400">Venture Capital Raised</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-base font-black text-atx-gold">14</div>
                        <div className="text-[10px] text-slate-400">Board Positions</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-base font-black text-atx-gold">30+</div>
                        <div className="text-[10px] text-slate-400">Keynote Speeches</div>
                      </div>
                    </div>

                    {/* Interactive Session Booking Simulator */}
                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 max-w-md mx-auto text-left space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-atx-gold" />
                          <span>Book an Advisory Consultation</span>
                        </span>
                        <span className="text-[10px] text-atx-gold font-semibold">$1,500 / 90 Mins</span>
                      </div>

                      <div>
                        <label className="block text-[10px] text-slate-400 mb-1">Select Available Time Slot:</label>
                        <select
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs cursor-pointer"
                        >
                          <option value="Tomorrow, 2:00 PM">Tomorrow, 2:00 PM (West Africa Time)</option>
                          <option value="Thursday, 10:00 AM">Thursday, 10:00 AM (West Africa Time)</option>
                          <option value="Friday, 4:30 PM">Friday, 4:30 PM (West Africa Time)</option>
                        </select>
                      </div>

                      <button
                        type="button"
                        onClick={() => setBookingConfirmed(true)}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-atx-gold to-atx-gold-light text-atx-navy-dark text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-md cursor-pointer"
                      >
                        {bookingConfirmed ? '✓ Advisory Session Booked!' : 'Confirm Advisory Reservation →'}
                      </button>

                      {bookingConfirmed && (
                        <p className="text-[11px] text-emerald-400 text-center font-semibold">
                          📅 Calendar invite generated for {selectedDate}.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ================= PROTO 4: 24/7 AI CHATBOT ================= */}
              {activeProto === 'chatbot' && (
                <div className="max-w-md mx-auto w-full py-2 space-y-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <h4 className="text-sm font-bold text-white mb-0.5">24/7 Automated Lead Qualifier</h4>
                    <p className="text-[11px] text-slate-400">Type a question or tap a prompt to test instant intelligent responses</p>
                  </div>

                  {/* Chat messages stream */}
                  <div className="space-y-2.5 max-h-[300px] overflow-y-auto p-1">
                    {chatMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                            msg.sender === 'user'
                              ? 'bg-atx-gold text-atx-navy-dark font-semibold'
                              : 'bg-slate-900 border border-slate-800 text-slate-200'
                          }`}
                        >
                          {msg.text}
                        </div>

                        {msg.isChips && (
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {quickQuestions.map((q, qIdx) => (
                              <button
                                key={qIdx}
                                type="button"
                                onClick={() => handleSendChat(q)}
                                className="text-left text-[11px] px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-atx-gold/20 text-slate-300 hover:text-atx-gold border border-slate-800 hover:border-atx-gold/40 cursor-pointer transition-colors"
                              >
                                {q}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Chat Input Box */}
                  <div className="pt-2 flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSendChat();
                      }}
                      placeholder="Type your question to test the bot..."
                      className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-atx-gold focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => handleSendChat()}
                      className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold uppercase transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Bar: Action to build similar site */}
            <div className="bg-slate-900 px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-300 text-center sm:text-left">
                <span>Want an engineered platform like this for your business?</span>
              </div>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20ATX%20Technologies,%20I%20tested%20your%20interactive%20demo%20and%20would%20like%20to%20order%20a%20similar%20high-performance%20website%20for%20my%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-gradient-to-r from-atx-gold to-atx-gold-light hover:brightness-110 transition-all shadow-md"
              >
                <span>Request a Website Like This</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
