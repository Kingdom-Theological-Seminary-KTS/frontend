import React from 'react';
import { ArrowRight } from 'lucide-react';
import { eventsData, quickLinksData } from '../../data/universityData';

export const EventsAndLinksSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Upcoming Events (Dark Emerald Box / Panel) */}
          <div className="lg:col-span-7 bg-brand-darker rounded-3xl p-8 sm:p-10 border border-emerald-900/60 shadow-2xl space-y-8">
            <div className="flex items-end justify-between border-b border-emerald-900/60 pb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Upcoming Events
                </h2>
                <p className="text-emerald-200/80 text-sm mt-1">
                  Don't miss out on exciting events happening on campus.
                </p>
              </div>
              <a
                href="#all-events"
                className="text-xs font-bold text-emerald-400 hover:text-white transition-colors hidden sm:inline"
              >
                View All Events
              </a>
            </div>

            {/* Events List */}
            <div className="space-y-6">
              {eventsData.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start gap-5 p-4 rounded-2xl bg-emerald-950/50 hover:bg-emerald-900/40 border border-emerald-800/40 transition-colors group cursor-pointer"
                >
                  {/* Date Badge */}
                  <div className="w-16 h-16 rounded-xl bg-white text-brand-dark flex flex-col items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <span className="text-xl font-extrabold leading-none">{event.day}</span>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-brand-medium">{event.month}</span>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quick Links */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Quick Links
              </h2>
              <div className="w-12 h-1 bg-brand-gold rounded-full" />
            </div>

            <div className="space-y-3">
              {quickLinksData.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="flex items-center justify-between py-3 px-4 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 border border-white/5 transition-all group"
                >
                  <span className="text-sm font-medium">{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 transition-transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
