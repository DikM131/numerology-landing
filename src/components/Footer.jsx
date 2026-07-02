import { MessageCircle, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container, Divider } from '../ui';
import ScrollReveal from './ScrollReveal';

const socials = [
  { icon: Send, label: 'Telegram' },
  { icon: MessageCircle, label: 'WhatsApp' },
  { icon: Mail, label: 'Email' },
];

export default function Footer({ onSocialClick }) {
  return (
    <footer id="footer" className="relative z-10 border-t border-white/[0.04]">
      <ScrollReveal>
        <Container className="py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-300 flex items-center justify-center transition-shadow duration-500 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                <span className="text-premium-bg font-serif font-bold text-base">N</span>
              </div>
              <span className="font-serif text-lg text-premium-text/80">Numerolog</span>
            </a>

            <nav className="flex items-center gap-8">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.button
                    key={social.label}
                    onClick={onSocialClick}
                    className="flex items-center gap-2 text-premium-text-secondary text-sm font-sans cursor-pointer"
                    whileHover={{
                      color: '#f8fafc',
                      scale: 1.05,
                      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{social.label}</span>
                  </motion.button>
                );
              })}
            </nav>
          </div>

          <Divider className="mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-premium-text-secondary/40 text-xs font-sans">
              &copy; 2026 Все права защищены
            </p>
            <p className="text-premium-text-secondary/30 text-[11px] font-sans text-center max-w-xl leading-relaxed">
              Информация на сайте носит ознакомительный характер и не является
              медицинской консультацией. Результаты индивидуальны. Не
              рекомендуется лицам младше 18 лет.
            </p>
          </div>
        </Container>
      </ScrollReveal>
    </footer>
  );
}
