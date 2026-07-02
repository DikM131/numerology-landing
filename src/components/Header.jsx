import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Главная', href: '#hero' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Контакты', href: '#footer' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-premium-bg/70 backdrop-blur-xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
        style={{ height: '90px' }}
      >
        <div className="h-full max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-300 flex items-center justify-center shadow-lg shadow-amber-400/20">
              <span className="text-premium-bg font-serif font-bold text-lg">N</span>
            </div>
            <span className="font-serif text-lg text-premium-text/90 hidden sm:block">
              Numerolog
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-premium-text-secondary hover:text-premium-text transition-colors duration-300 text-sm font-sans tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#capture"
              className="btn-gold px-6 py-2.5 rounded-full text-sm font-medium"
            >
              Получить консультацию
            </a>
          </nav>

          <a
            href="#capture"
            className="lg:hidden btn-gold px-5 py-2 rounded-full text-sm font-medium"
          >
            Консультация
          </a>
        </div>
      </header>
    </AnimatePresence>
  );
}
