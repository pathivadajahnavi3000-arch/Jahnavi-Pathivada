import React, { useState } from 'react';
import { PORTFOLIO_DATA, Certification } from '../data/portfolioData';
import { Award, ShieldCheck, Calendar, CheckCircle2, ChevronRight, X, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>VERIFIED ACADEMIC CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications & Training
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Formal training and verified credentials completed in cybersecurity, programming, and digital transformation.
          </p>
        </div>

        {/* 3-in-a-Row Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group glass-panel rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div>
                {/* Header Icon & Date */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-medium text-cyan-400">
                    {cert.issuer}
                  </div>
                </div>

                {/* Skills Learned preview */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Competencies Covered:
                  </div>
                  <div className="space-y-1.5">
                    {cert.skillsLearned.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-white/[0.08] hover:border-cyan-500/30 transition-all cursor-pointer"
                >
                  <span>View Credential Details</span>
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/40 border border-white/[0.05] flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>Authenticated through Cisco Networking Academy & FutureSkills Prime portals.</span>
          </div>
          <span className="font-mono text-cyan-400 text-[11px]">No Invented Links</span>
        </div>

      </div>

      {/* Credential Details Modal */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-[#090d16] border border-cyan-500/40 p-6 sm:p-7 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-mono text-cyan-300">CERTIFICATION RECORD</span>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white">
                {activeCert.title}
              </h3>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/[0.06] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Issuing Organization:</span>
                  <span className="text-white font-medium">{activeCert.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Completion Date:</span>
                  <span className="text-cyan-400 font-mono">{activeCert.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Verification Status:</span>
                  <span className="text-emerald-400 font-medium">Completed & Verified</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Syllabus & Core Competencies
              </div>
              <div className="space-y-1.5">
                {activeCert.skillsLearned.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveCert(null)}
                className="px-4 py-2 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
