import React from 'react';
import { CheckCircle2, Play } from 'lucide-react';

interface CampusFeaturesSectionProps {
  onOpenVideo: () => void;
}

export const CampusFeaturesSection: React.FC<CampusFeaturesSectionProps> = ({ onOpenVideo }) => {
  const highlights = [
    'Modern Classrooms & Labs',
    'Vibrant Student Communities',
    'Safe & Inclusive Environment',
    'Top-Notch Facilities',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image Showcase */}
          <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 group">
            <img
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1000"
              alt="Beautiful campus grounds and classic architecture"
              className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                A Campus That <br /> Feels Like Home
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Our beautiful campus provides the perfect environment to learn, grow, and thrive.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-dark shrink-0" />
                  <span className="text-slate-800 font-semibold text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenVideo}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-brand-dark hover:bg-brand-darker text-white font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Take a Virtual Tour</span>
                <Play className="w-4 h-4 fill-white translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
