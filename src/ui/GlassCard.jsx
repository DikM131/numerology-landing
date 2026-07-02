import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  glow = true,
  padding = true,
  hover = false,
  ...props
}) {
  const base = `glass-light rounded-card ${padding ? 'p-8 md:p-10' : ''} ${glow ? 'shadow-gold' : ''} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={base}
        whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={base} {...props}>{children}</div>;
}
