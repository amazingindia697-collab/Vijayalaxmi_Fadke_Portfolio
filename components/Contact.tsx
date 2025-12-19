
import React from 'react';
import { Mail, Phone, Globe, MessageSquare, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-bold text-sm uppercase tracking-[0.3em] mb-4">Connect</h2>
          <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-zinc-500">Touch.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <a href="#" className="group flex flex-col items-center p-10 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] hover:border-indigo-500/50 transition-all shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Linkedin className="h-8 w-8 text-indigo-400" />
            </div>
            <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-2">LinkedIn</p>
            <p className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">Vijayalaxmi Fadke</p>
          </a>

          <a href="mailto:your-email@example.com" className="group flex flex-col items-center p-10 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] hover:border-emerald-500/50 transition-all shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="h-8 w-8 text-emerald-400" />
            </div>
            <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-2">Email</p>
            <p className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">Send an Email</p>
          </a>

          <a href="#" className="group flex flex-col items-center p-10 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] hover:border-violet-500/50 transition-all shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Github className="h-8 w-8 text-violet-400" />
            </div>
            <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-2">GitHub</p>
            <p className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">Explore Repository</p>
          </a>
        </div>
      </div>
    </div>
  );
};
