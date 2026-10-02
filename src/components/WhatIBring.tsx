import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Compass, 
  Puzzle, 
  Hammer, 
  Users, 
  RotateCw, 
  ShieldCheck 
} from 'lucide-react';

export const WhatIBring: React.FC = () => {
  const { whatIBring } = PORTFOLIO_DATA;

  const cardIcons = [
    Compass,
    Puzzle,
    Hammer,
    Users,
    RotateCw,
    ShieldCheck,
  ];

  return (
    <section className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>07</span>
            <span aria-hidden="true">·</span>
            <span>VALUE FOR HIRING TEAMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What I Bring
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Core attributes, engineering discipline, and collaborative traits that guide how I contribute to engineering teams and internship environments.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatIBring.map((item, idx) => {
            const Icon = cardIcons[idx % cardIcons.length];
            return (
              <div
                key={item.number}
                className="group glass-panel rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-500/5 transform hover:-translate-y-1"
              >
                <div>
                  {/* Card Header with Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold text-cyan-400 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">
                      {item.number}
                    </span>
                    <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:border-cyan-500/30 transition-colors">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.05] text-[11px] font-mono text-slate-400">
                  Ready to contribute
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
