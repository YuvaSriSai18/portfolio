import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import avatar from '@/assets/avatar.png';
import { useAvatarModal } from '@/contexts/AvatarModalContext';

const AvatarModal = () => {
  const { isOpen, closeModal } = useAvatarModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={closeModal}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={24} className="text-white" />
            </motion.button>

            {/* Avatar Image */}
            <motion.div className="w-96 h-96 rounded-2xl gradient-bg p-1 overflow-hidden shadow-2xl">
              <img
                src={avatar}
                alt="Yuva Sri Sai"
                className="w-full h-full rounded-2xl object-cover bg-card"
              />
            </motion.div>

            {/* Info Below Avatar */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mt-6"
            >
              <h2 className="text-2xl font-bold text-white mb-1">Yuva Sri Sai</h2>
              <p className="text-white/70">Full-Stack Developer</p>
              <p className="text-white/50 text-sm mt-1">SRM University AP</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AvatarModal;
