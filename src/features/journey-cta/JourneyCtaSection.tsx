import React from 'react';
import { ArrowRight } from 'lucide-react';

export const JourneyCtaSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-cream border border-brand-sand rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              Apply now and take the first step toward a brighter future with Anti.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#apply"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brand-dark hover:bg-brand-darker text-white font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
