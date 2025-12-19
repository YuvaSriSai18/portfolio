import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 border-t border-border"
    >
      <div className="text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Yuva Sri Sai
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
