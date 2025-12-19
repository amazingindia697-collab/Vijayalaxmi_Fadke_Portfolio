
import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: '1',
    role: 'Intern | Data Science',
    company: 'Edureka',
    period: 'May 2024',
    type: 'Internship',
    description: [
      'Worked as a Data Analyst Intern focusing on data visualization and basic data processing.',
      'Utilized Python for data cleaning and exploratory data analysis (EDA).',
      'Created interactive dashboards and reports using Power BI to support data-driven decision-making.'
    ]
  },
  {
    id: '2',
    role: 'Intern | Software Developer',
    company: 'Capabl',
    period: 'August 2024',
    type: 'Internship',
    description: [
      'Contributed to front-end development using HTML, CSS, and JavaScript.',
      'Applied Python for backend scripting and basic automation tasks.',
      'Collaborated on small-scale projects simulating real-world software development workflows.'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <div className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-indigo-400 font-bold text-sm uppercase tracking-[0.3em] mb-4">Internships</h2>
          <p className="text-4xl font-extrabold text-white tracking-tight">
            Learning <span className="text-zinc-500 italic">History.</span>
          </p>
        </div>

        <div className="relative space-y-12">
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-zinc-800 to-transparent"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-10 md:pl-0">
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center z-10 shadow-xl ring-4 ring-zinc-950">
                <Briefcase className="h-4 w-4 text-indigo-400" />
              </div>

              <div className={`md:flex items-start gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                  <div className="group bg-zinc-900/40 border border-zinc-800 hover:border-indigo-500/30 p-8 rounded-[2rem] transition-all duration-500 hover:bg-zinc-900/60 shadow-xl relative overflow-hidden">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-3 border border-indigo-500/20">
                          {exp.type}
                        </span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">{exp.role}</h3>
                        <p className="text-zinc-400 font-medium mt-1 flex items-center gap-2">
                           <ChevronRight className="h-4 w-4 text-zinc-600" /> {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-zinc-500 text-sm font-semibold mb-1">
                          <Calendar className="h-4 w-4 mr-2 text-zinc-600" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-zinc-400 text-sm leading-relaxed">
                          <span className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
