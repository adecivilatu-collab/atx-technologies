import React from 'react';
import { MessageSquare, Mail, Phone, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-atx-navy-dark border-t border-atx-navy-border/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-atx-navy-border/60">
          
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/atx-logo.jpg"
                alt="ATX Technologies Logo"
                className="h-12 w-12 object-contain rounded-xl border border-atx-gold/40 bg-white p-1 shadow-lg"
              />
              <div>
                <span className="text-lg font-extrabold text-white">ATX </span>
                <span className="text-lg font-light text-atx-gold">TECHNOLOGIES</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Advanced Technology Xcellence — Driving real-world productivity through practical AI automation, modern software systems, and strategic digital consulting.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-slate-300">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: +234 815 088 2291 ({COMPANY_INFO.phoneDisplay})</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-atx-gold" />
                <span>Email: {COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Core Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-atx-gold transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="hover:text-atx-gold transition-colors">
                  About ATX
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-atx-gold transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-atx-gold transition-colors">
                  Future Roadmap & Training
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-atx-gold transition-colors">
                  Consultation & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Statement */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Commitment</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Headquartered in Nigeria, serving forward-thinking enterprises, founders, and professionals globally.
            </p>
            <div className="p-3 rounded-lg bg-atx-navy border border-atx-navy-border/60 text-[11px] text-slate-300">
              <span className="font-semibold text-atx-gold">Honest Guidance:</span> Real solutions, credible commitments, and verified value.
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} ATX Technologies (Advanced Technology Xcellence). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-atx-gold transition-colors">Privacy & Terms</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-atx-gold hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
