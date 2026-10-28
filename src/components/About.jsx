import React from 'react';
import { Target, Eye, ShieldCheck, Zap, Award, Users, BookOpen, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

const valueIcons = [Zap, Award, ShieldCheck, Users, BookOpen, Wrench];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-atx-navy-dark relative border-t border-atx-navy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-atx-gold mb-3">About ATX Technologies</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Committed to Advanced Technology Xcellence
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Headquartered to serve growing businesses in Nigeria and beyond, ATX Technologies exists to make advanced artificial intelligence and software engineering genuinely useful, accessible, and commercially viable.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-atx-navy-card to-atx-navy border border-atx-gold/20 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-atx-gold/10 border border-atx-gold/30 flex items-center justify-center text-atx-gold mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-atx-gold mb-2">Our Mission</h3>
            <p className="text-xl font-semibold text-white leading-relaxed">
              "{COMPANY_INFO.mission}"
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-atx-navy-card to-atx-navy border border-atx-gold/20 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-atx-gold/10 border border-atx-gold/30 flex items-center justify-center text-atx-gold mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-atx-gold mb-2">Our Vision</h3>
            <p className="text-xl font-semibold text-white leading-relaxed">
              "{COMPANY_INFO.vision}"
            </p>
          </div>

        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Our Core Values</h3>
            <p className="text-sm text-slate-400">The enduring principles that define how we build and consult.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.values.map((val, idx) => {
              const IconComp = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-xl bg-atx-navy-card/60 border border-atx-navy-border hover:border-atx-gold/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-atx-gold/10 text-atx-gold">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-white">{val.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
