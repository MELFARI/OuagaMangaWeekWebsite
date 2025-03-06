
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

const partnersData = [
  {
    name: "Konoha TV",
    logo: "/images/konoha-tv-logo.png",
    description: "Organisateur principal de l'événement Ouaga Manga Week",
    website: "#"
  },
  {
    name: "Goethe Institut",
    logo: "/images/goethe-institut-logo.png",
    description: "Centre culturel allemand soutenant l'événement",
    website: "#"
  },
  {
    name: "Ambassade du Japon au Burkina",
    logo: "/images/japan-embassy-logo.png",
    description: "Représentation officielle du Japon au Burkina Faso",
    website: "#"
  },
  {
    name: "Kaido Corporation",
    logo: "/images/kaido-corporation-logo.png",
    description: "Entreprise locale soutenant la culture otaku",
    website: "#"
  },
  {
    name: "Japon Faso Tour",
    logo: "/images/japon-faso-tour-logo.png",
    description: "Organisation promouvant les échanges culturels",
    website: "#"
  },
  {
    name: "Bolly Assim Photographie",
    logo: "/images/bolly-assim-logo.png",
    description: "Photographe officiel de l'événement",
    website: "#"
  },
  {
    name: "OC Events",
    logo: "/images/oc-events-logo.png",
    description: "Partenaire logistique de l'événement",
    website: "#"
  }
];

// Placeholder logos for testing
const placeholderLogos: Record<string, string> = {
  "Konoha TV": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5MCIgZmlsbD0iIzIyMiIvPjxwYXRoIGQ9Ik01MCw1MCBMNzUsOTAgTDUwLDEzMCBMODAsMTAwIFoiIGZpbGw9IiNmMDAiLz48dGV4dCB4PSI3MCIgeT0iMTIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNmZmYiPktPTk9IQSBUPC90ZXh0Pjwvc3ZnPg==",
  "Goethe Institut": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5MCIgZmlsbD0iIzk5YzMyOSIvPjx0ZXh0IHg9IjQwIiB5PSIxMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZiI+R29ldGhlIEluc3RpdHV0PC90ZXh0Pjwvc3ZnPg==",
  "Ambassade du Japon au Burkina": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZGRkIi8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI1MCIgZmlsbD0iI2YwMCIvPjwvc3ZnPg==",
  "Kaido Corporation": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjQwIiB5PSIxMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZiI+S0FJRE8gQ09SUC48L3RleHQ+PC9zdmc+",
  "Japon Faso Tour": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5MCIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZGRkIi8+PHBhdGggZD0iTTUwLDUwIEMxNTAsMTAwIDUwLDE1MCAxNTAsMTAwIiBzdHJva2U9IiNmMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iNCIvPjwvc3ZnPg==",
  "Bolly Assim Photographie": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5MCIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZGRkIi8+PHBhdGggZD0iTTcwLDcwIEwxMzAsMTMwIE03MCwxMzAgTDEzMCw3MCIgc3Ryb2tlPSIjZjAwIiBzdHJva2Utd2lkdGg9IjQiLz48L3N2Zz4=",
  "OC Events": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjYwIiB5PSIxMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzMzMyI+T0MgRXZlbnRzPC90ZXh0Pjwvc3ZnPg=="
};

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="partners" className="py-24 bg-manga-black text-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="section-title text-white">Nos Partenaires</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Ouaga Manga Week est rendu possible grâce au soutien de ces partenaires exceptionnels 
            qui partagent notre passion pour la culture manga et anime.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {partnersData.map((partner) => (
            <motion.div 
              key={partner.name}
              variants={item}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden bg-white/80 p-2">
                <img 
                  src={placeholderLogos[partner.name]} 
                  alt={`${partner.name} logo`} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{partner.name}</h3>
              <p className="text-gray-400 text-center mb-4">{partner.description}</p>
              <a 
                href={partner.website} 
                className="mt-auto text-manga-red hover:text-manga-red/80 text-sm font-semibold transition-colors"
              >
                Visiter le site →
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold mb-6">Vous souhaitez devenir partenaire?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Si vous êtes intéressé à devenir partenaire de l'événement Ouaga Manga Week, 
            n'hésitez pas à nous contacter pour discuter des différentes possibilités de collaboration.
          </p>
          <button className="btn-manga">
            Devenir Partenaire
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
