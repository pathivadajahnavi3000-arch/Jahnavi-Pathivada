import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github, ArrowRight, CheckCircle2, Eye, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span>03</span>
              <span aria-hidden="true">·</span>
              <span>ENGINEERED ARTIFACTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-3 text-base text-slate-400 leading-relaxed">
              Real-world web platforms, AI integrations, and algorithmic initiatives built with a focus on security, usability, and societal utility.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400">
            Click any project to view architecture & problem-solution breakdown
          </div>
        </div>

        {/* Projects Grid: 2-column large cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group glass-panel rounded-2xl overflow-hidden border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Project Image Header with overlay badges */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-white/[0.06]">
                  <img
                    src={project.image}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Scrim gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-black/20 to-transparent" />

                  {/* Top Unboxed Category & Numbering */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                    <div className="px-3 py-1 rounded-md bg-[#07090e]/90 backdrop-blur-md border border-white/[0.08] font-mono text-cyan-400">
                      {project.number} · {project.category}
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-[#07090e]/80 backdrop-blur-md text-slate-400 font-mono text-[11px]">
                      {project.date}
                    </div>
                  </div>

                  {/* Hover Quick Action Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 text-xs font-semibold shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>View Case Study</span>
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-cyan-400/90 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="pt-2 border-t border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Highlights:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {project.highlights.slice(0, 4).map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div 
                className="px-6 py-4 bg-slate-900/60 border-t border-white/[0.06] flex items-center justify-between"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>Architecture & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-medium transition-colors"
                      aria-label={`Open live project for ${project.name}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-colors"
                      aria-label={`Open GitHub repository for ${project.name}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Live Project Spotlight Callout: ResumeIQ */}
        <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-7 border border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>LIVE PRODUCTION PLATFORM</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              Try ResumeIQ Live in Your Browser
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Experience the deployed intelligent resume analyzer with real-time scoring, skill gap identification, and automated LinkedIn role mapping.
            </p>
          </div>

          <a
            href="https://resumeiq-virid.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs transition-all shadow-md shrink-0"
          >
            <span>Launch ResumeIQ</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
