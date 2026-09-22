import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { VideoModal } from './components/common/VideoModal';
import { HeroSection } from './features/hero/HeroSection';
import { WhyChooseUsSection } from './features/why-choose-us/WhyChooseUsSection';
import { ProgramsSection } from './features/programs/ProgramsSection';
import { CampusLifeSection } from './features/campus-life/CampusLifeSection';
import { NewsSection } from './features/news/NewsSection';
import { TestimonialsSection } from './features/testimonials/TestimonialsSection';
import { EventsAndLinksSection } from './features/events-links/EventsAndLinksSection';
import { JourneyCtaSection } from './features/journey-cta/JourneyCtaSection';
import { CampusFeaturesSection } from './features/campus-features/CampusFeaturesSection';
import { NewsletterSection } from './features/newsletter/NewsletterSection';

export function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleOpenVideo = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-dark selection:text-white flex flex-col">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onOpenVideo={handleOpenVideo} />
        <WhyChooseUsSection />
        <ProgramsSection />
        <CampusLifeSection onOpenVideo={handleOpenVideo} />
        <NewsSection />
        <TestimonialsSection />
        <EventsAndLinksSection />
        <JourneyCtaSection />
        <CampusFeaturesSection onOpenVideo={handleOpenVideo} />
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={handleCloseVideo} />
    </div>
  );
}

export default App;
