import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import blogsData from '@/constants/blogs.json';

const BlogCard = ({ blog, index }: { blog: typeof blogsData.blogs[0]; index: number }) => {
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="glass-card-hover p-6 group cursor-pointer"
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent/20 text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors leading-tight">
        {blog.title}
      </h3>

      {/* Excerpt */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {blog.excerpt}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {blog.readTime}
          </span>
        </div>
        <a
          href={blog.link}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
        >
          Read more
          <ArrowRight size={16} />
        </a>
      </div>
    </motion.article>
  );
};

const BlogsSection = () => {
  // Don't render if no blogs available
  if (!blogsData.blogs || blogsData.blogs.length === 0) {
    return null;
  }

  return (
    <section id="blogs" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Latest <span className="gradient-text">Blogs</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Sharing my knowledge and experiences through technical writing and tutorials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogsData.blogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BlogsSection;
