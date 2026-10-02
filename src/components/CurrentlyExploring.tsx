import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  ShieldAlert, 
  Globe, 
  Network, 
  Sparkles, 
  Rocket, 
  BrainCircuit, 
  Code 
} from 'lucide-react';

export const CurrentlyExploring: React.FC = () => {
  const { currentlyExploring } = PORTFOLIO_DATA;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cybersecurity':
        return <ShieldAlert className="w-5 h-5 text-cyan-400" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case 'APIs':
        return <Network className="w-5 h-5 text-purple-400" />;
      case 'AI-Powered Applications':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Emerging Technologies':
        return <Rocket className="w-5 h-5 text-pink-400" />;
      case 'Problem Solving':
        return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      case 'Software Development':
        return <Code className="w-5 h-5 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 lg:py-24 relative border-t border-white/[0.06] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>ACTIVE TECHNICAL PURSUITS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Currently Exploring
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Continuous curiosity drives my engineering trajectory. Here are the core technical frontiers currently commanding my focus and study.
          </p>
        </div>

        {/* Dynamic Exploring Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentlyExploring.map((item, idx) => (
            <div
              key={idx}
              className="group glass-panel rounded-xl p-5 border border-white/[0.08] hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Radar pulse dot */}
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:scale-110 transition-transform">
                  {getIcon(item.name)}
                </div>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
              </div>

              <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                {item.name}
              </h3>
              
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                {item.note}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
