import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-brand-darkest text-white py-20">
      {/* Background Photography with Dark Emerald Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600"
          alt="Students outdoors on campus"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darkest via-brand-darker/90 to-brand-darkest/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Stay Connected
          </h2>
          <p className="text-emerald-100/90 text-base leading-relaxed">
            Subscribe to our newsletter for updates, events, and inspiring stories.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="pt-2">
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-md"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl bg-brand-cream hover:bg-white text-brand-dark font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-xl shrink-0"
              >
                Subscribe
              </button>
            </div>
          </form>

          {/* Submission Feedback Toast */}
          {isSubscribed && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-900/90 border border-emerald-500/50 text-emerald-200 text-xs font-semibold animate-fade-in">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Thank you for subscribing to Anti University updates!</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
