
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Progress } from "@/components/ui/progress";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 200);

    return () => clearInterval(interval);
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
    <div className="h-screen w-full bg-gray-200 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Logo */}
      <motion.div 
        className="absolute top-5 right-5 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img 
          src="/lovable-uploads/6d6e6f27-13df-4bc8-a1eb-f755ddda3a9b.png" 
          alt="Ouaga Manga Week" 
          className="w-40 h-auto"
        />
      </motion.div>

      {/* Skyline silhouette */}
      <div className="w-full absolute bottom-0 left-0 right-0">
        <svg width="100%" height="120" viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-black">
          <path d="M0,0 L50,0 L50,80 L100,80 L120,50 L150,80 L180,80 L180,50 L220,50 L220,80 L300,80 L300,30 L350,30 L350,80 L400,80 L400,50 L450,50 L450,80 L500,80 L520,30 L580,80 L600,80 L600,40 L650,20 L700,80 L750,80 L750,60 L780,40 L810,60 L810,80 L900,80 L900,30 L950,30 L950,80 L1000,80 L1050,40 L1100,80 L1150,80 L1150,0 L1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Mascot */}
      <motion.div 
        className="mb-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="w-16 h-16 bg-white rounded-full overflow-hidden flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full relative">
            {/* Cat face */}
            <div className="absolute top-2 left-2 w-8 h-6 flex justify-between">
              {/* Eyes */}
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
            </div>
            {/* Green leaf/attachment */}
            <div className="absolute -top-1 -right-2 w-4 h-8 bg-green-500 rounded-full transform rotate-45"></div>
            {/* Red dots */}
            <div className="absolute bottom-2 left-4 w-1.5 h-1.5 rounded-full bg-red-500"></div>
            <div className="absolute bottom-4 left-6 w-1.5 h-1.5 rounded-full bg-red-500"></div>
          </div>
        </div>
      </motion.div>

      {/* Loading bar */}
      <div className="w-full max-w-md px-4 z-10">
        <div className="bg-white p-2 rounded border-2 border-black">
          <Progress value={progress} className="h-6 bg-white border border-black" />
        </div>
        <motion.div 
          className="text-center text-2xl font-mono mt-2 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          LOADING...
        </motion.div>
      </div>

      {/* Floating clouds */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          custom={i}
          variants={cloudVariants}
          animate="animate"
          style={{
            top: `${20 + Math.random() * 40}%`,
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
              fill="#000000"
              fillOpacity="0.9"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default Loading;
