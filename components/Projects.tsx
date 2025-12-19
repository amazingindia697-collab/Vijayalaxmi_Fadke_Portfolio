
import React from 'react';
import { ExternalLink, Layers, Car, Globe, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'Electric Car Data Clean Analysis',
    icon: <Car className="h-6 w-6 text-emerald-400" />,
    description: [
      'Performed exploratory data analysis (EDA) on an electric car dataset to uncover trends in battery range, charging time, and pricing.',
      'Utilized Python (Pandas, Numpy, Matplotlib, Seaborn) to clean and visualize data for meaningful insights.',
      'Created visualization dashboard using Power BI to easily understand the dataset.'
    ],
    tags: ['Python', 'EDA', 'Power BI', 'Data Cleaning']
  },
  {
    title: 'LinkedIn Job Posting Analysis',
    icon: <TrendingUp className="h-6 w-6 text-indigo-400" />,
    description: [
      'Project aimed to identify job trends, understand job requirements, and predict company hiring strategies.',
      'Analysed LinkedIn job postings data to identify in-demand skills and hiring patterns across industries.',
      'Used Python and Power BI to process, visualize, and present data-driven insights.'
    ],
    tags: ['Python', 'Power BI', 'Trend Analysis', 'Market Research']
  },
  {
    title: 'Weather Dashboard',
    icon: <Globe className="h-6 w-6 text-violet-400" />,
    description: [
      'Developed a responsive weather forecasting dashboard using HTML, CSS, JavaScript, and integrated weather APIs.',
      'Displayed real-time weather updates with features like location-based data and forecast visualization.',
      'Focused on user-friendly UI and clean interface.'
    ],
    tags: ['HTML/CSS', 'JavaScript', 'API Integration', 'UI Design']
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-indigo-400 font-bold text-sm uppercase tracking-[0.3em] mb-4">Featured Work</h2>
          <p className="text-4xl font-extrabold text-white tracking-tight">
            Portfolio <span className="text-zinc-500">Showcase.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-zinc-900 border border-zinc-800 hover:border-indigo-500/30 p-10 rounded-[2.5rem] transition-all duration-500 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <ul className="space-y-4 mb-8">
                {project.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start text-zinc-400 text-sm leading-relaxed">
                    <span className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
                    {tag}
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
