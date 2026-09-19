import React from 'react';
import { ArrowRight, Play, Users, GraduationCap, BookOpen, Award } from 'lucide-react';
import { statsData } from '../../data/universityData';

interface HeroSectionProps {
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenVideo }) => {
  const getStatIcon = (id: string) => {
    switch (id) {
      case '1': return <Users className="w-6 h-6 text-brand-goldLight" />;
      case '2': return <GraduationCap className="w-6 h-6 text-brand-goldLight" />;
      case '3': return <BookOpen className="w-6 h-6 text-brand-goldLight" />;
      case '4': return <Award className="w-6 h-6 text-brand-goldLight" />;
      default: return <GraduationCap className="w-6 h-6 text-brand-goldLight" />;
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Background Image Container with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=85&w=1920"
          alt="Anti University Campus"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Emerald / Slate Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-brand-darkest/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-12 pb-16 md:py-20 text-white space-y-6">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] font-sans">
            Shaping Minds. <br />
            Building Futures. <br />
            Changing Lives.
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl pt-2">
            Join Anti and be part of a global community of learners and leaders.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#programs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-cream hover:bg-white text-brand-dark font-bold text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Explore Programs <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenVideo}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-md border border-white/20 transition-all duration-200 group"
            >
              <div className="w-9 h-9 rounded-full bg-white text-brand-dark flex items-center justify-center transition-transform group-hover:scale-110 shadow-md">
                <Play className="w-4 h-4 fill-brand-dark translate-x-0.5" />
              </div>
              <span>Play Campus Tour</span>
            </button>
          </div>
        </div>

        {/* Stats Overlay Bar */}
        <div className="mt-6 lg:mt-12 bg-brand-dark/95 backdrop-blur-md border border-emerald-800/50 rounded-2xl p-6 sm:p-8 shadow-hero-stat">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-emerald-800/50">
            {statsData.map((stat, index) => (
              <div
                key={stat.id}
                className={`flex items-center gap-4 ${index !== 0 ? 'pt-4 md:pt-0 md:pl-6 lg:pl-8' : ''}`}
              >
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/60 shrink-0">
                  {getStatIcon(stat.id)}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.count}
                  </div>
                  <div className="text-xs sm:text-sm text-emerald-100 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
