
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-manga-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-white font-manga text-3xl block mb-4">
              <span className="text-manga-red">OUAGA</span> MANGA
            </Link>
            <p className="text-gray-400 mb-6">
              La première semaine otaku du Burkina Faso. Un événement culturel unique célébrant les mangas, les animes et la culture japonaise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-manga-red transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-manga-red transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-manga-red transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-manga-red transition-colors duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "À propos", href: "#about" },
                { name: "Programme", href: "#schedule" },
                { name: "Partenaires", href: "#partners" },
                { name: "Contact", href: "#contact" },
                { name: "S'inscrire", href: "#" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="inline-flex items-center text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    <ChevronRight size={16} className="mr-2 text-manga-red" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Événements</h3>
            <ul className="space-y-4">
              {[
                "Ateliers de dessin manga",
                "Compétition de cosplay",
                "Projections d'anime",
                "Concours de quiz otaku",
                "Concerts J-Pop"
              ].map((event, index) => (
                <li key={index} className="pb-2 border-b border-white/10">
                  <a href="#schedule" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {event}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Infolettre</h3>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous à notre infolettre pour recevoir les dernières nouvelles et mises à jour sur l'événement.
            </p>
            <form className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="flex-1 px-4 py-2 bg-white/10 rounded-l-md focus:outline-none focus:ring-2 focus:ring-manga-red"
                />
                <button 
                  type="submit" 
                  className="bg-manga-red px-4 py-2 rounded-r-md hover:bg-manga-red/90 transition-colors"
                >
                  OK
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              En vous inscrivant, vous acceptez de recevoir des emails de notre part. Vous pouvez vous désinscrire à tout moment.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Ouaga Manga Week. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Conditions d'utilisation</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
