import React, { useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile, about, skills, projects, certifications, beyondTheCode } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    // Generate standard plain text formatted resume
    const content = `
JAHNAVI PATHIVADA
Cyber Security Student | Developer | Tech Enthusiast
Email: ${profile.email} | Location: ${profile.location}
LinkedIn: ${profile.links.linkedin} | GitHub: ${profile.links.github}

============================================================
EDUCATION
============================================================
B.Tech in Cyber Security (2024 – 2028)
Vignan's Institute of Engineering for Women, Visakhapatnam

============================================================
PROFESSIONAL SUMMARY
============================================================
${profile.shortBio}

============================================================
CORE TECHNICAL SKILLS
============================================================
* Programming: C, Python, JavaScript
* Web Development: HTML, CSS, JavaScript, Web Development, APIs
* Cybersecurity: Cybersecurity Fundamentals, Networking Fundamentals, Security Concepts
* Design & Productivity: UI/UX Design, MS PowerPoint, MS Excel
* Engineering Approach: Problem Solving, Analytical Thinking, Vibe Coding

============================================================
FEATURED PROJECTS
============================================================
1. ResumeIQ (AI / Web Development) - https://resumeiq-virid.vercel.app/
   AI-powered resume analysis platform evaluating resumes, identifying strengths & skill gaps,
   recommending suitable roles, and providing personalized LinkedIn job recommendations.

2. Zero Hunger (Social Impact / Web Development)
   Web platform mitigating food wastage by connecting restaurants, NGOs, donors, and event organizers.
   Tracks food type, quantity, pickup routes, and dynamic expiry times.

3. Ask Without Fear (Education / Web Development)
   Student-focused anonymous doubt submission platform bridging academic gaps with verified teacher support.

4. AlgoZenith Daily Tech Challenges (Programming / Problem Solving)
   Algorithmic coding initiative in C & Python focusing on data structures, algorithmic complexity, and logic.

============================================================
CERTIFICATIONS & TRAINING
============================================================
* Introduction to Cyber Security — Cisco Networking Academy (July 2026)
* Python — Cisco Networking Academy (June 2026)
* Digital Edge 101 — FutureSkills Prime (March 2026)

============================================================
ACTIVITIES & LEADERSHIP
============================================================
* Technical and student clubs participation
* Event coordination & symposium management
* Content creation & branding design
* Cybersecurity workshops & awareness sessions
* Teamwork, communication, and organizational leadership
    `.trim();

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Jahnavi_Pathivada_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0b0f19] border border-cyan-500/30 shadow-2xl text-slate-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#090d16]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>CURRICULUM VITAE</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-300">Jahnavi Pathivada</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-white/[0.08] rounded-lg transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors ml-1 cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content (Standard Clean ATS White/Dark Format) */}
        <div className="p-6 sm:p-10 space-y-8 print:p-0 print:text-black print:bg-white bg-[#0e1422]/60">
          
          {/* Header */}
          <div className="border-b border-white/[0.1] pb-6 print:border-black/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 id="resume-title" className="text-3xl font-extrabold text-white tracking-tight">
                  Jahnavi Pathivada
                </h2>
                <p className="text-base text-cyan-400 font-medium mt-1">
                  Cyber Security Student | Developer | Tech Enthusiast
                </p>
              </div>

              <div className="text-xs text-slate-300 space-y-1 sm:text-right">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <a href={`mailto:${profile.email}`} className="hover:text-cyan-300">
                    {profile.email}
                  </a>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-3 pt-1">
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-300 inline-flex items-center gap-1"
                  >
                    <Linkedin className="w-3 h-3 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                  <span>·</span>
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-300 inline-flex items-center gap-1"
                  >
                    <Github className="w-3 h-3 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold border-b border-white/[0.08] pb-1">
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <div className="text-base font-bold text-white">
                  {profile.education.degree}
                </div>
                <div className="text-sm text-slate-300">
                  {profile.education.institution}, {profile.education.location}
                </div>
              </div>
              <div className="text-xs font-mono text-cyan-400">
                {profile.education.duration}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold border-b border-white/[0.08] pb-1">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {about.narrative}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold border-b border-white/[0.08] pb-1">
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skills.map((group) => (
                <div key={group.category} className="p-3 rounded-lg bg-slate-900/60 border border-white/[0.05]">
                  <div className="font-semibold text-cyan-300 mb-1">
                    {group.category}
                  </div>
                  <div className="text-slate-300">
                    {group.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold border-b border-white/[0.08] pb-1">
              Key Projects
            </h3>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">
                        {proj.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        ({proj.category})
                      </span>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-cyan-400 hover:underline inline-flex items-center gap-0.5 ml-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {proj.date}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono bg-white/[0.04] rounded text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold border-b border-white/[0.08] pb-1">
              Certifications
            </h3>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white">{cert.title}</span>
                    <span className="text-slate-400"> — {cert.issuer}</span>
                  </div>
                  <span className="font-mono text-cyan-400">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Beyond Code / Activities */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold border-b border-white/[0.08] pb-1">
              Activities & Leadership
            </h3>
            <div className="text-xs text-slate-300 space-y-1">
              {beyondTheCode.activities.map((act, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">{act.title}:</strong> {act.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
