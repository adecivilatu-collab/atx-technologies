import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_LIST } from '../data/phase2Content';
import { COMPANY_INFO } from '../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-atx-navy-dark relative border-t border-atx-navy-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-atx-gold mb-3">Clear Answers</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-300">
            Have questions about working with ATX Technologies? Here are clear, upfront answers.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-12">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-atx-navy-card border border-atx-navy-border/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-bold text-white pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-atx-navy-light flex items-center justify-center text-atx-gold flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-atx-gold/20' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-atx-navy-border/40 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Quick Ask */}
        <div className="p-6 rounded-2xl bg-atx-navy border border-atx-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-atx-gold flex-shrink-0 hidden sm:block" />
            <div>
              <h4 className="text-sm font-bold text-white">Have a specific question not covered here?</h4>
              <p className="text-xs text-slate-400">Ask us directly on WhatsApp and receive a personalized response.</p>
            </div>
          </div>
          <a
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-atx-gold hover:bg-atx-gold-light transition-all flex-shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
