import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCallback } from 'react';

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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) * 0.12;
    const distY = (e.clientY - centerY) * 0.12;
    mouseX.set(Math.max(-8, Math.min(8, distX)));
    mouseY.set(Math.max(-8, Math.min(8, distY)));
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <MotionTag
      href={href}
      className={base}
      style={{ x: springX, y: springY }}
      whileHover={{
        scale: 1.04,
        boxShadow: '0 8px 40px rgba(212,168,83,0.3)',
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }}
      whileTap={{ scale: 0.97, transition: { duration: 0.2 } }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
