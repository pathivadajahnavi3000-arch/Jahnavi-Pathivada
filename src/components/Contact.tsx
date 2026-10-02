import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate reliable submission
    setIsSubmitted(true);
    
    // Construct mailto for instant email dispatch if preferred
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>08</span>
            <span aria-hidden="true">·</span>
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Have an internship opening, technical project proposal, or would like to discuss cybersecurity and software development? Reach out directly.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-6">
              
              <h3 className="text-lg font-bold text-white tracking-tight">
                Direct Contact Information
              </h3>

              {/* Email Block */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Email Address
                </span>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-white/[0.06]">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs sm:text-sm text-slate-200 hover:text-cyan-300 font-mono truncate"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                    <Check className="w-3 h-3" /> Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location Block */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Location
                </span>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-white/[0.06]">
                  <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-sm text-slate-200 font-medium">
                    {profile.location}
                  </span>
                </div>
              </div>

              {/* Professional Profiles */}
              <div className="space-y-3 pt-2 border-t border-white/[0.06]">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/[0.06] hover:border-cyan-500/30 text-xs text-slate-300 hover:text-cyan-300 transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      <span className="font-medium">LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-300" />
                  </a>

                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/[0.06] hover:border-cyan-500/30 text-xs text-slate-300 hover:text-cyan-300 transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-indigo-400" />
                      <span className="font-medium">GitHub</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-300" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-start gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  All communications are handled securely. Expect responses within 24–48 business hours.
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
              
              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the form below to initiate a conversation or request a technical interview.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Dispatched
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name}! Your message details have been prepared for direct delivery to <span className="font-mono text-cyan-400">{profile.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                        errors.name ? 'border-red-500' : 'border-white/[0.08]'
                      } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. recruiter@organization.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                        errors.email ? 'border-red-500' : 'border-white/[0.08]'
                      } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Describe the opportunity, project context, or inquiry..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                        errors.message ? 'border-red-500' : 'border-white/[0.08]'
                      } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-y`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl shadow-lg shadow-cyan-500/20 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
