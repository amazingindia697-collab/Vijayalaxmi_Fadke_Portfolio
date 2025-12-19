
import React, { useState, useEffect } from 'react';
import { Menu, X, Database, Terminal } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[60] transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl group-hover:rotate-6 transition-transform">
                <Database className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Vijayalaxmi<span className="text-indigo-400">.Data</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${activeSection === item.href.substring(1) 
                    ? 'text-indigo-400 bg-indigo-500/10' 
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute w-full bg-zinc-900 border-b border-zinc-800 transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all
                ${activeSection === item.href.substring(1)
                  ? 'text-indigo-400 bg-indigo-500/10'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
