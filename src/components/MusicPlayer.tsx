import { useState, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { motion } from "framer-motion";

const SOUNDCLOUD_URL =
  "https://w.soundcloud.com/player/?url=https://soundcloud.com/mr-cha-n-g/sheesha-aakhya-mai-aakh-ghali-jo-beran-mitta-ror-feat-swara-verma";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [playerSrc, setPlayerSrc] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (!isPlaying) {
      // Start playing
      setPlayerSrc(`${SOUNDCLOUD_URL}&auto_play=true`);
    } else {
      // Stop playing (remove iframe)
      setPlayerSrc(null);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Hidden SoundCloud player */}
      {playerSrc && (
        <iframe
          title="Sheesha - Mitta Ror"
          src={playerSrc}
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
          className="absolute -top-16 right-0 bg-card px-4 py-2 rounded-lg romantic-shadow text-sm whitespace-nowrap"
        >
          <div className="flex items-center gap-2">
            <Music size={14} className="text-primary" />
            <span>Play our song 💖</span>
          </div>
          <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-card" />
        </motion.div>
      )}

      <button
        onClick={togglePlay}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center romantic-shadow hover:scale-110 transition-transform duration-300"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </motion.div>
  );
};

export default MusicPlayer;
