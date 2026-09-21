import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/universityData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Student Success Stories
            </h2>
            <p className="mt-2 text-slate-600 text-base">
              Hear from our students and alumni who are making an impact around the world.
            </p>
          </div>
          <a
            href="#all-stories"
            className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-darker transition-colors text-sm group"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => {
            const isPrimary = item.isPrimary;
            return (
              <div
                key={item.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPrimary
                    ? 'bg-brand-dark text-white shadow-xl scale-105 z-10 border border-emerald-800'
                    : 'bg-slate-50 text-slate-800 border border-slate-200/80 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote
                    className={`w-8 h-8 ${
                      isPrimary ? 'text-brand-goldLight fill-brand-goldLight/20' : 'text-slate-400 fill-slate-200'
                    }`}
                  />
                </div>

                {/* Quote Text */}
                <p
                  className={`text-base leading-relaxed mb-8 ${
                    isPrimary ? 'text-emerald-50 font-medium' : 'text-slate-600'
                  }`}
                >
                  "{item.quote}"
                </p>

                {/* Author Profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-current/10">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/30"
                  />
                  <div>
                    <h4 className={`font-bold text-sm ${isPrimary ? 'text-white' : 'text-slate-900'}`}>
                      {item.name}
                    </h4>
                    <p className={`text-xs ${isPrimary ? 'text-emerald-200' : 'text-slate-500'}`}>
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
