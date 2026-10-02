import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { 
  X, 
  ExternalLink, 
  Github, 
  Calendar, 
  CheckCircle2, 
  Target, 
  Lightbulb, 
  Wrench, 
  Trophy,
  Layers
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#090d16] border border-cyan-500/30 shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#090d16]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>PROJECT {project.number}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-300">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Hero Preview Image */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-white/[0.06]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.name}
              </h2>
              <p className="text-sm text-cyan-300 font-medium mt-1">
                {project.tagline}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span>Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/[0.1] rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Github className="w-3.5 h-3.5 text-slate-300" />
                  <span>Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-6 py-3 px-4 rounded-xl bg-slate-900/60 border border-white/[0.05] text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Timeline: {project.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Category: {project.category}</span>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
              Project Overview
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/20 space-y-2.5">
              <div className="flex items-center gap-2 text-red-400 text-sm font-semibold">
                <Target className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <Lightbulb className="w-4 h-4" />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
              Key Features & Architectural Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-white/[0.05] text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
              Technologies & Methodologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contribution & Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Wrench className="w-4 h-4 text-indigo-400" />
                <span>My Contribution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.contribution}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Measurable Outcome</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Footer Action CTA */}
          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Jahnavi Pathivada · Project Showcase
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              Close Details
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
