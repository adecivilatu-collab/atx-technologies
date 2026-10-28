import React from 'react';
import { Rocket, GraduationCap, Box, Network, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

const roadmapPhases = [
  {
    phase: "Phase 1 (Live)",
    title: "Corporate Identity & Services",
    desc: "Launch of the official digital presence, rule-based AI assistance, service showcase, and immediate client advisory channels.",
    status: "Current"
  },
  {
    phase: "Phase 2",
    title: "Insight Hub & Case Studies",
    desc: "Publishing practical technology breakdowns, case studies of successful implementations, and verified customer testimonials.",
    status: "Upcoming"
  },
  {
    phase: "Phase 3",
    title: "Proprietary AI & Digital Tools",
    desc: "Deployment of specialized automation templates, micro-SaaS utilities, and advanced multi-agent business assistants.",
    status: "In Planning"
  },
  {
    phase: "Phase 4",
    title: "Structured Technology Academy",
    desc: "Hands-on certified training programs covering applied AI engineering, full-stack software development, and executive upskilling.",
    status: "Roadmap"
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-28 bg-atx-navy-dark relative border-t border-atx-navy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-atx-gold mb-3">Long-Term Vision</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Growth Roadmap & Future Offerings
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Our strategic journey as we evolve from a premier technology consulting firm into a comprehensive platform for AI products and digital education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapPhases.map((phase, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all ${
                phase.status === 'Current'
                  ? 'bg-gradient-to-b from-atx-navy-card to-atx-navy border-atx-gold shadow-lg shadow-atx-gold/10'
                  : 'bg-atx-navy-card/40 border-atx-navy-border/60'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-atx-gold uppercase">
                  {phase.phase}
                </span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    phase.status === 'Current'
                      ? 'bg-atx-gold text-atx-navy-dark'
                      : 'bg-atx-navy-light text-slate-400'
                  }`}
                >
                  {phase.status}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">{phase.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">{phase.desc}</p>
            </div>
          ))}
        </div>

        {/* Education waitlist callout */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-atx-navy-card via-atx-navy to-atx-navy-card border border-atx-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-atx-gold/10 border border-atx-gold/30 flex items-center justify-center text-atx-gold flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Interested in Upcoming Tech & AI Training Batches?</h4>
              <p className="text-xs text-slate-300">Register early interest for our practical cohorts in AI literacy, web engineering, and productivity workflows.</p>
            </div>
          </div>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20ATX%20Technologies,%20I%20would%20like%20to%20register%20interest%20for%20upcoming%20Technology%20Training%20programs.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-atx-gold hover:bg-atx-gold-light transition-all flex-shrink-0"
          >
            <span>Register Early Interest</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
