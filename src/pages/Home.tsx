import { motion } from 'framer-motion';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingHearts from '../components/FloatingHearts';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-love-gradient">
      <FloatingHearts />
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-lavender/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blush/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-rose/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Decorative hearts */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="flex justify-center items-center gap-4 mb-8"
          >
            <Sparkles className="text-gold" size={28} />
            <Heart size={48} className="text-primary fill-primary heart-shadow animate-heart-beat" />
            <Sparkles className="text-gold" size={28} />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-romantic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-love mb-6 leading-tight"
          >
            Happy Valentine's Day
            <br />
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">Sakshi</span>
            <span className="inline-block ml-2">❤️</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto font-body"
          >
            A little corner of the internet made just for you 💕
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/our-story">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-primary text-primary-foreground rounded-full font-semibold text-lg md:text-xl romantic-shadow inline-flex items-center gap-3 transition-all duration-300"
              >
                <Heart size={24} className="fill-current animate-heart-beat" />
                Enter My Heart
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 flex justify-center gap-6"
          >
            {['💖', '✨', '💕', '✨', '💖'].map((emoji, index) => (
              <motion.span
                key={index}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: index * 0.2,
                  ease: 'easeInOut',
                }}
                className="text-2xl md:text-3xl"
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-muted-foreground text-sm flex flex-col items-center gap-2"
          >
            <span className="font-body">Made with love</span>
            <Heart size={16} className="text-primary fill-primary" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;