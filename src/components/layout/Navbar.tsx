import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ArrowRight } from 'lucide-react';
import type { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Campus Life', href: '#campus-life' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
          : 'bg-white py-4 border-b border-slate-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-brand-dark flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
              <Shield className="w-6 h-6 fill-white/10" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 font-sans">
                Anti
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] font-medium text-slate-700 hover:text-brand-dark transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-dark hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#apply"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-brand-dark hover:bg-brand-darker text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Apply Now
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:text-brand-dark hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 border-t border-slate-100 animate-slide-up">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-700 hover:text-brand-dark hover:bg-emerald-50/50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#apply"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-brand-dark text-white font-semibold shadow-md"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
