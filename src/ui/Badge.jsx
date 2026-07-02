export default function Badge({ children, className = '', variant = 'default' }) {
  const variants = {
    default: 'bg-amber-400/10 text-amber-400/70',
    ghost: 'bg-white/[0.04] text-premium-text-secondary',
    gold: 'bg-gradient-to-r from-amber-400/20 to-amber-300/20 text-amber-400',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-sans tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
