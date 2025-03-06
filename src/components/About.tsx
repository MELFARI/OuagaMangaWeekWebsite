
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-12">
          <div 
            className={`w-full lg:w-1/2 transform transition-all duration-1000 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
          >
            <h2 className="section-title">À Propos de l'Événement</h2>
            <p className="text-lg mb-6">
              <span className="font-bold text-manga-red">Ouaga Manga Week</span> est la première semaine otaku du Burkina Faso, organisée par Konoha TV. Cet événement unique célèbre la culture japonaise, l'animation, les mangas et la culture otaku dans un contexte africain.
            </p>
            <p className="text-lg mb-6">
              Pendant cinq jours intenses, du <span className="font-semibold">9 au 13 juillet 2024</span>, les passionnés de culture japonaise se réuniront à Ouagadougou pour participer à des activités diverses: ateliers de dessin manga, projections d'anime, compétitions de cosplay, concerts de J-Pop, expositions d'art, et bien plus encore!
            </p>
            <p className="text-lg mb-6">
              L'événement vise à créer des ponts culturels entre le Japon et le Burkina Faso, tout en offrant une plateforme d'expression aux artistes locaux inspirés par la culture japonaise.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-manga-red/10 rounded-lg p-4 text-center w-full sm:w-auto flex-1">
                <h3 className="font-bold text-xl mb-2 text-manga-red">5</h3>
                <p className="text-gray-700">Jours d'événements</p>
              </div>
              <div className="bg-manga-red/10 rounded-lg p-4 text-center w-full sm:w-auto flex-1">
                <h3 className="font-bold text-xl mb-2 text-manga-red">15+</h3>
                <p className="text-gray-700">Activités prévues</p>
              </div>
              <div className="bg-manga-red/10 rounded-lg p-4 text-center w-full sm:w-auto flex-1">
                <h3 className="font-bold text-xl mb-2 text-manga-red">10+</h3>
                <p className="text-gray-700">Partenaires</p>
              </div>
            </div>
          </div>
          
          <div 
            className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-manga-red/20 rounded-tr-3xl rounded-bl-3xl transform rotate-3"></div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/ea18f571-b333-4100-9420-cddd28decc29.png" 
                  alt="Ouaga Manga Week Poster" 
                  className="rounded-tr-3xl rounded-bl-3xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg transform rotate-6 w-32 h-32 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-xs font-medium text-gray-500">ÉDITION</span>
                  <span className="block text-4xl font-bold text-manga-red">1<sup>ère</sup></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
