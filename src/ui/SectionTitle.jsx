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
    <div className={`text-center mb-20 space-y-5 ${className}`}>
      {overline && (
        <p className="typo-caption text-premium-text-secondary">
          {overline}
        </p>
      )}
      <h2 className="typo-h1 text-balance-heading">
        {title}{' '}
        {highlight && <span className="text-gradient-gold">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="typo-lead text-premium-text-secondary max-w-2xl mx-auto">
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
