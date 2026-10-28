import React from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { ARTICLES } from '../data/phase2Content';

export default function Articles() {
  return (
    <section id="articles" className="py-20 md:py-28 bg-atx-navy relative border-t border-atx-navy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-atx-gold mb-3">Knowledge & Insights</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Practical Technology Perspectives
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Actionable insights and operational guidance from our engineering and advisory team.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="rounded-2xl bg-atx-navy-card border border-atx-navy-border hover:border-atx-gold/40 transition-all p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-4">
                  <span className="font-semibold text-atx-gold uppercase tracking-wider">{article.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-atx-gold transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {article.summary}
                </p>

                <div className="p-3.5 rounded-xl bg-atx-navy/60 border border-atx-navy-border/60 text-xs text-slate-300 mb-6">
                  <span className="font-bold text-atx-gold block mb-1 text-[11px] uppercase tracking-wide">Key Takeaway:</span>
                  <p className="italic text-[11px]">{article.keyTakeaway}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-atx-navy-border/60 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-medium">{article.date}</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-atx-gold hover:text-white transition-colors"
                >
                  <span>Explore topic</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
