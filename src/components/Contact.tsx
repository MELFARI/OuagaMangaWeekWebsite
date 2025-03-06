
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Instagram, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Message envoyé!",
        description: "Nous vous contacterons bientôt.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-20 paper-tear bg-manga-black transform -scale-y-100"></div>
      
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="section-title">Contactez-nous</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Pour toute question concernant l'événement Ouaga Manga Week, n'hésitez pas à nous contacter.
            Notre équipe est à votre disposition pour vous aider.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-manga-red rounded-lg p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full transform -translate-x-20 translate-y-20"></div>
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">Informations de Contact</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start">
                  <Phone className="mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <p>+226 66370085</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p>contact@ouagamangaweek.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Adresse</h4>
                    <p>Ouagadougou, Burkina Faso</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Instagram</h4>
                    <p>@konoha_tv.off</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 relative z-10">
                <h4 className="font-semibold mb-4">Heures d'ouverture du bureau</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Lundi - Vendredi:</span>
                    <span>9h00 - 17h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi:</span>
                    <span>10h00 - 15h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche:</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200 h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Envoyé!</h3>
                <p className="text-gray-600 mb-6">
                  Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  className="btn-manga"
                >
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input id="name" placeholder="Votre nom" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="votre@email.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input id="subject" placeholder="Sujet de votre message" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Votre message ici..." rows={5} required />
                  </div>
                  
                  <Button type="submit" className="btn-manga w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
