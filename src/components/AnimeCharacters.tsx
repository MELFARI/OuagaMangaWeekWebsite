
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimeCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const ref = useRef(null);
  
  const characters = [
    {
      id: 1,
      name: "Naruto Uzumaki",
      anime: "Naruto",
      image: "https://i.imgur.com/rQlQYRM.png",
      color: "bg-orange-500",
      gradientFrom: "from-orange-500",
      gradientTo: "to-yellow-500"
    },
    {
      id: 2,
      name: "Monkey D. Luffy",
      anime: "One Piece",
      image: "https://i.imgur.com/UjTjjNG.png",
      color: "bg-red-500",
      gradientFrom: "from-red-500",
      gradientTo: "to-red-700"
    },
    {
      id: 3,
      name: "Goku",
      anime: "Dragon Ball",
      image: "https://i.imgur.com/FWiOKvq.png",
      color: "bg-blue-500",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-700"
    },
    {
      id: 4,
      name: "Tanjiro Kamado",
      anime: "Demon Slayer",
      image: "https://i.imgur.com/2Q8CjuO.png",
      color: "bg-green-500",
      gradientFrom: "from-green-500",
      gradientTo: "to-green-700"
    },
    {
      id: 5,
      name: "Mikasa Ackerman",
      anime: "Attack on Titan",
      image: "https://i.imgur.com/QVQa4yE.png",
      color: "bg-gray-700",
      gradientFrom: "from-gray-700",
      gradientTo: "to-gray-900"
    },
    {
      id: 6,
      name: "Saitama",
      anime: "One Punch Man",
      image: "https://i.imgur.com/Mzek1TD.png",
      color: "bg-yellow-500",
      gradientFrom: "from-yellow-500",
      gradientTo: "to-yellow-600"
    }
  ];

  useEffect(() => {
    // Simulate loading and gradually reveal characters
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setLoadedImages(prev => prev + 1);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Calculate loading progress
  const progress = Math.min(Math.round((loadedImages / characters.length) * 100), 100);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-manga-red/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10 bg-manga-red rounded-full"
            initial={{ 
              x: Math.random() * 100, 
              y: Math.random() * 100,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              x: [
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{ 
              duration: Math.random() * 20 + 15, 
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut" 
            }}
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl font-ninja text-center mb-16 text-manga-black relative inline-block"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
          >
            <span className="relative z-10">REJOINS TES{" "}</span>
            <span className="text-manga-red relative">
              HÉROS PRÉFÉRÉS
              <motion.span
                className="absolute -bottom-2 left-0 h-3 bg-manga-red/20 w-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </motion.h2>
          
          {loading ? (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <div className="w-64 h-64 relative mb-8">
                {/* Anime-style loading animation */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-8 border-manga-red border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-2 rounded-full border-8 border-manga-black border-b-transparent"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-[calc(50%-60px)] flex items-center justify-center h-[120px] w-[120px]"
                >
                  <span className="text-4xl font-bold text-manga-red">{progress}%</span>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-manga-black animate-pulse">Chargement de vos héros préférés...</h3>
            </div>
          ) : (
            <motion.div 
              ref={ref}
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {characters.map((character) => (
                <motion.div
                  key={character.id}
                  variants={item}
                  whileHover={{ 
                    y: -10, 
                    transition: { duration: 0.3 } 
                  }}
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl"
                >
                  <div className={`h-3 w-full bg-gradient-to-r ${character.gradientFrom} ${character.gradientTo}`}></div>
                  <div className="relative bg-white p-6 pb-12">
                    <div className="flex justify-center -mt-20 mb-4">
                      <motion.div 
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 * character.id
                        }}
                      >
                        <motion.div
                          className="w-full h-full bg-gray-200 absolute"
                          animate={{ opacity: 0 }}
                          transition={{ delay: 0.5 + (0.1 * character.id) }}
                        />
                        <img 
                          src={character.image} 
                          alt={character.name} 
                          className="object-cover w-full"
                          onLoad={handleImageLoad}
                          style={{ opacity: 0 }}
                          onError={(e) => {
                            e.currentTarget.style.opacity = "1";
                            handleImageLoad();
                          }}
                          onLoadCapture={(e) => {
                            e.currentTarget.style.opacity = "1";
                          }}
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (0.1 * character.id) }}
                    >
                      <h3 className="text-xl font-bold text-center mb-1">{character.name}</h3>
                      <p className="text-gray-600 text-center">{character.anime}</p>
                    </motion.div>
                    <motion.div
                      className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-manga-red to-manga-red/50"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.5 + (0.1 * character.id), duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimeCharacters;
