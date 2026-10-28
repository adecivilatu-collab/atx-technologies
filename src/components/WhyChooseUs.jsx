import React from 'react';
import { CheckCircle2, ShieldAlert, Cpu, HeartHandshake, Layers, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: Cpu,
    title: "Practical AI, Not Gimmicks",
    desc: "We prioritize solutions that resolve operational bottlenecks and deliver real ROI, rather than implementing complex tech just for show."
  },
  {
    icon: HeartHandshake,
    title: "Transparent & Accountable",
    desc: "We avoid speculative promises, hidden fees, and unrealistic timelines. You always know what is being built and why."
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Every website, application, or automation we construct is designed to adapt as your customer base and operations expand."
  },
  {
    icon: Sparkles,
    title: "Modern Engineering Stack",
    desc: "Built with high-speed, modern technologies that ensure high responsiveness, airtight security, and strong SEO visibility."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-atx-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-atx-gold mb-3">Why Partner With Us</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Built on Real Competence and Tangible Results
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We bridge the gap between cutting-edge technology and day-to-day business productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-atx-navy-card border border-atx-navy-border/80 hover:border-atx-gold/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-atx-gold/10 border border-atx-gold/20 flex items-center justify-center text-atx-gold mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
