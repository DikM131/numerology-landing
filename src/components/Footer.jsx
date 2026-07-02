import { MessageCircle, Mail, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const socials = [
  { icon: Send, label: 'Telegram', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
  { icon: Mail, label: 'Email', href: '#' },
];

export default function Footer({ onSocialClick }) {
  return (
    <footer id="footer" className="relative z-10 border-t border-white/[0.04]">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-300 flex items-center justify-center">
                <span className="text-premium-bg font-serif font-bold text-base">N</span>
              </div>
              <span className="font-serif text-lg text-premium-text/80">Numerolog</span>
            </a>

            <nav className="flex items-center gap-8">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    onClick={onSocialClick}
                    className="flex items-center gap-2 text-premium-text-secondary hover:text-premium-text transition-colors duration-300 text-sm font-sans"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{social.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="divider-premium mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-premium-text-secondary/40 text-xs font-sans">
              © 2026 Все права защищены
            </p>
            <p className="text-premium-text-secondary/30 text-[10px] font-sans text-center max-w-xl">
              Информация на сайте носит ознакомительный характер и не является
              медицинской консультацией. Результаты индивидуальны. Не
              рекомендуется лицам младше 18 лет.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
