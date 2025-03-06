
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Add framer-motion dependency
import { AnimatePresence } from 'framer-motion';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome toast notification
    setTimeout(() => {
      toast({
        title: "Bienvenue à Ouaga Manga Week!",
        description: "La première semaine otaku du Burkina Faso, du 9 au 13 juillet 2024.",
        variant: "default",
      });
    }, 2000);
  }, [toast]);

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Schedule />
        <Partners />
        <Contact />
        <Footer />

        {/* Scroll to top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-manga-red text-white flex items-center justify-center shadow-lg hover:bg-manga-red/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-manga-red"
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </AnimatePresence>
  );
};

export default Index;
