
import React from 'react';
import { Award, ShieldCheck, Zap } from 'lucide-react';

const certifications = [
  {
    title: 'Data Science and Analytics Course',
    issuer: 'Ethans',
    date: 'Pursuing',
  },
  {
    title: 'Power BI Program',
    issuer: 'Edureka',
    date: '2024',
  },
  {
    title: 'Diploma in Office Automation',
    issuer: 'Google Computer Academy',
    date: 'Completed',
  },
  {
    title: 'Tally ERP.9 with GST',
    issuer: 'Google Computer Academy',
    date: 'Completed',
  },
  {
    title: 'Digital 101 Journey',
    issuer: 'Futureskills Prime',
    date: 'Completed',
  },
  {
    title: 'Essay Writing',
    issuer: 'DMS Mandal’s College of Computer Applications',
    date: 'Awarded',
  }
];

export const Certifications: React.FC = () => {
  return (
    <div className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-bold text-sm uppercase tracking-[0.3em] mb-4">Qualifications</h2>
          <p className="text-4xl font-extrabold text-white tracking-tight">
            Courses & <span className="text-zinc-500 italic">Certifications.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="group relative bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 p-8 rounded-3xl transition-all duration-500 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Award className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                   <ShieldCheck className="h-4 w-4 text-emerald-500/60" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight mb-4">
                {cert.title}
              </h3>
              
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-sm font-semibold text-zinc-100">{cert.issuer}</p>
                <p className="text-xs text-zinc-500 mt-1">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
