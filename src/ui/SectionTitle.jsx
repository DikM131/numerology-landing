import { motion } from 'framer-motion';

export default function SectionTitle({
  overline,
  title,
  highlight,
  subtitle,
  className = '',
  animate = true,
}) {
  const content = (
    <div className={`text-center mb-16 space-y-4 ${className}`}>
      {overline && (
        <p className="font-sans text-premium-text-secondary text-xs md:text-sm tracking-[0.2em] uppercase">
          {overline}
        </p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]">
        {title}{' '}
        {highlight && <span className="text-gradient-gold">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-premium-text-secondary text-base md:text-lg font-sans max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {content}
    </motion.div>
  );
}
