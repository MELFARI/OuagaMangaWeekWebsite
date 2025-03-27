
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Cloud animation variants
  const cloudVariants = {
    animate: (i: number) => ({
      x: [0, 15, 0, -15, 0],
      y: [0, 5, 0, -5, 0],
      transition: {
        x: {
          repeat: Infinity,
          duration: 10 + i * 2,
          ease: "easeInOut",
        },
        y: {
          repeat: Infinity,
          duration: 8 + i * 2,
          ease: "easeInOut",
        },
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-200">
      <div className="absolute inset-0 hero-pattern opacity-10"></div>
      
      {/* Floating Akatsuki Clouds */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-0"
          custom={i}
          variants={cloudVariants}
          animate="animate"
          style={{
            top: `${15 + Math.random() * 50}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
        >
          <svg
            width={30 + Math.random() * 50}
            height={20 + Math.random() * 30}
            viewBox="0 0 100 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M95.8,32.6C95.8,32.6,95.8,32.5,95.8,32.6c0.1-0.4,0.1-0.8,0.1-1.2c0-4.5-3.7-8.2-8.2-8.2c-1,0-2,0.2-2.9,0.5
              c-0.3-9.8-8.3-17.6-18.2-17.6c-5.6,0-10.5,2.5-13.9,6.4c-2.5-1.6-5.4-2.5-8.6-2.5c-8.7,0-15.7,7-15.8,15.7c0,0,0,0.1,0,0.1
              c-6,0.9-10.5,6-10.5,12.2c0,6.8,5.5,12.3,12.3,12.3h55.4c5,0,9.3-2.9,11.4-7.1c0,0,0-0.1,0.1-0.1c0.2-0.5,0.4-1,0.5-1.6
              c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.4,0.2-0.8,0.2-1.2c0.1-0.2,0.1-0.4,0.1-0.7c0-0.3,0.1-0.7,0.1-1C98.2,37,97.4,34.6,95.8,32.6z"
              fill={i % 2 === 0 ? "#000000" : "#e53e3e"}
              fillOpacity={0.8 - Math.random() * 0.4}
            />
          </svg>
        </motion.div>
      ))}

      {/* Skyline silhouette */}
      <div className="w-full absolute bottom-0 left-0 right-0 z-10">
        <svg width="100%" height="150" viewBox="0 0 1200 150" preserveAspectRatio="none" className="fill-black">
          <path d="M0,0 L50,0 L50,80 L100,80 L120,50 L150,80 L180,80 L180,50 L220,50 L220,80 L300,80 L300,30 L350,30 L350,80 L400,80 L400,50 L450,50 L450,80 L500,80 L520,30 L580,80 L600,80 L600,40 L650,20 L700,80 L750,80 L750,60 L780,40 L810,60 L810,80 L900,80 L900,30 L950,30 L950,80 L1000,80 L1050,40 L1100,80 L1150,80 L1150,0 L1200,0 L1200,150 L0,150 Z" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <h2 className="inline-block font-manga text-black text-2xl md:text-3xl mb-2 tracking-wide">
              KONOHA TV VOUS SOUHAITE LA BIENVENUE À
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={loaded ? { scale: 1, opacity: 1 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              type: "spring",
              stiffness: 200
            }}
            className="mb-6"
          >
            <img 
              src="/lovable-uploads/6d6e6f27-13df-4bc8-a1eb-f755ddda3a9b.png" 
              alt="Ouaga Manga Week" 
              className="h-32 md:h-40 mx-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mb-12"
          >
            <div className="inline-block bg-white text-black font-bold text-xl md:text-3xl py-2 px-8 border-4 border-black transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]">
              DU 9 AU 13 JUILLET 2024 !!!
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mb-8"
          >
            <h3 className="text-black text-2xl md:text-4xl font-bold mb-3 tracking-wide" style={{ textTransform: 'uppercase' }}>
              LA 3ÈME SEMAINE OTAKU DU BURKINA!!!
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={loaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button className="bg-black text-white hover:bg-black/80 text-lg group px-8 py-6">
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
            <Button variant="outline" className="text-lg border-black text-black hover:bg-black/10 px-8 py-6">
              Voir le Programme
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
