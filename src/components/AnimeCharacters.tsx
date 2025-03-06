
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const AnimeCharacters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const characters = [
    {
      id: 1,
      name: "Naruto Uzumaki",
      anime: "Naruto",
      image: "https://i.imgur.com/rQlQYRM.png",
      color: "bg-orange-500"
    },
    {
      id: 2,
      name: "Monkey D. Luffy",
      anime: "One Piece",
      image: "https://i.imgur.com/UjTjjNG.png",
      color: "bg-red-500"
    },
    {
      id: 3,
      name: "Goku",
      anime: "Dragon Ball",
      image: "https://i.imgur.com/FWiOKvq.png",
      color: "bg-blue-500"
    },
    {
      id: 4,
      name: "Tanjiro Kamado",
      anime: "Demon Slayer",
      image: "https://i.imgur.com/2Q8CjuO.png",
      color: "bg-green-500"
    },
    {
      id: 5,
      name: "Mikasa Ackerman",
      anime: "Attack on Titan",
      image: "https://i.imgur.com/QVQa4yE.png",
      color: "bg-gray-700"
    },
    {
      id: 6,
      name: "Saitama",
      anime: "One Punch Man",
      image: "https://i.imgur.com/Mzek1TD.png",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-manga-red/10">
      <div className="container mx-auto px-4">
        <div 
          className={`transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <h2 className="text-4xl font-ninja text-center mb-16 text-manga-black">REJOINS TES <span className="text-manga-red">HÉROS PRÉFÉRÉS</span></h2>
          
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((character) => (
              <div 
                key={character.id}
                className={`rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${character.id * 150}ms` }}
              >
                <div className={`${character.color} h-8 w-full`}></div>
                <div className="relative bg-white p-6 pb-12">
                  <div className="flex justify-center -mt-24 mb-4">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-md overflow-hidden bg-white flex items-center justify-center">
                      <img 
                        src={character.image} 
                        alt={character.name} 
                        className="object-cover w-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-1">{character.name}</h3>
                  <p className="text-gray-600 text-center">{character.anime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeCharacters;
