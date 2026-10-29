import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, Send, CheckCircle2, ArrowRight, Zap, Check } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';

const PROJECT_TYPES = [
  "Business Website",
  "High-Converting Landing Page",
  "Portfolio Website",
  "Website Redesign",
  "AI Automation / Chatbot",
  "Custom Web Application"
];

const TIMELINES = [
  "Urgent (1–2 weeks)",
  "Standard (3–4 weeks)",
  "Flexible / Planning"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Business Website',
    timeline: 'Standard (3–4 weeks)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const encode = (data) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'atx-contact', ...formData })
    })
      .then(() => setSubmitted(true))
      .catch((error) => {
        console.error('Form submission error:', error);
        setSubmitted(true);
      });
  };

  const generateWhatsAppInquiry = () => {
    const text = `Hello ATX Technologies,\n\nI would like to request a quote:\n• Project Type: ${formData.service}\n• Estimated Timeline: ${formData.timeline}\n• Name: ${formData.name || 'Interested Client'}\n• Phone/Email: ${formData.phone || formData.email || 'Not provided'}\n\nProject Scope:\n${formData.message || 'I would like an initial consultation and quote estimate.'}`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-atx-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-atx-gold mb-3">Request a Quote</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Get an Accurate Quote for Your Website or Tech Project
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Tell us what you want to build. You can connect directly via WhatsApp for an immediate response or submit your project details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Cards (Left column) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-atx-navy-card to-atx-navy border border-atx-gold/40 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Fastest Response (Under 10 mins)</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Direct WhatsApp Consultation</h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Connect directly with our engineering team for instant quote estimates, scoping questions, and technical recommendations.
              </p>
              <div className="text-sm font-semibold text-slate-200 mb-6 flex items-center gap-2">
                <Phone className="w-4 h-4 text-atx-gold" />
                <span>+234 815 088 2291 ({COMPANY_INFO.phoneDisplay})</span>
              </div>
              <a
                href={generateWhatsAppInquiry()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="p-8 rounded-2xl bg-atx-navy-card/70 border border-atx-navy-border">
              <div className="w-12 h-12 rounded-xl bg-atx-gold/10 border border-atx-gold/30 flex items-center justify-center text-atx-gold mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Corporate Email</h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                For formal RFPs, enterprise scopes, and corporate partnerships, email our team directly.
              </p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-sm font-semibold text-atx-gold hover:text-white transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>

          </div>

          {/* Inquiry Form (Right column) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-atx-navy-card border border-atx-navy-border shadow-2xl">
              
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white">Project Quote Request</h3>
                <span className="text-xs font-semibold text-atx-gold bg-atx-gold/10 px-3 py-1 rounded-full border border-atx-gold/20">
                  Free Assessment
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-8">
                Select your project type and provide basic details to receive a clear scope and price estimate.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-atx-navy border border-atx-gold/40 text-center">
                  <CheckCircle2 className="w-12 h-12 text-atx-gold mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Quote Request Received!</h4>
                  <p className="text-xs text-slate-300 mb-6">
                    Thank you for reaching out to ATX Technologies. An advisor will review your project requirements and get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-atx-gold hover:text-white uppercase tracking-wider underline"
                  >
                    Submit another quote request
                  </button>
                </div>
              ) : (
                <form
                  name="atx-contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="atx-contact" />
                  <p className="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                  </p>

                  {/* Project Type Chips */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                      1. What service or project do you need? *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {PROJECT_TYPES.map((type) => {
                        const isSelected = formData.service === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, service: type })}
                            className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left border transition-all ${
                              isSelected
                                ? 'bg-atx-gold text-atx-navy-dark font-bold border-atx-gold shadow-md'
                                : 'bg-atx-navy text-slate-300 border-atx-navy-border hover:border-atx-gold/40'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeline Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      2. Desired Timeline
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {TIMELINES.map((time) => {
                        const isSelected = formData.timeline === time;
                        return (
                          <button
                            type="button"
                            key={time}
                            onClick={() => setFormData({ ...formData, timeline: time })}
                            className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-all ${
                              isSelected
                                ? 'bg-atx-gold/20 text-atx-gold border-atx-gold/60 font-semibold'
                                : 'bg-atx-navy text-slate-400 border-atx-navy-border hover:text-white'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Client Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Adebayo Ogunlesi"
                        className="w-full px-4 py-3 rounded-xl bg-atx-navy border border-atx-navy-border text-white text-sm focus:border-atx-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-atx-navy border border-atx-navy-border text-white text-sm focus:border-atx-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0815 088 2291"
                      className="w-full px-4 py-3 rounded-xl bg-atx-navy border border-atx-navy-border text-white text-sm focus:border-atx-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Project Goals / Scope Notes *
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what your business does and any specific features you need..."
                      className="w-full px-4 py-3 rounded-xl bg-atx-navy border border-atx-navy-border text-white text-sm focus:border-atx-gold focus:outline-none transition-colors"
                    ></textarea>
                  </div>

                  {/* Submission Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-gradient-to-r from-atx-gold to-atx-gold-light hover:brightness-110 transition-all shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Quote via Form</span>
                    </button>
                    
                    <a
                      href={generateWhatsAppInquiry()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
                    >
                      <span>Send Quote to WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
