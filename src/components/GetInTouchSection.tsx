import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';

const GetInTouchSection = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Want to connect? Shoot me a quick LinkedIn DM with your question, and I’ll get back when possible.
          </p>
        </div>

        {/* Contact Options */} 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/yuvasrisai18"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="glass-card-hover p-6 rounded-xl flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#0A66C2]/10 flex items-center justify-center group-hover:bg-[#0A66C2]/20 transition-colors">
                <Linkedin className="text-[#0A66C2]" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Direct message me</p>
              </div>
            </div>
            <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:yuvasrisai18@gmail.com"
            whileHover={{ y: -4 }}
            className="glass-card-hover p-6 rounded-xl flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">yuvasrisai18@gmail.com</p>
              </div>
            </div>
            <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
          </motion.a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border" />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Let's create something amazing together. Feel free to reach out!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://linkedin.com/in/yuvasrisai18', '_blank')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all font-medium"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetInTouchSection;
