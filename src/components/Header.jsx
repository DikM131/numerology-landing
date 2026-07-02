import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container, Button } from '../ui';

const navItems = [
  { label: 'Главная', href: '#hero' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Контакты', href: '#footer' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ height: '90px' }}
      >
        {/* Scroll progress indicator */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px] origin-left z-20 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(251,191,36,0.6), rgba(251,191,36,0.2))',
            scaleX: progress,
            opacity: progress > 0.01 ? 1 : 0,
          }}
          transition={{ duration: 0.1 }}
        />
        {/* Glass background that fades in on scroll */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={false}
          animate={{
            opacity: scrolled ? 1 : 0,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'rgba(2, 6, 23, 0.7)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderBottom: scrolled ? '1px solid rgba(251,191,36,0.1)' : '1px solid transparent',
            boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.15)' : 'none',
          }}
        />

        <Container className="h-full flex items-center justify-between relative z-10">
          <a href="#hero" className="flex items-center" onClick={closeMobile}>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-300 flex items-center justify-center">
              <span className="text-premium-bg font-serif font-bold text-[15px] tracking-tight">N</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-premium-text-secondary/80 text-[13px] font-sans tracking-[0.03em]"
                whileHover={{
                  color: '#f8fafc',
                  y: -1,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button as="a" href="#capture" size="sm">
              Консультация
            </Button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: scrolled ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {mobileOpen ? (
                <X className="w-4 h-4 text-premium-text" />
              ) : (
                <Menu className="w-4 h-4 text-premium-text" />
              )}
            </button>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-premium-bg/80 backdrop-blur-2xl"
              onClick={closeMobile}
            />
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center justify-center h-full gap-9"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-premium-text text-xl font-sans tracking-wide hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <Button
                as="a"
                href="#capture"
                onClick={closeMobile}
                size="lg"
                className="mt-4"
              >
                Получить консультацию
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
