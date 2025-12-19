
import React from 'react';
import { ArrowRight, Linkedin, Github, Database, Code, BarChart } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Data Analyst
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400">
                Vijayalaxmi Fadke
              </span>
            </h1>
            
            <p className="mt-4 text-lg md:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Diligent BCA graduate with a strong foundation in <span className="text-zinc-100 font-semibold">Data Analysis</span>, proficient in <span className="text-indigo-400 font-semibold">Python, SQL, Excel and Power BI</span>. Eager to apply analytical skills in real-world scenarios by contributing to data-driven projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-600/20 hover:scale-[1.02] active:scale-95"
              >
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-bold rounded-2xl border border-zinc-800 transition-all hover:border-zinc-700"
              >
                Hire Me
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
              <a href="#" className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-indigo-400 transition-all">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-all">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-float">
               <div className="relative rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-3xl p-4 shadow-2xl">
                  <div className="flex items-center justify-between mb-4 px-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono tracking-tighter">ANALYTICS_DASHBOARD</div>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                    alt="Data Analytics" 
                    className="rounded-2xl grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 aspect-[4/3] object-cover border border-zinc-800"
                  />
                  
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800">
                       <Database className="h-5 w-5 text-indigo-400 mb-2" />
                       <p className="text-xl font-bold text-white">Power BI</p>
                       <p className="text-xs text-zinc-500 font-medium">Visualization</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800">
                       <Code className="h-5 w-5 text-emerald-400 mb-2" />
                       <p className="text-xl font-bold text-white">SQL</p>
                       <p className="text-xs text-zinc-500 font-medium">Data Querying</p>
                    </div>
                  </div>
               </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/20 blur-[150px] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
