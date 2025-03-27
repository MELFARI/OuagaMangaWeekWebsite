
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Star, Heart, Trophy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const MiniGame = () => {
  const { toast } = useToast();
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [targets, setTargets] = useState<Array<{id: number, x: number, y: number, type: string}>>([]);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const targetRef = useRef<number>(0);
  
  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(30);
    setTargets([]);
    
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }
    
    timerRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    toast({
      title: "Le jeu a commencé!",
      description: "Attrapez les étoiles et les coeurs pour gagner des points!",
    });
  };
  
  const endGame = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    setIsPlaying(false);
    
    toast({
      title: "Jeu terminé!",
      description: `Score final: ${score} points!`,
      variant: score > 20 ? "default" : "destructive",
    });
  };
  
  const handleTargetClick = (id: number, type: string) => {
    // Remove the clicked target
    setTargets(prev => prev.filter(target => target.id !== id));
    
    // Add points based on target type
    if (type === 'star') {
      setScore(prev => prev + 3);
    } else if (type === 'heart') {
      setScore(prev => prev + 1);
    }
  };
  
  useEffect(() => {
    if (!isPlaying || !gameAreaRef.current) return;
    
    // Generate new targets every second
    const spawnInterval = setInterval(() => {
      if (gameAreaRef.current) {
        const areaWidth = gameAreaRef.current.offsetWidth - 50;
        const areaHeight = gameAreaRef.current.offsetHeight - 50;
        
        const x = Math.random() * areaWidth;
        const y = Math.random() * areaHeight;
        const type = Math.random() > 0.7 ? 'star' : 'heart';
        
        targetRef.current += 1;
        
        setTargets(prev => [
          ...prev.slice(-15), // Keep only the last 15 targets to prevent lag
          { id: targetRef.current, x, y, type }
        ]);
      }
    }, 800);
    
    return () => {
      clearInterval(spawnInterval);
    };
  }, [isPlaying]);
  
  return (
    <div className="relative mt-8 w-full max-w-3xl mx-auto rounded-lg overflow-hidden border border-manga-red p-4 bg-black/5 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <div className="text-lg font-semibold">
            Score: <span className="text-manga-red">{score}</span>
          </div>
          <div className="text-lg font-semibold">
            Temps: <span className="text-manga-red">{timeLeft}s</span>
          </div>
        </div>
        <Button
          onClick={isPlaying ? endGame : startGame}
          className="bg-manga-red hover:bg-manga-red/80"
        >
          {isPlaying ? "Terminer" : "Jouer"}
        </Button>
      </div>
      
      <div 
        ref={gameAreaRef} 
        className="relative bg-gray-100/10 backdrop-blur-sm h-72 rounded-lg overflow-hidden"
        style={{ cursor: isPlaying ? 'crosshair' : 'default' }}
      >
        {!isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Trophy className="w-16 h-16 text-manga-red mb-4" />
            <p className="text-center text-lg mb-2">Ouaga Manga Game</p>
            <p className="text-center text-sm max-w-md">
              Cliquez sur les étoiles (3 pts) et les cœurs (1 pt) pour marquer des points! 
              Combien pouvez-vous obtenir en 30 secondes?
            </p>
          </div>
        )}
        
        {targets.map((target) => (
          <motion.div
            key={target.id}
            className="absolute"
            style={{ left: target.x + 'px', top: target.y + 'px' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleTargetClick(target.id, target.type)}
          >
            {target.type === 'star' ? (
              <Star className="w-8 h-8 text-yellow-500 fill-yellow-500 cursor-pointer" />
            ) : (
              <Heart className="w-8 h-8 text-manga-red fill-manga-red cursor-pointer" />
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Game instructions */}
      <div className="mt-2 text-xs text-gray-600">
        <p>Note: Cliquez sur les objets pour gagner des points!</p>
      </div>
    </div>
  );
};

export default MiniGame;
