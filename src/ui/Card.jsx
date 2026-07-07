import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = true,
  glow = false,
  variant = 'default',
  as = 'div',
  ...props
}) {
  const variantMap = {
    subtle: 'glass-card-subtle',
    default: 'glass-card',
    elevated: 'glass-card-elevated',
    solid: 'glass-card-solid',
  };
  const base = `${variantMap[variant] || 'glass-card'} ${hover ? 'glass-card-hover' : ''} ${glow ? 'glass-card-glow' : ''} rounded-card ${padding ? 'p-8 md:p-12' : ''} ${className}`;

  const hoverMotion = hover ? {
    y: -4,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  } : {};

  const isMotion = hover || typeof as === 'string';
  const Tag = isMotion ? (typeof as === 'string' ? motion[as] : as) : as;

  return (
    <Tag className={base} whileHover={hoverMotion} {...props}>
      {children}
    </Tag>
  );
}
