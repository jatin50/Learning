import { motion } from 'framer-motion';
import { Heart, Calendar, Star, Flower2, Sparkles } from 'lucide-react';
import Sparkless from '../components/Sparkles';

const storyCards = [
  {
    title: 'The Day We Met',
    icon: Calendar,
    content: 'From the very first moment I saw you, I knew there was something special about you. Your smile lit up my world in ways I never knew possible.',
    color: 'from-rose/30 to-blush/30',
  },
  {
    title: "Why You're Special to Me",
    icon: Star,
    content: "You're not just my partner, you're my best friend, my confidant, and my greatest supporter. You understand me in ways no one else ever has.",
    color: 'from-lavender/30 to-secondary/30',
  },
  {
    title: 'My Favorite Things About You',
    icon: Heart,
    content: 'Your infectious laugh, the way your eyes light up when you talk about things you love, your kindness, your strength, and your beautiful heart.',
    color: 'from-blush/30 to-rose/30',
  },
  {
    title: 'Our Beautiful Moments',
    icon: Flower2,
    content: 'Every moment with you feels like a dream. From our late-night conversations to our silly adventures together, each memory is a treasure I hold dear.',
    color: 'from-secondary/30 to-lavender/30',
  },
];

const OurStory = () => {
  return (
    <div className="min-h-screen bg-romantic-gradient pt-24 pb-16 relative overflow-hidden">
      <Sparkless />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Sparkles className="text-gold" size={24} />
            <Heart size={32} className="text-primary fill-primary animate-heart-beat" />
            <Sparkles className="text-gold" size={24} />
          </div>
          <h1 className="font-romantic text-5xl md:text-6xl lg:text-7xl text-gradient-love mb-4">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every love story is beautiful, but ours is my favorite 💕
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

            {storyCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background romantic-shadow hidden md:block" />

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-card-glass rounded-3xl p-8 romantic-shadow border border-border/50 bg-gradient-to-br ${card.color}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <card.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-romantic text-2xl md:text-3xl text-foreground">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {card.content}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex justify-center gap-4">
            {['💖', '💕', '💗', '💕', '💖'].map((emoji, index) => (
              <motion.span
                key={index}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: index * 0.3,
                }}
                className="text-2xl"
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;