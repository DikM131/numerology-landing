import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, ArrowRight, Lock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CaptureForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="capture" className="relative z-10 py-16 md:py-24">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="glass rounded-3xl p-8 md:p-14 glow-gold">
            {!submitted ? (
              <div className="max-w-lg mx-auto space-y-8">
                <div className="text-center space-y-3">
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-premium-text">
                    Раскрыть полную карту
                  </h2>
                  <p className="text-premium-text-secondary text-sm md:text-base font-sans font-light">
                    Получите полный нумерологический разбор и{' '}
                    <span className="text-amber-400">персональный бонус</span> к
                    консультации
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-premium-text-secondary/40" />
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="input-premium px-5 pl-12"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-premium-text-secondary/40" />
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="input-premium px-5 pl-12"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full py-4 rounded-2xl text-base font-medium flex items-center justify-center gap-2 group"
                  >
                    Раскрыть полную карту и получить бонус
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="flex items-center justify-center gap-2 text-premium-text-secondary/30 text-xs font-sans">
                  <Lock className="w-3 h-3" />
                  <span>Ваши данные в безопасности</span>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-6 py-8"
              >
                <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center mx-auto">
                  <svg
                    className="w-7 h-7 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-light text-premium-text">
                    Заявка принята!
                  </h3>
                  <p className="text-premium-text-secondary text-sm font-sans">
                    Я свяжусь с вами в ближайшее время для уточнения деталей
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
