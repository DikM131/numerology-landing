import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Shield, Sparkles, BarChart3 } from 'lucide-react';

const benefits = [
  { icon: Shield, text: 'Более 1200 консультаций' },
  { icon: Sparkles, text: 'Индивидуальный разбор' },
  { icon: BarChart3, text: 'Подробная печатная карта' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const cardVariants = {
  hidden: { opacity: 0, x: 80, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero({ onCalculate }) {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && birthDate) {
      onCalculate(name, birthDate);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <motion.h1
                variants={itemVariants}
                className="hero-headline font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] tracking-tight"
              >
                Узнайте свой
                <br />
                <span className="text-gradient-gold">скрытый потенциал</span>
                <br />
                за 1 минуту
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-premium-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-lg font-sans font-light"
              >
                Персональный нумерологический разбор вашей даты рождения.
                Откройте свои сильные стороны и предназначение.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="space-y-4">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3 h-3 text-amber-400" />
                    </div>
                    <span className="text-premium-text-secondary text-sm sm:text-base font-sans">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div variants={cardVariants} className="relative">
            <div className="glass-light rounded-3xl p-8 md:p-10 space-y-6 glow-gold">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl md:text-3xl font-light text-premium-text">
                  Рассчитайте свой код
                </h3>
                <p className="text-premium-text-secondary text-sm font-sans">
                  Введите данные, чтобы узнать число вашего жизненного пути
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs text-premium-text-secondary font-sans uppercase tracking-widest">
                    Ваше имя
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-premium-text-secondary/40" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Александр"
                      className="input-premium px-5 pl-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-premium-text-secondary font-sans uppercase tracking-widest">
                    Дата рождения
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-premium-text-secondary/40" />
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="input-premium px-5 pl-12"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-4 rounded-2xl text-base font-medium flex items-center justify-center gap-2 group"
                >
                  Рассчитать мой код
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="text-center text-premium-text-secondary/40 text-xs font-sans">
                Конфиденциальность гарантирована
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
