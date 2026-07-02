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
    <div
      className={`${sizes[size]} bg-amber-400/5 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400/10 transition-colors duration-300 ${className}`}
    >
      {Icon && <Icon className={`${iconSizes[size]} text-amber-400/60`} />}
    </div>
  );
}
