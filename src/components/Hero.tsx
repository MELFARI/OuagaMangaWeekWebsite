
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-manga-red">
      <div className="absolute inset-0 hero-pattern opacity-10"></div>
      
      {/* Dragon Balls Decoration */}
      <div className="absolute w-full h-full">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-400 opacity-70 animate-float"
            style={{
              top: `${10 + Math.random() * 60}%`,
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${i * 0.3}s`,
              boxShadow: 'inset 3px 3px 15px rgba(255,255,0,0.5), inset -3px -3px 15px rgba(255,140,0,0.5), 0 0 20px rgba(255,230,0,0.5)',
              border: '2px solid rgba(255,180,0,0.8)'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(Math.floor(Math.random() * 3) + 2)].map((_, j) => (
                <div
                  key={j}
                  className="absolute rounded-full bg-red-600"
                  style={{
                    width: `${20 + j * 15}%`,
                    height: `${20 + j * 15}%`,
                    opacity: 0.9 - j * 0.2
                  }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <h2 className="inline-block font-manga text-white text-2xl md:text-3xl mb-2 tracking-wide shadow-manga">
              KONOHA TV VOUS SOUHAITE LA BIENVENUE À
            </h2>
          </motion.div>
          
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={loaded ? { scale: 1, opacity: 1 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              type: "spring",
              stiffness: 200
            }}
            className="font-ninja text-5xl md:text-7xl lg:text-9xl font-bold mb-6 text-white shadow-manga"
          >
            <span className="inline-block">OUAGA</span> <br />
            <span className="inline-block">MANGA</span> <br />
            <span className="inline-block">WEEK!!</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mb-12"
          >
            <div className="inline-block bg-white text-manga-red font-bold text-xl md:text-3xl py-2 px-8 border-4 border-manga-black transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]">
              DU 9 AU 13 JUILLET 2024 !!!
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mb-8"
          >
            <h3 className="text-white text-2xl md:text-4xl font-bold mb-3 tracking-wide shadow-manga" style={{ textTransform: 'uppercase' }}>
              LA 1ÈRE SEMAINE OTAKU DU BURKINA!!!
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={loaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button className="btn-manga text-lg group px-8 py-6">
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
    </section>
  );
};

export default Hero;
