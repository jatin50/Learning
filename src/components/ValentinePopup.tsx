import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Sparkles } from 'lucide-react';

const ValentinePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    const hasAnswered = localStorage.getItem('valentine-answered');
    if (!hasAnswered) {
      const timer = setTimeout(() => setIsOpen(true), 10000); // Show after 30 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleYes = () => {
    setShowHearts(true);
    setAnswered(true);
    localStorage.setItem('valentine-answered', 'yes');
    setTimeout(() => setIsOpen(false), 3000);
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('valentine-answered', 'closed');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/20 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 10 }}
            transition={{ type: 'spring', damping: 15 }}
            className="bg-card rounded-3xl p-8 max-w-md w-full romantic-shadow relative overflow-hidden"
          >
            {!answered && (
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            )}

            <div className="text-center">
              {!answered ? (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="inline-block mb-4"
                  >
                    <Heart size={60} className="text-primary fill-primary" />
                  </motion.div>
                  
                  <h2 className="font-romantic text-4xl md:text-5xl text-gradient-love mb-4">
                    Will you be my Valentine, Sakshi?
                  </h2>
                  
                  <p className="text-muted-foreground mb-8">
                    💖 This question comes straight from my heart 💖
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleYes}
                    className="w-full py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg romantic-shadow hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Heart size={20} className="fill-current" />
                    Yes, Forever! 💕
                  </motion.button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="text-gold" size={30} />
                    <Heart size={60} className="text-primary fill-primary animate-heart-beat" />
                    <Sparkles className="text-gold" size={30} />
                  </div>
                  
                  <h2 className="font-romantic text-4xl md:text-5xl text-gradient-love mb-4">
                    I Love You Sakshi! 💖
                  </h2>
                  
                  <p className="text-lg text-foreground">
                    You've made me the happiest person in the world! ✨
                  </p>
                </motion.div>
              )}
            </div>

            {showHearts && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 1,
                      x: Math.random() * 100 + '%',
                      y: '100%',
                    }}
                    animate={{
                      opacity: 0,
                      y: '-100%',
                    }}
                    transition={{
                      duration: 2,
                      delay: Math.random() * 0.5,
                    }}
                    className="absolute"
                  >
                    <Heart
                      size={Math.random() * 20 + 10}
                      className="text-primary fill-primary"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ValentinePopup;
