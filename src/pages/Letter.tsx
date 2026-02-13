import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles } from 'lucide-react';

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-romantic-gradient pt-24 pb-16 flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-lavender/25 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-blush/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Envelope */
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mb-8"
              >
                <Sparkles className="text-gold" size={40} />
              </motion.div>

              <h1 className="font-romantic text-4xl md:text-5xl text-gradient-love mb-8 text-center">
                A Special Letter For You 💌
              </h1>

              <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {/* Envelope body */}
                <div className="w-72 sm:w-80 md:w-96 h-48 sm:h-56 md:h-64 bg-cream rounded-2xl envelope-shadow relative overflow-hidden border-4 border-rose/30">
                  {/* Envelope flap */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blush to-cream origin-top transform group-hover:rotateX-12 transition-transform duration-300">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-24 sm:w-32 h-24 sm:h-32 bg-cream border-r-4 border-b-4 border-rose/30" />
                  </div>

                  {/* Heart seal */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <Heart
                        size={48}
                        className="text-primary fill-primary heart-shadow"
                      />
                    </motion.div>
                  </div>

                  {/* Paper peek */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-white/80 rounded-t-lg" />
                </div>

                <p className="mt-6 text-muted-foreground font-medium">
                  Click to open your letter 💕
                </p>
              </motion.button>
            </motion.div>
          ) : (
            /* Letter content */
            <motion.div
              key="letter"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-cream rounded-3xl p-8 md:p-12 romantic-shadow relative"
              >
                {/* Decorative corner */}
                <div className="absolute top-4 right-4">
                  <Heart size={24} className="text-primary/30 fill-primary/30" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Heart size={24} className="text-primary/30 fill-primary/30" />
                </div>

                <div className="text-center mb-8">
                  <Mail className="inline-block text-primary mb-4" size={40} />
                  <h2 className="font-romantic text-4xl md:text-5xl text-gradient-love">
                    My Dearest Sakshi
                  </h2>
                </div>

                <div className="space-y-6 text-foreground/90 text-lg md:text-xl leading-relaxed font-body">
                  <p className="font-romantic text-2xl md:text-3xl text-primary">
                    My Beautiful Valentine,
                  </p>

                  <p>
                    As I write this letter, my heart overflows with emotions that words could never fully capture. You came into my life like a beautiful dream, and every day since then has been nothing short of magical.
                  </p>

                  <p className="italic bg-blush/20 p-4 rounded-xl border-l-4 border-primary">
                    "You are my safe place" – In your arms, I've found a home. In your eyes, I've found my peace. In your heart, I've found my love.
                  </p>

                  <p>
                    You've taught me what it means to love unconditionally. Your presence makes the ordinary extraordinary. Your smile can turn my worst days into the best ones.
                  </p>

                  <p className="italic bg-lavender/20 p-4 rounded-xl border-l-4 border-secondary">
                    "With you, even ordinary days feel magical" – Every moment spent with you is a treasure I hold close to my heart.
                  </p>

                  <p>
                    Thank you for being you. Thank you for loving me. Thank you for being my forever person. I promise to love you, cherish you, and stand by you through all of life's adventures.
                  </p>

                  <div className="text-right space-y-2 pt-6">
                    <p className="font-romantic text-2xl md:text-3xl text-primary">
                      Forever & Always Yours,
                    </p>
                    <p className="text-xl">
                      With all my love ❤️
                    </p>
                  </div>
                </div>

                {/* Heart decorations */}
                <div className="flex justify-center gap-4 mt-8">
                  {['💖', '💕', '💗', '💕', '💖'].map((heart, i) => (
                    <motion.span
                      key={i}
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: i * 0.2,
                      }}
                      className="text-2xl"
                    >
                      {heart}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                onClick={() => setIsOpen(false)}
                className="mx-auto mt-8 block text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Read again
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Letter;
