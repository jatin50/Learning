import { useState, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { motion } from "framer-motion";

const TRACK_URL =
  "https://soundcloud.com/mr-cha-n-g/sheesha-aakhya-mai-aakh-ghali-jo-beran-mitta-ror-feat-swara-verma";

const BASE_PLAYER_URL =
  "https://w.soundcloud.com/player/?url=" +
  encodeURIComponent(TRACK_URL) +
  "&color=%23ff3366&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed z-50 bottom-6 right-6"
    >
      {isPlaying && (
        <iframe
          title="Sheesha - Mitta Ror"
          src={`${BASE_PLAYER_URL}&auto_play=true`}
          width="0"
          height="0"
          allow="autoplay"
          style={{ display: "none" }}
        />
      )}

      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 px-4 py-2 text-sm rounded-lg -top-16 bg-card romantic-shadow whitespace-nowrap"
        >
          <div className="flex items-center gap-2">
            <Music size={14} className="text-primary" />
            <span>Play our song 💖</span>
          </div>
          <div className="absolute bottom-0 w-2 h-2 rotate-45 translate-y-1/2 right-4 bg-card" />
        </motion.div>
      )}

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="flex items-center justify-center transition-transform duration-300 rounded-full w-14 h-14 bg-primary text-primary-foreground romantic-shadow hover:scale-110"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </motion.div>
  );
};

export default MusicPlayer;
