
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-manga-black p-4">
      <div className="max-w-md w-full text-center">
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 bg-manga-red rounded-full animate-pulse-subtle"></div>
          <div className="absolute inset-4 bg-manga-black rounded-full flex items-center justify-center">
            <span className="font-ninja text-5xl text-white">404</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-white font-manga">Page Introuvable</h1>
        <p className="text-xl text-gray-400 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/">
          <Button className="btn-manga">
            Retour à l'Accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
