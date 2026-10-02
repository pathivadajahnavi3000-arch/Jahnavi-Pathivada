import React from 'react';
import { FileDown, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ResumeCTAProps {
  onOpenResume: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResume }) => {
  return (
    <section className="py-20 lg:py-24 relative border-t border-white/[0.06] cyber-grid overflow-hidden">
      {/* Background glow orb */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-14 border border-cyan-500/30 text-center space-y-6 relative overflow-hidden shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Technical Internships & Collaborations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Let's Build Something Meaningful.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Interested in working together, discussing an internship opportunity, or exploring a technical project?
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/50 rounded-xl shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          <div className="pt-6 border-t border-white/[0.06] flex items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Visakhapatnam, India</span>
            </div>
            <span>·</span>
            <span>B.Tech Cyber Security (2024–2028)</span>
          </div>

        </div>
      </div>
    </section>
  );
};
