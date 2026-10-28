import React, { useState } from 'react';
import { GraduationCap, Clock, Award, Users, BookOpen, CheckCircle, ArrowRight, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { TRAINING_COURSES } from '../data/phase4Content';
import { COMPANY_INFO } from '../data/content';

export default function TrainingAcademy() {
  const [selectedCourse, setSelectedCourse] = useState(TRAINING_COURSES[0].title);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [enrolled, setEnrolled] = useState(false);

  const handleEnrollmentSubmit = (e) => {
    e.preventDefault();
    setEnrolled(true);
  };

  const generateWhatsAppEnrollment = () => {
    const text = `Hello ATX Technologies,\n\nI would like to enroll in the Training Cohort:\nProgram: ${selectedCourse}\nName: ${applicantName || 'Prospective Student'}\nPhone: ${applicantPhone || 'Not provided'}\n\nPlease share the curriculum syllabus and next cohort dates.`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="training" className="py-20 md:py-28 bg-atx-navy-dark relative border-t border-atx-navy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-atx-navy-card border border-atx-gold/30 text-atx-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Phase 4: ATX Technology Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Practical, Outcome-Focused Technology Academy
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Real skills for the modern digital economy. Learn applied AI, modern software engineering, and digital transformation through hands-on, project-based cohorts.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {TRAINING_COURSES.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl bg-atx-navy-card border border-atx-navy-border hover:border-atx-gold/50 transition-all p-7 flex flex-col justify-between shadow-xl group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-atx-gold/15 text-atx-gold border border-atx-gold/30">
                    {course.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-400">
                    ● {course.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-atx-gold transition-colors leading-snug">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {course.summary}
                </p>

                {/* Course Metadata pills */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-atx-navy/60 border border-atx-navy-border/60 text-[11px] text-slate-300 mb-6">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Duration:</span>
                    <span className="font-semibold text-white">{course.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Target Level:</span>
                    <span className="font-semibold text-atx-gold">{course.level}</span>
                  </div>
                </div>

                {/* Syllabus Modules */}
                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Curriculum Modules:</p>
                  {course.modules.map((mod, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-atx-gold flex-shrink-0 mt-0.5" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {course.skillsGained.map((skill, idx) => (
                    <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-atx-navy text-slate-300 border border-atx-navy-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-atx-navy-border/60 mt-6">
                <a
                  href={`#enrollment`}
                  onClick={() => setSelectedCourse(course.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-atx-gold hover:bg-atx-gold-light transition-all shadow-md"
                >
                  <span>Apply for this Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Enrollment Form Section */}
        <div id="enrollment" className="max-w-3xl mx-auto rounded-2xl bg-atx-navy-card border border-atx-gold/40 p-8 sm:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Register for the Next Training Cohort</h3>
            <p className="text-xs text-slate-300">
              Submit your details to reserve your seat or receive the comprehensive syllabus and schedule.
            </p>
          </div>

          {enrolled ? (
            <div className="p-8 rounded-xl bg-atx-navy border border-emerald-500/40 text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-white mb-2">Registration Reserved!</h4>
              <p className="text-xs text-slate-300 mb-6">
                Thank you, {applicantName || 'Applicant'}! We have logged your registration for <strong className="text-atx-gold">{selectedCourse}</strong>. Our admissions team will reach out to your phone/email with syllabus details and upcoming dates.
              </p>
              <a
                href={generateWhatsAppEnrollment()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-atx-gold hover:bg-atx-gold-light transition-colors"
              >
                <span>Fast-track via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : (
            <form onSubmit={handleEnrollmentSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Select Program *
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-atx-navy border border-atx-navy-border text-white text-sm focus:border-atx-gold focus:outline-none transition-colors"
                >
                  {TRAINING_COURSES.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title} ({c.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Tayo Ogundipe"
                    className="w-full px-4 py-3 rounded-xl bg-atx-navy border border-atx-navy-border text-white text-sm focus:border-atx-gold focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-atx-navy border border-atx-navy-border text-white text-sm focus:border-atx-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={applicantPhone}
                  onChange={(e) => setApplicantPhone(e.target.value)}
                  placeholder="e.g. 08150882291"
                  className="w-full px-4 py-3 rounded-xl bg-atx-navy border border-atx-navy-border text-white text-sm focus:border-atx-gold focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-atx-navy-dark bg-gradient-to-r from-atx-gold to-atx-gold-light hover:brightness-110 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Reserve Cohort Seat</span>
                </button>

                <a
                  href={generateWhatsAppEnrollment()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
