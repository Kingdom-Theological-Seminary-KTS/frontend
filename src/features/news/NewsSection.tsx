import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { newsData } from '../../data/universityData';

export const NewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              News & Updates
            </h2>
            <p className="mt-2 text-slate-600 text-base">
              Stay informed with the latest from Anti.
            </p>
          </div>
          <a
            href="#all-news"
            className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-darker transition-colors text-sm group"
          >
            <span>View All News</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-brand-dark flex items-center gap-1.5 shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-brand-dark" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-dark transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <div className="pt-2">
                  <a
                    href="#read-news"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark hover:text-brand-darker transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
