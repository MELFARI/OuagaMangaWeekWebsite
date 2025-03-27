
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import AnimeCharacters from '@/components/AnimeCharacters';
import Schedule from '@/components/Schedule';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import MiniGame from '@/components/MiniGame';

// Add framer-motion dependency
import { AnimatePresence, motion } from 'framer-motion';

const Index = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Welcome toast notification
      toast({
        title: "Bienvenue à Ouaga Manga Week!",
        description: "La première semaine otaku du Burkina Faso, du 9 au 13 juillet 2024.",
        variant: "default",
      });
    }, 5000); // 5 seconds loading screen

    return () => clearTimeout(timer);
  }, [toast]);

  if (loading) {
    return <Loading />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <Hero />
        <About />
        <AnimeCharacters />
        <Schedule />
        
        {/* Add the MiniGame component before Partners */}
        <section id="game" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mx-auto">Mini Jeu</h2>
            <p className="text-center mb-10 max-w-2xl mx-auto">
              Amusez-vous avec notre mini-jeu pendant que vous explorez le site de Ouaga Manga Week!
            </p>
            <MiniGame />
          </div>
        </section>
        
        <Partners />
        <Contact />
        <Footer />

        {/* Scroll to top button */}
        <motion.button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-manga-red text-white flex items-center justify-center shadow-lg hover:bg-manga-red/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-manga-red"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
