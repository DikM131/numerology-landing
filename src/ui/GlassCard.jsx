import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  glow = true,
  padding = true,
  hover = false,
  variant = 'default',
  ...props
}) {
  const variantMap = {
    subtle: 'glass-card-subtle',
    default: 'glass-card',
    elevated: 'glass-card-elevated',
    solid: 'glass-card-solid',
  };
  const base = `${variantMap[variant] || 'glass-card'} ${hover ? 'glass-card-hover' : ''} ${glow ? 'glass-card-glow' : ''} rounded-card ${padding ? 'p-8 md:p-12' : ''} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={base}
        whileHover={{
          y: -4,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={base} {...props}>{children}</div>;
}
