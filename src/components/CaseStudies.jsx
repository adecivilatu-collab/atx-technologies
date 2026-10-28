import React from 'react';
import { Briefcase, CheckCircle2, TrendingUp, Layers, ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/phase2Content';
import { COMPANY_INFO } from '../data/content';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-atx-navy-dark relative border-t border-atx-navy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-atx-gold mb-3">Proven Implementation Frameworks</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Solving Real Business Problems Through Applied Technology
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Examine how our engineered solutions address concrete operational hurdles, reduce overhead, and accelerate turnaround times.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl bg-atx-navy-card border border-atx-navy-border hover:border-atx-gold/40 transition-all flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div className="p-7">
                {/* Sector Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-atx-navy-light text-atx-gold border border-atx-gold/20">
                    {study.clientSector}
                  </span>
                  <Briefcase className="w-4 h-4 text-slate-400 group-hover:text-atx-gold transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-atx-gold transition-colors leading-snug">
                  {study.title}
                </h3>

                {/* Problem & Solution */}
                <div className="space-y-3 mb-6 text-xs">
                  <div className="p-3 rounded-xl bg-atx-navy/70 border border-atx-navy-border/70">
                    <span className="font-bold text-rose-300 block mb-1 uppercase tracking-wider text-[10px]">The Operational Challenge:</span>
                    <span className="text-slate-300 leading-relaxed">{study.problem}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-atx-navy/70 border border-atx-navy-border/70">
                    <span className="font-bold text-emerald-400 block mb-1 uppercase tracking-wider text-[10px]">Engineered Solution:</span>
                    <span className="text-slate-200 leading-relaxed">{study.solution}</span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 py-4 mb-4 border-y border-atx-navy-border/60 text-center">
                  {study.results.map((res, idx) => (
                    <div key={idx} className="p-1">
                      <div className="text-lg font-black text-atx-gold tracking-tight">{res.metric}</div>
                      <div className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">{res.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {study.technologies.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-atx-navy text-slate-300 border border-atx-navy-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-7 py-4 bg-atx-navy/40 border-t border-atx-navy-border/60">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20ATX%20Technologies,%20I%20would%20like%20to%20discuss%20a%20similar%20solution%20to:%20${encodeURIComponent(study.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-atx-gold hover:text-white transition-colors"
                >
                  <span>Discuss Similar Solution</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
