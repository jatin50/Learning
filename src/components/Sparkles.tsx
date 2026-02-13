import { useEffect, useState } from 'react';
import { Sparkles as SparkleIcon } from 'lucide-react';

interface Sparkle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
}

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < 20; i++) {
        newSparkles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 12 + 8,
          delay: Math.random() * 3,
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-twinkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <SparkleIcon
            size={sparkle.size}
            className="text-gold"
            style={{ opacity: 0.6 }}
          />
        </div>
      ))}
    </div>
  );
};

export default Sparkles;
