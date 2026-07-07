import { MessageCircle, Mail, Send, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import ScrollReveal from './ScrollReveal';

const navItems = [
  { label: 'Главная', href: '#hero' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Контакты', href: '#footer' },
];

const contacts = [
  { icon: Send, label: 'Telegram', href: 'https://t.me/' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/' },
  { icon: Mail, label: 'Email', href: 'mailto:' },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Footer({ onSocialClick }) {
  return (
    <footer id="footer" className="relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-premium-bg via-[#050714] to-[#030712]" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(212,168,83,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="absolute top-24 left-[5%] w-72 h-72 rounded-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at center, rgba(212,168,83,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div className="absolute bottom-32 right-[5%] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(212,168,83,0.03) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Decorative gold lines top */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />
      <div className="relative mx-auto w-1/2 h-px mt-px bg-gradient-to-r from-transparent via-amber-400/5 to-transparent" />

      <Container className="relative z-10 pt-24 pb-12">
        <ScrollReveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Huge logo */}
              <motion.a
                variants={fadeUp}
                href="#hero"
                className="inline-flex flex-col items-center gap-8 group mb-20"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  className="w-36 h-36 md:w-40 md:h-40 rounded-[2rem] flex items-center justify-center relative"
                  style={{
                    background: 'linear-gradient(135deg, #d4a853, #e8c872)',
                    boxShadow: '0 0 60px rgba(212,168,83,0.15), 0 0 120px rgba(212,168,83,0.05)',
                  }}
                  whileHover={{ boxShadow: '0 0 80px rgba(212,168,83,0.3), 0 0 160px rgba(212,168,83,0.1)' }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="absolute -inset-4 rounded-[2.5rem] border border-amber-400/10"
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.03, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <span className="text-premium-bg font-serif font-bold text-5xl md:text-6xl tracking-tight">
                    N
                  </span>
                </motion.div>
                <span className="typo-h4 text-premium-text/60 group-hover:text-premium-text/80 transition-colors duration-500">
                  Numerolog
                </span>
              </motion.a>

            {/* Decorative diamond divider */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-5 mb-20">
              <div className="h-px flex-1 max-w-[180px] bg-gradient-to-r from-transparent via-amber-400/20 to-amber-400/10" />
              <motion.div
                className="w-2 h-2 rotate-45 bg-amber-400/40"
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="h-px flex-1 max-w-[180px] bg-gradient-to-r from-amber-400/10 via-amber-400/20 to-transparent" />
            </motion.div>

            {/* Contact glass card */}
            <motion.div
              variants={fadeUp}
              className="max-w-2xl mx-auto mb-20 glass-card-elevated rounded-2xl p-10 md:p-12"
            >
              <p className="typo-caption text-premium-text-secondary/50 mb-8 tracking-[0.15em]">
                Свяжитесь со мной
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                {contacts.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      onClick={(e) => { e.preventDefault(); onSocialClick?.(contact.label); }}
                      className="flex items-center gap-3 typo-body text-premium-text-secondary cursor-pointer group/contact"
                      whileHover={{
                        color: '#f8fafc',
                        scale: 1.06,
                        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-amber-400/5 flex items-center justify-center"
                        whileHover={{
                          rotate: [0, -8, 8, 0],
                          scale: 1.12,
                          backgroundColor: 'rgba(212,168,83,0.15)',
                          boxShadow: '0 0 20px rgba(212,168,83,0.1)',
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-5 h-5 text-amber-400/50 group-hover/contact:text-amber-400/80 transition-colors duration-300" />
                      </motion.div>
                      <span>{contact.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.nav
              variants={fadeUp}
              className="flex items-center justify-center gap-10 md:gap-14 mb-20"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="typo-small text-premium-text-secondary/60 relative"
                  whileHover={{
                    color: '#f8fafc',
                    y: -1,
                    transition: { duration: 0.3 },
                  }}
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px bg-amber-400/40 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.a>
              ))}
            </motion.nav>

            {/* Bottom gold line */}
            <motion.div
              variants={fadeUp}
              className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-10"
            />

            {/* Bottom row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <motion.a
                href="#"
                className="typo-caption text-premium-text-secondary/50 hover:text-premium-text-secondary/70 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                Политика конфиденциальности
              </motion.a>
              <p className="typo-caption text-premium-text-secondary/50">
                &copy; 2026 Все права защищены
              </p>
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              variants={fadeUp}
              className="typo-small text-premium-text-secondary/40 text-center max-w-2xl mx-auto mt-8 leading-relaxed"
            >
              Информация на сайте носит ознакомительный характер и не является
              медицинской консультацией. Результаты индивидуальны. Не
              рекомендуется лицам младше 18 лет.
            </motion.p>
          </motion.div>
        </ScrollReveal>
      </Container>

      {/* Scroll to top */}
      <motion.a
        href="#hero"
        className="fixed bottom-8 right-8 w-11 h-11 rounded-full flex items-center justify-center z-50 border border-white/[0.06]"
        style={{ background: 'rgba(255,255,255,0.04)' }}
        whileHover={{ scale: 1.12, y: -3, backgroundColor: 'rgba(212,168,83,0.1)', borderColor: 'rgba(212,168,83,0.2)' }}
        whileTap={{ scale: 0.92 }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <ArrowUp className="w-4 h-4 text-premium-text-secondary/50" />
      </motion.a>
    </footer>
  );
}