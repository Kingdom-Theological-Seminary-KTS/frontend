import React from 'react';
import { Target, UserCheck, Globe } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-dark uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 inline-block">
                Why Choose Anti?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Education That Empowers <br className="hidden sm:inline" /> You For Life
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At Anti, we combine academic excellence with practical learning to help you achieve your goals and make a meaningful impact.
            </p>

            {/* Feature List */}
            <div className="space-y-6 pt-2">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-brand-dark shrink-0 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">Industry-Focused Programs</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Learn skills that are relevant, in-demand, and future-ready.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-brand-dark shrink-0 shadow-sm">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">World-Class Faculty</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Study with experienced educators and thought leaders.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-brand-dark shrink-0 shadow-sm">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">Global Opportunities</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Exchange programs, international partnerships, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image Composition matching design grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Left tall image */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                    alt="Students collaborating"
                    className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
                    alt="Campus architecture"
                    className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right stacked image */}
              <div className="pt-8 space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                    alt="Student studying with books"
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Subtle decorative background accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-cream rounded-full blur-2xl opacity-60 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
