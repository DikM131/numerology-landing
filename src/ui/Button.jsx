import { motion } from 'framer-motion';

export default function Button({
  children,
  className = '',
  size = 'md',
  as: Component = 'button',
  href,
  ...props
}) {
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
    xl: 'px-10 py-4 text-base',
  };

  const base = `btn-gold group inline-flex items-center justify-center gap-2 rounded-button font-medium cursor-pointer ${sizes[size]} ${className}`;

  const MotionTag = motion[Component] || motion.button;

  return (
    <MotionTag
      href={href}
      className={base}
      whileHover={{ scale: 1.04, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
      whileTap={{ scale: 0.97, transition: { duration: 0.2 } }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
