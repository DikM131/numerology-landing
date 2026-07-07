import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Input({
  icon: Icon,
  className = '',
  onFocus,
  onBlur,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      className="relative"
      animate={{
        scale: focused ? 1.01 : 1,
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {Icon && (
        <motion.div
          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
          animate={{
            color: focused ? 'rgba(212,168,83,0.6)' : 'rgba(148,163,184,0.4)',
            rotate: focused ? [0, -10, 0] : 0,
            scale: focused ? 1.1 : 1,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Icon className="w-4 h-4" />
        </motion.div>
      )}
      <input
        className={`input-premium px-5 ${Icon ? 'pl-12' : ''} ${className}`}
        onFocus={(e) => { setFocused(true); onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); onBlur?.(e); }}
        {...props}
      />
      {focused && (
        <motion.div
          className="absolute inset-0 rounded-[16px] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            boxShadow: '0 0 24px rgba(212,168,83,0.08), inset 0 0 1px rgba(212,168,83,0.2)',
          }}
        />
      )}
    </motion.div>
  );
}
