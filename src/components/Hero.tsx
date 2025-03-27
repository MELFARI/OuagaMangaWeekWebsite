
import { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const loadingInterval = useRef<NodeJS.Timeout | null>(null);

  const progressControls = useAnimation();

  useEffect(() => {
    // Simulate loading progress
    loadingInterval.current = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval.current as NodeJS.Timeout);
          setTimeout(() => setLoaded(true), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 200);

    return () => {
      if (loadingInterval.current) clearInterval(loadingInterval.current);
    };
  }, []);

  useEffect(() => {
    progressControls.start({ width: `${loadingProgress}%` });
  }, [loadingProgress, progressControls]);

  // Akatsuki clouds animation config
  const cloudVariants = {
    animate: (i: number) => ({
      x: ["0%", "100%"],
      y: [0, i % 3 === 0 ? -20 : i % 3 === 1 ? 10 : -10],
      transition: {
        x: {
          duration: 25 + i * 5,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "linear",
        },
        y: {
          duration: 6 + i * 0.5,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut",
        },
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with Akatsuki clouds */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        {/* Red sun in the background */}
        <div className="absolute right-1/4 top-1/4 w-40 h-40 md:w-64 md:h-64 bg-red-600 rounded-full opacity-70"></div>
        
        {/* Akatsuki clouds */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cloudVariants}
            animate="animate"
            className="absolute"
            style={{
              top: `${10 + Math.random() * 60}%`,
              left: `${-20 + Math.random() * 20}%`,
              opacity: 0.6 + Math.random() * 0.4,
            }}
          >
            <svg 
              width={50 + Math.random() * 50} 
              height={30 + Math.random() * 30}
              viewBox="0 0 100 60" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M80.9,30.2c0-0.2,0.1-0.4,0.1-0.6c0-6.2-5-11.2-11.2-11.2c-3.6,0-6.7,1.7-8.7,4.3C58.9,16.9,53.4,13,47,13
                c-7.2,0-13.2,5-14.8,11.7c-0.6-0.1-1.3-0.2-1.9-0.2c-5.1,0-9.2,4.1-9.2,9.2c0,5.1,4.1,9.2,9.2,9.2h48.6c0.3,0,0.6,0,0.9-0.1
                c4.1-0.5,7.3-4,7.3-8.3C87,31.5,84.2,28.6,80.9,30.2z" 
                fill="#FF2D2D" 
                stroke="#FFFFFF" 
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        ))}
      </div>
      
      <AnimatePresence>
        {!loaded ? (
          // Loading screen
          <motion.div 
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/lovable-uploads/6a369d7b-b2b2-41ef-b478-5f14a118e512.png" 
                alt="Ouaga Manga Week Logo" 
                className="w-64 h-auto object-contain" 
              />
            </motion.div>
            
            <div className="flex flex-col items-center">
              <div className="w-64 md:w-80 h-6 bg-white/10 border-2 border-white/30 rounded-sm overflow-hidden mb-2">
                <motion.div 
                  className="h-full bg-red-600" 
                  animate={progressControls}
                  initial={{ width: "0%" }}
                />
              </div>
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/d749d1f4-f3b0-4931-8e92-bb89d4f58c1e.png" 
                  alt="Loading icon" 
                  className="w-8 h-8 mr-2"
                />
                <div className="text-white font-mono text-sm">LOADING... {loadingProgress}%</div>
              </div>
            </div>
          </motion.div>
        ) : (
          // Main content
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-8"
              >
                <img 
                  src="/lovable-uploads/9a954d58-d9b3-4b86-89bf-37de95a28806.png" 
                  alt="Ouaga Manga Week Logo" 
                  className="w-64 mx-auto md:w-80 lg:w-96 h-auto object-contain" 
                />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-12"
              >
                <img 
                  src="/lovable-uploads/12cae32b-1c69-47a5-8ede-8ed674f7b152.png" 
                  alt="Ouaga Manga Week 3 Announcement" 
                  className="w-full max-w-3xl mx-auto h-auto object-contain" 
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mb-12"
              >
                <div className="inline-block bg-red-600 text-white font-bold text-xl md:text-3xl py-2 px-8 border-4 border-black transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]">
                  DU 9 AU 13 JUILLET 2024 !!!
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="mb-8"
              >
                <h3 className="text-white text-2xl md:text-4xl font-bold mb-3 tracking-wide shadow-manga" style={{ textTransform: 'uppercase' }}>
                  LA 3ÈME SEMAINE OTAKU DU BURKINA!!!
                </h3>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button className="btn-manga text-lg group px-8 py-6 bg-red-600 hover:bg-red-700">
                  <span className="mr-2">S'inscrire</span>
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
                <Button variant="outline" className="text-lg border-white text-white hover:bg-white/10 px-8 py-6">
                  Voir le Programme
                </Button>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
