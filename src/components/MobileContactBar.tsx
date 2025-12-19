import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, FileText, ExternalLink } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/yuvasrisai18', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/yuvasrisai18/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:yuvasrisai18@gmail.com', label: 'Email' },
  { icon: Twitter, href: 'https://x.com/nanitho00766710', label: 'Twitter' },
];

const MobileContactBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="lg:hidden flex flex-col gap-3 my-8 pb-8 border-b border-border"
    >
      {/* Resume Button */}
      <motion.a
        href="https://drive.google.com/file/d/1uGYhe--UbG24r_4VYF3h-_SO83z_YIcX/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full gradient-bg text-primary-foreground font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all glow-primary"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FileText size={18} />
        View Resume
        <ExternalLink size={14} />
      </motion.a>

      {/* Social Links */}
      <div className="flex gap-2 justify-center">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <link.icon size={20} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileContactBar;
