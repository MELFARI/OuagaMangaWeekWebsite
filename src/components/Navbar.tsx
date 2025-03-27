
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, GamepadIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "#about" },
    { label: "Programme", href: "#schedule" },
    { label: "Mini Jeu", href: "#game" },
    { label: "Partenaires", href: "#partners" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-200/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <motion.img 
              src="/lovable-uploads/6d6e6f27-13df-4bc8-a1eb-f755ddda3a9b.png"
              alt="Ouaga Manga Week Logo"
              className="h-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black font-medium hover:text-manga-red transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-black text-white hover:bg-black/80">Inscrivez-vous</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-gray-200/95 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0 overflow-hidden'}`}>
        <nav className="flex flex-col space-y-4 px-4">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-black font-medium px-2 py-2 hover:text-manga-red transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="bg-black text-white hover:bg-black/80 w-full justify-center">Inscrivez-vous</Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
