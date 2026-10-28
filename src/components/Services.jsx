import React from 'react';
import { Bot, Code2, TrendingUp, GraduationCap, ArrowUpRight, CheckCircle } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/content';

const iconMap = {
  Bot: Bot,
  Code2: Code2,
  TrendingUp: TrendingUp,
  GraduationCap: GraduationCap
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-atx-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-atx-gold mb-3">Our Core Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Practical Technology Solutions Built for Business Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We focus on four foundational technology disciplines designed to solve immediate operational bottlenecks and position your organization for sustainable digital growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Bot;
            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative rounded-2xl bg-atx-navy-card border border-atx-navy-border hover:border-atx-gold/50 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-atx-gold/5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-atx-gold/10 border border-atx-gold/30 flex items-center justify-center text-atx-gold group-hover:scale-105 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-atx-navy-light text-slate-300 border border-atx-navy-border">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-atx-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-atx-gold mb-4 uppercase tracking-wider">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Problem & Solution block */}
                  <div className="space-y-3 mb-6 p-4 rounded-xl bg-atx-navy/60 border border-atx-navy-border/60 text-xs">
                    <div>
                      <span className="font-bold text-rose-300 uppercase tracking-wide">The Challenge: </span>
                      <span className="text-slate-300">{service.problem}</span>
                    </div>
                    <div>
                      <span className="font-bold text-atx-gold uppercase tracking-wide">Our Solution: </span>
                      <span className="text-slate-200">{service.solution}</span>
                    </div>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-2 mb-8">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Deliverables:</p>
                    {service.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-4 h-4 text-atx-gold flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Bottom CTA */}
                <div className="pt-4 border-t border-atx-navy-border/60 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20ATX%20Technologies,%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-atx-gold hover:text-white uppercase tracking-wider transition-colors"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    Request Proposal &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
