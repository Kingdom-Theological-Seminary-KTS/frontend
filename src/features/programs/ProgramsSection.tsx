import React from 'react';
import { ArrowRight, Building2, Laptop, Cpu, BarChart3, Brain } from 'lucide-react';
import { programsData } from '../../data/universityData';

export const ProgramsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-8 h-8 text-brand-dark" />;
      case 'Laptop': return <Laptop className="w-8 h-8 text-brand-dark" />;
      case 'Cpu': return <Cpu className="w-8 h-8 text-brand-dark" />;
      case 'BarChart3': return <BarChart3 className="w-8 h-8 text-brand-dark" />;
      case 'Brain': return <Brain className="w-8 h-8 text-brand-dark" />;
      default: return <Building2 className="w-8 h-8 text-brand-dark" />;
    }
  };

  return (
    <section id="programs" className="py-20 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Popular Programs
            </h2>
            <p className="mt-2 text-slate-600 text-base">
              Explore our top-rated programs designed to shape your future.
            </p>
          </div>
          <a
            href="#all-programs"
            className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-darker transition-colors text-sm group"
          >
            <span>View All Programs</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {programsData.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-card-hover hover:border-brand-dark/30 transition-all duration-300 group flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                <div className="group-hover:[&_svg]:text-white transition-colors">
                  {getIcon(program.iconName)}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-brand-dark transition-colors">
                {program.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed hidden sm:block">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
