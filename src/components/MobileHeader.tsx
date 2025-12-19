import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import avatar from '@/assets/avatar.png';
import { useTheme } from '@/contexts/ThemeContext';
import { useAvatarModal } from '@/contexts/AvatarModalContext';

const MobileHeader = () => {
  const { theme, toggleTheme } = useTheme();
  const { openModal } = useAvatarModal();
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:hidden glass-card rounded-none border-x-0 border-t-0 p-4 sticky top-0 z-50"
    >
      <div className="flex items-center justify-between gap-2">
        {/* Left: Avatar & Info */}
        <button
          onClick={openModal}
          className="flex items-center gap-3 flex-1 min-w-0 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-full gradient-bg p-0.5 flex-shrink-0 cursor-pointer hover:scale-110 transition-transform">
            <img
              src={avatar}
              alt="Yuva Sri Sai"
              className="w-full h-full rounded-full object-cover bg-card"
            />
          </div>
            <div className="min-w-0">
              <h1 className="font-bold gradient-text text-left text-sm">Yuva Sri Sai</h1>
              <p className="text-xs text-muted-foreground truncate">Full-Stack Developer</p>
            </div>
        </button>

        {/* Right: Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors flex-shrink-0"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </motion.header>
  );
};

export default MobileHeader;
