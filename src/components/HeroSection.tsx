import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import * as Icons from 'lucide-react';
import interestsData from '@/constants/interests.json';

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-8 md:pt-20 pb-10">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            Welcome to my portfolio
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Yuva Sri Sai</span>
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 14, -8, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              👋
            </motion.span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A passionate <span className="text-foreground font-medium">Full-Stack Developer</span> crafting 
            beautiful digital experiences. I transform ideas into elegant, scalable solutions 
            with clean code and modern technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a
            href="#projects"
            className="gradient-bg text-primary-foreground px-8 py-3 rounded-xl font-medium hover:opacity-90 transition-all hover:scale-[1.02] glow-primary flex items-center gap-2"
          >
            View My Work
            <ArrowDown size={18} />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl font-medium border border-border hover:bg-secondary/50 transition-all hover:scale-[1.02]"
          >
            Let's Connect
          </a>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Education</h3>
          <div className="glass-card-hover p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                <Icons.GraduationCap className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold">SRM University AP</h4>
                <p className="text-muted-foreground">B.Tech in Computer Science and Engineering</p>
                <p className="text-sm text-muted-foreground/70 mt-1">2022 – 2026</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Interests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {interestsData.interests.map((interest, index) => {
              const IconComponent = Icons[interest.icon as keyof typeof Icons] as React.ElementType;
              return (
                <motion.div
                  key={interest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="glass-card-hover p-5 cursor-default"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {IconComponent && <IconComponent className="text-primary" size={20} />}
                    </div>
                    <h4 className="font-semibold">{interest.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
