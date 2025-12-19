
import React from 'react';
import { Database, Code, BarChart2, Globe, Wrench, Users, MessageSquare, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code className="h-5 w-5 text-indigo-400" />,
    skills: ['Python', 'R']
  },
  {
    title: 'Database',
    icon: <Database className="h-5 w-5 text-emerald-400" />,
    skills: ['SQL (MySQL)']
  },
  {
    title: 'Web Technologies',
    icon: <Globe className="h-5 w-5 text-violet-400" />,
    skills: ['HTML', 'CSS']
  },
  {
    title: 'Visualization',
    icon: <BarChart2 className="h-5 w-5 text-amber-400" />,
    skills: ['Power BI', 'Tableau', 'MS Excel']
  },
  {
    title: 'Tools',
    icon: <Wrench className="h-5 w-5 text-rose-400" />,
    skills: ['VS Code', 'MS-Office (Excel, Power Point)', 'Jupyter']
  },
  {
    title: 'Soft Skills',
    icon: <Users className="h-5 w-5 text-cyan-400" />,
    skills: ['Communication', 'Problem Solving', 'Project Management', 'Time Management']
  }
];

export const Skills: React.FC = () => {
  return (
    <div className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-indigo-400 font-bold text-sm uppercase tracking-[0.3em] mb-4">Core Competencies</h2>
          <p className="text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-zinc-500">Toolkit.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] bg-zinc-900 border border-zinc-800 hover:border-indigo-500/30 transition-all group shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 text-xs font-medium group-hover:text-zinc-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
