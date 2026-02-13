import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const reasons = [
  "Your smile lights up my entire world",
  "You make even ordinary moments feel magical",
  "Your kindness knows no bounds",
  "You believe in me when I don't believe in myself",
  "Your laugh is my favorite sound",
  "You make me want to be a better person",
  "You're my safe place in this crazy world",
  "Your hugs feel like coming home",
  "You understand me without words",
  "Your eyes tell stories that captivate my soul",
  "You're my best friend and greatest adventure",
  "Your strength inspires me every day",
  "You love me for who I truly am",
  "Every day with you is a blessing",
  "You're the answer to all my prayers",
];

const Reasons = () => {
  return (
    <div className="min-h-screen bg-love-gradient pt-24 pb-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-5 w-48 h-48 bg-lavender/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-5 w-56 h-56 bg-blush/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Heart size={24} className="text-primary fill-primary" />
            <Sparkles className="text-gold" size={28} />
            <Heart size={24} className="text-primary fill-primary" />
          </div>
          <h1 className="font-romantic text-5xl md:text-6xl lg:text-7xl text-gradient-love mb-4">
            Reasons I Love You
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            There are infinite reasons, but here are a few that make my heart skip a beat 💕
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-card-glass rounded-2xl p-6 h-full border border-border/50 romantic-shadow relative overflow-hidden">
                {/* Heart pop animation on hover */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute top-3 right-3"
                >
                  <Heart
                    size={20}
                    className="text-primary fill-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-romantic text-xl text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-foreground/90 leading-relaxed pt-1">
                    {reason}
                  </p>
                </div>

                {/* Bottom gradient decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-romantic text-3xl md:text-4xl text-gradient-love">
            And a million more reasons that words can't describe...
          </p>
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: i * 0.2,
                }}
              >
                <Heart size={24} className="text-primary fill-primary" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reasons;