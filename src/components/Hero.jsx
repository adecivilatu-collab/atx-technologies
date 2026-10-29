import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2, Globe, Zap, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Hero({ onOpenDemoModal }) {
  const handleDemoClick = (e) => {
    e.preventDefault();
    if (onOpenDemoModal) {
      onOpenDemoModal();
    }
    const el = document.getElementById('live-demos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-radial-gradient">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-atx-gold/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Brand Logo Showcase */}
          <div className="flex justify-center mb-8">
            <div className="p-3 rounded-2xl bg-white/95 border-2 border-atx-gold/60 shadow-2xl gold-glow inline-block hover:scale-105 transition-transform duration-300">
              <img
                src="/atx-logo.jpg"
                alt="ATX Technologies - Advanced Technology Xcellence"
                className="h-24 sm:h-28 object-contain"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-atx-navy-card/90 border border-atx-gold/30 text-atx-gold text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-atx-gold animate-pulse" />
            <span>Professional Web Engineering & Practical AI</span>
          </div>

          {/* Headline following landing page conversion practices */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Professional Websites & Practical AI for{' '}
            <span className="gold-gradient-text">Businesses That Want to Grow</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            ATX Technologies builds prestigious corporate websites, high-converting landing pages, and practical AI automations designed to turn visitors into paying clients and eliminate repetitive work.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              type="button"
              onClick={handleDemoClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-atx-navy-dark bg-gradient-to-r from-atx-gold to-atx-gold-light hover:brightness-110 shadow-lg shadow-atx-gold/20 transition-all cursor-pointer"
            >
              <span>View Live Demonstration</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm uppercase tracking-wider text-white bg-atx-navy-card hover:bg-atx-navy-light border border-atx-gold/30 hover:border-atx-gold transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Request a Quote (WhatsApp)</span>
            </a>
          </div>

          {/* Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-atx-navy-border/70 text-left">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-atx-navy-card/60 border border-atx-navy-border/60">
              <Globe className="w-5 h-5 text-atx-gold flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">High-Converting Websites</h4>
                <p className="text-xs text-slate-400">Business sites, landing pages, and redesigns optimized for mobile speed and sales.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-atx-navy-card/60 border border-atx-navy-border/60">
              <Zap className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Practical AI Impact</h4>
                <p className="text-xs text-slate-400">Smart chatbots and workflow automations that capture leads and answer 24/7.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-atx-navy-card/60 border border-atx-navy-border/60">
              <ShieldCheck className="w-5 h-5 text-atx-gold flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Transparent Delivery</h4>
                <p className="text-xs text-slate-400">Honest project timelines, clear milestone deliverables, and responsive support.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
