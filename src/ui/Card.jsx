import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = true,
  as = 'div',
  ...props
}) {
  const base = `glass rounded-card ${padding ? 'p-8 md:p-10' : ''} ${hover ? 'card-shine group' : ''} ${className}`;
  const hoverMotion = hover ? {
    y: -8,
    scale: 1.01,
    boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(251,191,36,0.06)',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  } : {};

  const isMotion = hover || typeof as === 'string';
  const MotionComponent = isMotion
    ? (typeof as === 'string' ? motion[as] : as)
    : as;

  if (isMotion) {
    return (
      <MotionComponent
        className={base}
        whileHover={hoverMotion}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }

  return <MotionComponent className={base} {...props}>{children}</MotionComponent>;
}
