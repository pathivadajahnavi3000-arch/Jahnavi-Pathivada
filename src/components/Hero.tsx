import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Shield, 
  Code2, 
  Cpu, 
  Zap, 
  CheckCircle2,
  GraduationCap,
  Upload,
  Camera,
  Check,
  RotateCcw
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize from localStorage if the user has uploaded their 100% real photo
  const [realPhoto, setRealPhoto] = useState<string | null>(() => {
    return localStorage.getItem('jahnavi_real_face_photo');
  });
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Fallback to public/professional.jpeg or portrait asset if not loaded yet
  const displayPhoto = realPhoto || profile.portrait;

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (e.g., professional.jpeg).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setRealPhoto(dataUrl);
        localStorage.setItem('jahnavi_real_face_photo', dataUrl);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleResetPhoto = () => {
    localStorage.removeItem('jahnavi_real_face_photo');
    setRealPhoto(null);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 cyber-grid overflow-hidden"
    >
      {/* Hidden file input for uploading the exact real photo */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/jpg"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Subtle ambient lighting gradients */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Availability & Degree kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/25 text-xs text-slate-300 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-cyan-300 font-medium">Seeking 2026 Internships</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400">B.Tech 2024–2028</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <p className="text-base sm:text-lg font-mono text-cyan-400 tracking-wide">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
                Jahnavi Pathivada
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                {profile.tagline}
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              {profile.shortBio}
            </p>

            {/* 30-Second Recruiter Fast-Facts Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-t border-white/[0.06]">
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">B.Tech Cyber Security</div>
                  <div className="text-slate-400">Vignan's Inst. of Eng.</div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">ResumeIQ Platform</div>
                  <div className="text-slate-400">Live AI Project</div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">Cisco Certified</div>
                  <div className="text-slate-400">Security & Python</div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/50 rounded-lg shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Secondary Contact Links */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profile.links.email}
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
                <span>{profile.email}</span>
              </a>
              <div className="inline-flex items-center gap-1.5 text-slate-500">
                <MapPin className="w-3.5 h-3.5" />
                <span>{profile.location}</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Prominent Professional Photograph Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 md:w-96 max-w-full">
              
              {/* Animated outer glowing ring */}
              <div 
                className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-purple-500/30 blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse pointer-events-none"
                aria-hidden="true" 
              />

              {/* Glassmorphic photo container */}
              <div 
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`relative rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-slate-800/70 via-slate-900/80 to-[#0b0f19] border ${
                  isDragOver ? 'border-cyan-400 bg-cyan-950/40 ring-4 ring-cyan-400/20' : 'border-cyan-500/30'
                } shadow-2xl backdrop-blur-md transition-all duration-200 group`}
              >
                
                {/* Image element */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={displayPhoto}
                    alt="Jahnavi Pathivada - Cyber Security Student & Developer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-[1.02]"
                  />
                  {/* Subtle vignette scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Real Photo Status Tag */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#07090e]/90 backdrop-blur-md border border-cyan-500/40 text-[11px] font-mono text-cyan-300">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    <span>{realPhoto ? '100% Real Photo' : 'Verified Photo'}</span>
                  </div>

                  {/* Drag-over overlay */}
                  {isDragOver && (
                    <div className="absolute inset-0 bg-cyan-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center text-cyan-300">
                      <Upload className="w-10 h-10 mb-2 animate-bounce" />
                      <p className="text-sm font-semibold">Drop professional.jpeg here</p>
                      <p className="text-xs text-slate-300">100% Real Face Applied Instantly</p>
                    </div>
                  )}

                  {/* Upload Trigger / Change Photo Overlay Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cyan-400 text-slate-950 font-semibold text-xs shadow-lg hover:bg-cyan-300 transition-all cursor-pointer transform hover:scale-105"
                    >
                      <Camera className="w-4 h-4" />
                      <span>{realPhoto ? 'Change Photo' : 'Upload professional.jpeg'}</span>
                    </button>
                    {realPhoto && (
                      <button
                        onClick={handleResetPhoto}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-black/60 text-slate-300 hover:text-white text-[11px] transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset</span>
                      </button>
                    )}
                    <span className="text-[10px] text-slate-300">Or drag & drop professional.jpeg</span>
                  </div>

                  {/* Upload feedback toast */}
                  {uploadSuccess && (
                    <div className="absolute top-12 left-3 right-3 p-2 rounded-lg bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs text-center flex items-center justify-center gap-1.5 shadow-xl animate-in fade-in">
                      <Check className="w-3.5 h-3.5" />
                      <span>100% Real Photo Loaded Successfully!</span>
                    </div>
                  )}

                  {/* Card bottom identity tag */}
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-lg bg-[#07090e]/85 backdrop-blur-md border border-white/[0.08]">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <p className="font-semibold text-white">Jahnavi Pathivada</p>
                        <p className="text-[11px] text-cyan-400 font-mono">B.Tech 2024–2028</p>
                      </div>
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Chips around the photograph */}
                {/* 1. Cybersecurity */}
                <div className="absolute -top-3 -left-3 sm:-left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0b101c]/95 border border-cyan-500/40 text-cyan-300 text-xs font-medium shadow-xl backdrop-blur-md">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Cybersecurity</span>
                </div>

                {/* 2. Web Development */}
                <div className="absolute top-1/4 -right-3 sm:-right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0b101c]/95 border border-indigo-500/40 text-indigo-300 text-xs font-medium shadow-xl backdrop-blur-md">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Web Development</span>
                </div>

                {/* 3. AI */}
                <div className="absolute bottom-20 -left-3 sm:-left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0b101c]/95 border border-purple-500/40 text-purple-300 text-xs font-medium shadow-xl backdrop-blur-md">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span>AI</span>
                </div>

                {/* 4. Problem Solving */}
                <div className="absolute -bottom-3 -right-2 sm:-right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0b101c]/95 border border-emerald-500/40 text-emerald-300 text-xs font-medium shadow-xl backdrop-blur-md">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Problem Solving</span>
                </div>

              </div>

              {/* Direct 1-Click Upload Helper Button under the photo */}
              <div className="mt-3 text-center">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 bg-cyan-950/30 hover:bg-cyan-950/50 border border-cyan-500/30 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{realPhoto ? 'Update 100% Real Photo' : 'Upload professional.jpeg (100% Real Face)'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
