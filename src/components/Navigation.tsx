import { Link, useLocation } from 'react-router-dom';
import { Heart, BookHeart, MessageCircleHeart, Mail, Infinity as InfinityIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Home', icon: Heart },
  { path: '/our-story', label: 'Our Story', icon: BookHeart },
  { path: '/reasons', label: 'Reasons', icon: MessageCircleHeart },
  { path: '/letter', label: 'Letter', icon: Mail },
  { path: '/forever', label: 'Forever', icon: InfinityIcon },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-card-glass backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-3 gap-1 md:gap-4 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition-all duration-300 text-sm md:text-base whitespace-nowrap ${
                  isActive
                    ? 'bg-primary text-primary-foreground romantic-shadow'
                    : 'hover:bg-accent text-foreground/80 hover:text-foreground'
                }`}
              >
                <Icon size={16} className={isActive ? 'animate-heart-beat' : ''} />
                <span className="hidden sm:inline font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
