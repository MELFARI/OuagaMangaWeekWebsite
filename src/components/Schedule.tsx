
import { useState, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useInView } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const scheduleData = [
  {
    day: "Jour 1",
    date: "9 Juillet",
    events: [
      {
        time: "10:00 - 12:00",
        title: "Cérémonie d'ouverture",
        location: "Centre Culturel Goethe Institut",
        description: "Lancement officiel de la première semaine Otaku du Burkina avec les partenaires et invités spéciaux.",
        category: "Cérémonie"
      },
      {
        time: "14:00 - 16:00",
        title: "Conférence: Histoire du Manga",
        location: "Ambassade du Japon",
        description: "Découvrez l'évolution du manga à travers les époques et son influence mondiale.",
        category: "Conférence"
      },
      {
        time: "17:00 - 19:00",
        title: "Atelier de dessin manga",
        location: "Kaido Corporation",
        description: "Apprenez les techniques de base du dessin manga avec des artistes locaux.",
        category: "Atelier"
      }
    ]
  },
  {
    day: "Jour 2",
    date: "10 Juillet",
    events: [
      {
        time: "10:00 - 13:00",
        title: "Projection d'anime",
        location: "Centre Culturel Goethe Institut",
        description: "Projection d'une sélection d'anime japonais populaires avec discussion.",
        category: "Projection"
      },
      {
        time: "14:30 - 16:30",
        title: "Atelier cosplay",
        location: "Kaido Corporation",
        description: "Apprenez à créer vos propres costumes de cosplay avec des matériaux locaux.",
        category: "Atelier"
      },
      {
        time: "17:00 - 19:00",
        title: "Panel: Mangas africains",
        location: "Ambassade du Japon",
        description: "Discussion sur l'émergence des mangas avec une touche africaine.",
        category: "Panel"
      }
    ]
  },
  {
    day: "Jour 3",
    date: "11 Juillet",
    events: [
      {
        time: "10:00 - 12:00",
        title: "Compétition de dessin",
        location: "Kaido Corporation",
        description: "Montrez vos talents de dessinateur manga lors de cette compétition amicale.",
        category: "Compétition"
      },
      {
        time: "13:00 - 15:00",
        title: "Initiation aux jeux vidéo japonais",
        location: "Centre Culturel Goethe Institut",
        description: "Découvrez et jouez à une sélection de jeux vidéo japonais emblématiques.",
        category: "Atelier"
      },
      {
        time: "16:00 - 19:00",
        title: "Concert J-Pop",
        location: "Place de la Nation",
        description: "Concert de musique J-Pop avec des artistes locaux et internationaux.",
        category: "Concert"
      }
    ]
  },
  {
    day: "Jour 4",
    date: "12 Juillet",
    events: [
      {
        time: "10:00 - 13:00",
        title: "Exposition d'art manga",
        location: "Centre Culturel Goethe Institut",
        description: "Exposition d'œuvres d'art manga créées par des artistes burkinabè.",
        category: "Exposition"
      },
      {
        time: "14:00 - 16:00",
        title: "Atelier calligraphie japonaise",
        location: "Ambassade du Japon",
        description: "Initiez-vous à l'art de la calligraphie japonaise (shodo).",
        category: "Atelier"
      },
      {
        time: "17:00 - 19:00",
        title: "Défilé de mode cosplay",
        location: "Kaido Corporation",
        description: "Admirez les meilleurs cosplays de l'événement lors de ce défilé spectaculaire.",
        category: "Défilé"
      }
    ]
  },
  {
    day: "Jour 5",
    date: "13 Juillet",
    events: [
      {
        time: "10:00 - 12:00",
        title: "Table ronde: Avenir du manga au Burkina",
        location: "Ambassade du Japon",
        description: "Discussion sur le développement futur de la culture manga au Burkina Faso.",
        category: "Conférence"
      },
      {
        time: "13:00 - 16:00",
        title: "Grande compétition de cosplay",
        location: "Centre Culturel Goethe Institut",
        description: "La grande finale de la compétition de cosplay avec des prix à gagner.",
        category: "Compétition"
      },
      {
        time: "17:00 - 20:00",
        title: "Cérémonie de clôture et remise des prix",
        location: "Place de la Nation",
        description: "Cérémonie officielle de clôture avec remise des prix aux gagnants des différentes compétitions.",
        category: "Cérémonie"
      }
    ]
  }
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Cérémonie": "bg-yellow-500",
    "Conférence": "bg-blue-500",
    "Atelier": "bg-green-500",
    "Projection": "bg-purple-500",
    "Panel": "bg-indigo-500",
    "Compétition": "bg-red-500",
    "Concert": "bg-pink-500",
    "Exposition": "bg-orange-500",
    "Défilé": "bg-teal-500",
  };
  
  return colors[category] || "bg-gray-500";
};

const Schedule = () => {
  const [activeTab, setActiveTab] = useState("Jour 1");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="schedule" className="py-24 japan-pattern">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="section-title">Programme de l'Événement</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Cinq jours remplis d'activités passionnantes autour de la culture manga et anime.
            Consultez le programme complet ci-dessous et préparez votre agenda!
          </p>
        </div>
        
        <Tabs defaultValue="Jour 1" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className={`mb-8 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
            <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 bg-manga-red/10">
              {scheduleData.map((day) => (
                <TabsTrigger 
                  key={day.day} 
                  value={day.day}
                  className="data-[state=active]:bg-manga-red data-[state=active]:text-white py-3"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-bold">{day.day}</span>
                    <span className="text-sm">{day.date}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {scheduleData.map((day) => (
            <TabsContent key={day.day} value={day.day} className="focus-visible:outline-none focus-visible:ring-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {day.events.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-6 flex flex-col justify-center bg-manga-black text-white">
                          <div className="flex items-center mb-3">
                            <Clock size={18} className="mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center mb-3">
                            <MapPin size={18} className="mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs text-white mt-2 ${getCategoryColor(event.category)}`}>
                            {event.category}
                          </span>
                        </div>
                        
                        <div className="md:w-3/4 p-6">
                          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <p className="flex items-center justify-center text-lg text-gray-700 mb-4">
            <Calendar className="mr-2 text-manga-red" />
            Ajoutez ces événements à votre calendrier pour ne rien manquer!
          </p>
          <button className="btn-manga">
            Télécharger le Programme Complet (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
