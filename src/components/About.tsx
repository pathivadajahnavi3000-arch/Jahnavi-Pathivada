import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, ShieldCheck, Terminal, Users, Sparkles, Building2 } from 'lucide-react';

export const About: React.FC = () => {
  const { about, profile } = PORTFOLIO_DATA;

  const timelineIcons = [
    GraduationCap,
    Terminal,
    ShieldCheck,
    Users,
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>BACKGROUND & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {about.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {about.narrative}
          </p>
        </div>

        {/* 2-Column Content: Profile highlight card + Visual Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Academic & Technical Focus Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/[0.08] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Academic Foundation</h3>
                  <p className="text-xs text-slate-400">Undergraduate Degree Program</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.05]">
                  <div className="text-xs text-slate-400 font-mono">DEGREE</div>
                  <div className="text-white font-medium mt-0.5">{profile.education.degree}</div>
                  <div className="text-xs text-cyan-400 font-mono mt-1">{profile.education.duration}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.05]">
                  <div className="text-xs text-slate-400 font-mono">INSTITUTION</div>
                  <div className="text-white font-medium mt-0.5">{profile.education.institution}</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <Building2 className="w-3 h-3 text-slate-500" />
                    <span>{profile.education.location}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.05]">
                  <div className="text-xs text-slate-400 font-mono">CORE INTERESTS</div>
                  <div className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Network Security · Web Development · Practical Tooling · Algorithmic Logic
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Dedicated to continuous skill development and hands-on execution.</span>
              </div>
            </div>
          </div>

          {/* Right: Visual Timeline */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  Academic & Technical Journey
                </h3>
                <span className="text-xs font-mono text-cyan-400">
                  2024 — Present
                </span>
              </div>

              <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:via-indigo-500/50 before:to-slate-700">
                {about.timeline.map((item, idx) => {
                  const Icon = timelineIcons[idx % timelineIcons.length];
                  return (
                    <div key={idx} className="relative group">
                      {/* Timeline node */}
                      <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-[#0a0e17] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      </div>

                      {/* Content */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                          <span>{item.year}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-slate-400">Milestone</span>
                        </div>
                        <h4 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
