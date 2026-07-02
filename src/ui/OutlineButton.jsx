import { motion } from 'framer-motion';

export default function OutlineButton({
  children,
  className = '',
  size = 'md',
  href,
  ...props
}) {
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  const base = `inline-flex items-center justify-center gap-2 rounded-button font-medium text-premium-text-secondary border border-white/10 bg-white/[0.02] cursor-pointer ${sizes[size]} ${className}`;

  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      href={href}
      className={base}
      whileHover={{
        scale: 1.03,
        borderColor: 'rgba(255,255,255,0.2)',
        color: '#f8fafc',
        backgroundColor: 'rgba(255,255,255,0.04)',
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }}
      whileTap={{ scale: 0.97, transition: { duration: 0.2 } }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
