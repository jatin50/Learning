import { motion } from 'framer-motion';
import { Heart, Infinity as InfinityIcon, Sparkles, Star, Gem } from 'lucide-react';
import FloatingHearts from '../components/FloatingHearts';

const promises = [
  { icon: Heart, text: "To love you more with each passing day" },
  { icon: Star, text: "To be your biggest supporter in all your dreams" },
  { icon: Gem, text: "To cherish every moment we share together" },
  { icon: Sparkles, text: "To make you smile, even on the hardest days" },
  { icon: InfinityIcon, text: "To build a beautiful forever with you" },
];

const Forever = () => {
  return (
    <div className="min-h-screen bg-sunset-gradient pt-24 pb-16 relative overflow-hidden">
      <FloatingHearts />

      {/* Background sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles size={16} className="text-gold" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="inline-block mb-6"
          >
            <div className="flex items-center gap-4">
              <Sparkles className="text-gold" size={32} />
              <InfinityIcon size={48} className="text-primary" />
              <Sparkles className="text-gold" size={32} />
            </div>
          </motion.div>

          <h1 className="font-romantic text-5xl md:text-6xl lg:text-7xl text-gradient-love mb-4">
            Forever & Always
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            This is just the beginning of us 💍✨
          </p>
        </motion.div>

        {/* Promises */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-romantic text-3xl md:text-4xl text-center text-foreground mb-10"
          >
            My Promises to You 💕
          </motion.h2>

          <div className="space-y-6">
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-card-glass rounded-2xl p-6 border border-border/50 romantic-shadow flex items-center gap-5"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <promise.icon size={28} className="text-primary" />
                </div>
                <p className="text-lg md:text-xl text-foreground/90">
                  {promise.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-card rounded-3xl p-10 md:p-14 romantic-shadow border border-primary/20 relative overflow-hidden">
            {/* Background hearts */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(20)].map((_, i) => (
                <Heart
                  key={i}
                  size={Math.random() * 40 + 20}
                  className="absolute text-primary fill-primary"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-block mb-6"
              >
                <Heart size={64} className="text-primary fill-primary heart-shadow" />
              </motion.div>

              <h2 className="font-romantic text-4xl md:text-5xl lg:text-6xl text-gradient-love mb-6">
                I Love You Sakshi
              </h2>

              <p className="font-romantic text-3xl md:text-4xl text-foreground/90 mb-8">
                Always & Forever ❤️
              </p>

              <div className="flex justify-center items-center gap-3">
                <Sparkles className="text-gold" size={24} />
                <span className="text-2xl">💍</span>
                <InfinityIcon size={32} className="text-primary" />
                <span className="text-2xl">✨</span>
                <Sparkles className="text-gold" size={24} />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 text-muted-foreground text-lg italic"
              >
                "You are my today and all of my tomorrows"
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Footer hearts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-12"
        >
          {['💖', '✨', '💕', '💍', '💕', '✨', '💖'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: i * 0.15,
              }}
              className="text-2xl md:text-3xl"
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Forever;