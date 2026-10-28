import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'AI Tools', href: '#digital-products' },
    { label: 'Academy', href: '#training' },
    { label: 'Platform & Retainers', href: '#platform' },
    { label: 'Cases', href: '#case-studies' },
    { label: 'Articles', href: '#articles' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-atx-navy/85 border-b border-atx-navy-border/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/atx-logo.jpg"
              alt="ATX Technologies Logo"
              className="h-12 w-12 object-contain rounded-xl border border-atx-gold/30 shadow-lg group-hover:border-atx-gold transition-colors bg-white p-1"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white">ATX</span>
                <span className="text-xl font-light tracking-wide text-atx-gold">TECHNOLOGIES</span>
              </div>
              <p className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                Advanced Technology Xcellence
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-slate-300 hover:text-atx-gold transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Medium Screens (lg) */}
          <nav className="hidden md:flex xl:hidden items-center gap-3">
            <a href="#services" className="text-xs font-semibold text-slate-300 hover:text-atx-gold transition-colors uppercase">Services</a>
            <a href="#digital-products" className="text-xs font-semibold text-slate-300 hover:text-atx-gold transition-colors uppercase">AI Tools</a>
            <a href="#training" className="text-xs font-semibold text-slate-300 hover:text-atx-gold transition-colors uppercase">Academy</a>
            <a href="#platform" className="text-xs font-semibold text-atx-gold transition-colors uppercase">Platform</a>
            <a href="#contact" className="text-xs font-semibold text-slate-300 hover:text-atx-gold transition-colors uppercase">Contact</a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-atx-gold bg-atx-gold/10 hover:bg-atx-gold/20 border border-atx-gold/30 hover:border-atx-gold transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-atx-navy-dark bg-gradient-to-r from-atx-gold to-atx-gold-light hover:brightness-110 shadow-md transition-all font-bold"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-atx-gold hover:text-white"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-atx-navy border-b border-atx-navy-border px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-atx-gold"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-atx-navy-border/60 flex flex-col gap-2">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-atx-gold bg-atx-gold/10 border border-atx-gold/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp (0815 088 2291)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-atx-gold"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
