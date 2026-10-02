import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Users, 
  CalendarCheck, 
  Palette, 
  ShieldCheck, 
  MessagesSquare, 
  Compass,
  Sparkles
} from 'lucide-react';

export const BeyondTheCode: React.FC = () => {
  const { beyondTheCode } = PORTFOLIO_DATA;

  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-5 h-5 text-cyan-400" />,
    CalendarCheck: <CalendarCheck className="w-5 h-5 text-indigo-400" />,
    Palette: <Palette className="w-5 h-5 text-purple-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    MessagesSquare: <MessagesSquare className="w-5 h-5 text-amber-400" />,
    Compass: <Compass className="w-5 h-5 text-sky-400" />,
  };

  return (
    <section id="beyond-code" className="py-20 lg:py-28 relative border-t border-white/[0.06] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>ACTIVITIES & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {beyondTheCode.heading}
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            {beyondTheCode.subheading}
          </p>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beyondTheCode.activities.map((item, idx) => (
            <div
              key={idx}
              className="group glass-panel rounded-2xl p-6 border border-white/[0.08] hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/5 transform hover:-translate-y-1"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/[0.08] group-hover:border-cyan-500/30 transition-colors">
                    {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-slate-400">
                <span>Collaborative Experience</span>
                <span className="font-mono text-cyan-400">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
