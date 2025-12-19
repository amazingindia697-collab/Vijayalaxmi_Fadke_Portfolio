
import React from 'react';
import { Database, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <Database className="h-5 w-5 text-indigo-400" />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              Vijayalaxmi<span className="text-indigo-400">Fadke</span>
            </span>
          </div>

          <div className="flex gap-8">
             <a href="#home" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">Home</a>
             <a href="#skills" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">Skills</a>
             <a href="#experience" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">Experience</a>
             <a href="#projects" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">Projects</a>
             <a href="#contact" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">Contact</a>
          </div>

          <div className="flex gap-4">
             <a href="#" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-500 hover:text-indigo-400 transition-all">
                <Linkedin className="h-5 w-5" />
             </a>
             <a href="#" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-500 hover:text-white transition-all">
                <Github className="h-5 w-5" />
             </a>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Vijayalaxmi Fadke. All rights reserved.
          </p>
          <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
            Data Analyst Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};
