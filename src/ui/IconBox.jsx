import { motion } from 'framer-motion';

export default function IconBox({ icon: Icon, className = '', size = 'md' }) {
  const sizes = {
    sm: 'w-10 h-10 rounded-icon',
    md: 'w-12 h-12 rounded-icon',
    lg: 'w-14 h-14 rounded-icon',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <motion.div
      className={`${sizes[size]} bg-amber-400/5 flex items-center justify-center flex-shrink-0 ${className}`}
      whileHover={{
        scale: 1.15,
        rotate: 4,
        backgroundColor: 'rgba(212,168,83,0.12)',
        boxShadow: '0 0 30px rgba(212,168,83,0.15)',
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      {Icon && (
        <motion.div
          whileHover={{
            rotate: -4,
            scale: 1.1,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          <Icon className={`${iconSizes[size]} text-amber-400/60`} />
        </motion.div>
      )}
    </motion.div>
  );
}
