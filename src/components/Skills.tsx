import React, { useState } from 'react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';
import { Code, Globe, Shield, Layout, Lightbulb, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    Programming: <Code className="w-4 h-4 text-cyan-400" />,
    'Web Development': <Globe className="w-4 h-4 text-indigo-400" />,
    Cybersecurity: <Shield className="w-4 h-4 text-purple-400" />,
    'Design & Productivity': <Layout className="w-4 h-4 text-emerald-400" />,
    'Development Approach': <Lightbulb className="w-4 h-4 text-amber-400" />,
  };

  const categories = ['All', ...skills.map((s) => s.category)];

  const filteredCategories: SkillCategory[] =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-white/[0.06] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span>02</span>
              <span aria-hidden="true">·</span>
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills & Proficiencies
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Categorized core competencies developed through coursework, project implementation, and self-directed study.
            </p>
          </div>

          {/* Interactive Category Filter Controls (Buttons allowed per Constitution) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-white/[0.08] backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          {filteredCategories.map((group) => (
            <div key={group.category} className="space-y-4">
              
              {/* Category Subheading & Meta */}
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    {categoryIcons[group.category]}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {group.category}
                    </h3>
                  </div>
                </div>
                <span className="text-xs text-slate-400 hidden sm:inline-block">
                  {group.description}
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group glass-panel rounded-xl p-4 border border-white/[0.07] hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5 relative overflow-hidden"
                  >
                    {/* Subtle top indicator on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </div>
                        {skill.context && (
                          <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {skill.context}
                          </div>
                        )}
                      </div>
                      <Sparkles className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0 mt-0.5 opacity-60 group-hover:opacity-100" />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Note on genuine skills evaluation */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-white/[0.05] flex items-center justify-between text-xs text-slate-400">
          <span>Demonstrated via coursework, GitHub repositories, and live implementations.</span>
          <span className="font-mono text-cyan-400">Authentic Competencies</span>
        </div>

      </div>
    </section>
  );
};
