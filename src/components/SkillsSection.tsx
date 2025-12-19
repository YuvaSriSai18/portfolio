import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import * as Icons from 'lucide-react';
import skillsData from '@/constants/skills.json';

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  index: number;
}

const SkillBar = ({ name, level, color, index }: SkillBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium group-hover:text-primary transition-colors">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ delay: 0.3 + index * 0.05, duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ 
            background: `linear-gradient(90deg, ${color}cc, ${color})`,
          }}
        >
          <motion.div
            className="absolute inset-0 opacity-50"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A comprehensive toolkit built through continuous learning and real-world project experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.categories.map((category, categoryIndex) => {
            const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ElementType;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    {IconComponent && <IconComponent className="text-primary-foreground" size={20} />}
                  </div>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={skill.color}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
