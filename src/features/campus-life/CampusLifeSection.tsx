import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface CampusLifeSectionProps {
  onOpenVideo: () => void;
}

export const CampusLifeSection: React.FC<CampusLifeSectionProps> = ({ onOpenVideo }) => {
  return (
    <section id="campus-life" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner container with deep green left card & rich background photography */}
        <div className="relative overflow-hidden rounded-3xl bg-brand-darkest text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            {/* Left Column (Text & CTAs) */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center relative z-10 bg-gradient-to-r from-brand-darkest via-brand-darker to-transparent">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Campus Life <br />
                  Beyond <br />
                  Classrooms
                </h2>
                <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                  From clubs and events to sports and volunteering, life at Anti is about learning, growing, and making unforgettable memories.
                </p>
                <div className="pt-2">
                  <a
                    href="#campus-life-details"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-cream hover:bg-white text-brand-dark font-bold text-sm transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                  >
                    Discover More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (Image with Play Button Overlay) */}
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=85&w=1200"
                alt="Students outdoors on campus ground"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-slate-950/20" />

              {/* Play Tour Button Floating Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={onOpenVideo}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-brand-dark flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group backdrop-blur-sm"
                  aria-label="Play video preview of campus life"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-brand-dark translate-x-0.5 transition-transform group-hover:scale-110" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
