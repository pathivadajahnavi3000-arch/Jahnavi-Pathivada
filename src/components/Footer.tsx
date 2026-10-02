import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070c] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-cyan-400 font-bold text-base">
              {profile.initials}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-medium">
              {profile.name}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400 hidden sm:inline">
              B.Tech Cyber Security (2024–2028)
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/[0.08] hover:border-cyan-500/30 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Jahnavi Pathivada. Built with security, clarity, and precision.</p>
          <div className="flex items-center gap-1.5 text-slate-500">
            <Shield className="w-3 h-3 text-cyan-500/50" />
            <span>Vignan's Institute of Engineering for Women, Visakhapatnam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
