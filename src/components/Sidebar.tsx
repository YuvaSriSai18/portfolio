import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, FileText, ExternalLink } from 'lucide-react';
import avatar from '@/assets/avatar.png';
import { useAvatarModal } from '@/contexts/AvatarModalContext';

const socialLinks = [
  { icon: Github, href: 'https://github.com/yuvasrisai18', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/yuvasrisai18/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:yuvasrisai18@gmail.com', label: 'Email' },
  { icon: Twitter, href: 'https://x.com/nanitho00766710', label: 'Twitter' },
];

const Sidebar = () => {
  const { openModal } = useAvatarModal();
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed left-0 top-0 h-screen w-72 glass-card rounded-none border-r flex flex-col items-center py-10 px-6 z-50 hidden lg:flex"
    >
      {/* Avatar */}
      <motion.button
        onClick={openModal}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative mb-6 hover:opacity-80 transition-opacity cursor-pointer"
      >
        <div className="w-32 h-32 rounded-full gradient-bg p-1 animate-pulse-glow hover:scale-110 transition-transform">
          <img
            src={avatar}
            alt="Yuva Sri Sai"
            className="w-full h-full rounded-full object-cover bg-card"
          />
        </div>
        <motion.div
          className="absolute -bottom-1 -right-1 w-8 h-8 gradient-bg rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-primary-foreground text-xs">✓</span>
        </motion.div>
      </motion.button>

      {/* Name & Title */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-2xl font-bold gradient-text mb-1">Yuva Sri Sai</h1>
        <p className="text-muted-foreground text-sm">Full-Stack Developer</p>
        <p className="text-muted-foreground/70 text-xs mt-1">SRM University AP</p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex gap-3 mb-8"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <link.icon size={18} />
          </motion.a>
        ))}
      </motion.div>

      {/* Resume Button */}
      <motion.a
        href="https://drive.google.com/file/d/1uGYhe--UbG24r_4VYF3h-_SO83z_YIcX/view?usp=sharing"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="w-full gradient-bg text-primary-foreground font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 hover:scale-[1.02] glow-primary"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target='_blank'
      >
        <FileText size={18} />
        View Resume
        <ExternalLink size={14} />
      </motion.a>

      {/* Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-auto flex items-center gap-2 text-sm text-muted-foreground"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        Open to opportunities
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
