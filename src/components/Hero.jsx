import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Shield, Sparkles, BarChart3, Lock } from 'lucide-react';
import { Container, GlassCard, Input, Button } from '../ui';

const benefits = [
  { icon: Shield, text: 'Более 1200 консультаций' },
  { icon: Sparkles, text: 'Индивидуальный разбор' },
  { icon: BarChart3, text: 'Подробная печатная карта' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const cardVariants = {
  hidden: { opacity: 0, x: 100, scale: 0.92 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] } },
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Deep background layers */}
      <div className="absolute inset-0 bg-premium-bg" />

      {/* Large central radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1400px] max-h-[1400px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(251,191,36,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Floating blurred gradient orbs */}
      <motion.div
        className="absolute top-[15%] right-[8%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(251,191,36,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ y: [0, -30, 0], scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-[25%] left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(251,191,36,0.03) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{ y: [0, 25, 0], scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Decorative elements */}

      {/* Thin golden ring top-right */}
      <motion.div
        className="absolute top-[12%] right-[12%] w-[140px] h-[140px] pointer-events-none"
        style={{ border: '1px solid rgba(251,191,36,0.08)', borderRadius: '50%' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-[12%] right-[12%] w-[140px] h-[140px] pointer-events-none"
        style={{ border: '1px solid rgba(251,191,36,0.04)', borderRadius: '50%', transform: 'scale(1.4)' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      />

      {/* Thin golden ring bottom-left */}
      <motion.div
        className="absolute bottom-[20%] left-[8%] w-[100px] h-[100px] pointer-events-none"
        style={{ border: '1px solid rgba(251,191,36,0.06)', borderRadius: '50%' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      />

      {/* Thin golden lines */}
      <div className="absolute top-[45%] left-0 w-[200px] h-[1px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.08), transparent)' }}
      />
      <div className="absolute top-[70%] right-0 w-[300px] h-[1px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.06), transparent)' }}
      />
      <div className="absolute top-0 left-[20%] w-[1px] h-[200px] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(251,191,36,0.06), transparent)' }}
      />
      <div className="absolute bottom-0 right-[25%] w-[1px] h-[150px] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(251,191,36,0.04), transparent)' }}
      />

      {/* Golden floating dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-[3px] h-[3px] rounded-full pointer-events-none"
          style={{
            background: 'rgba(251,191,36,0.3)',
            boxShadow: '0 0 6px rgba(251,191,36,0.2)',
            top: `${8 + (i * 7) % 85}%`,
            left: `${5 + (i * 11) % 90}%`,
          }}
          animate={{ opacity: [0.2, 0.7, 0.2], y: [0, (i % 2 === 0 ? -8 : 8), 0] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}

      {/* Main content */}
      <Container className="w-full relative z-10 pt-32 pb-section-sm md:pb-section">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left: Text block */}
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="space-y-8">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 text-amber-400/60 text-xs font-sans uppercase tracking-[0.2em] font-medium"
                >
                  <span className="w-6 h-[1px] bg-amber-400/40" />
                  Персональная нумерология
                </motion.p>
              </div>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] tracking-tight text-premium-text"
              >
                Узнайте свой
                <br />
                <span className="text-gradient-gold text-glow">скрытый потенциал</span>
                <br />
                <span className="text-premium-text/70">за 1 минуту</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-premium-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-lg font-sans font-light"
              >
                Персональный нумерологический разбор вашей даты рождения.
                Откройте свои сильные стороны и предназначение.
              </motion.p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="flex items-center gap-3 text-premium-text-secondary text-sm sm:text-base font-light">
                    <div className="w-5 h-5 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3 h-3 text-amber-400" />
                    </div>
                    {benefit.text}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Premium Glass Form */}
          <motion.div variants={cardVariants} className="relative">
            {/* Glow behind card */}
            <motion.div
              className="absolute -inset-10 rounded-[3rem] pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(251,191,36,0.06) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <GlassCard
              glow
              className="relative !p-0 overflow-hidden group"
              style={{ animation: 'card-float 6s ease-in-out infinite' }}
            >
              {/* Subtle inner border glow */}
              <div
                className="absolute inset-0 rounded-card pointer-events-none"
                style={{
                  boxShadow: 'inset 0 1px 0 rgba(251,191,36,0.1), inset 0 0 60px rgba(251,191,36,0.02)',
                }}
              />

              {/* Card content */}
              <div className="p-8 md:p-10 space-y-7">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-amber-400/30" />
                    <span className="text-amber-400/60 text-[10px] font-sans uppercase tracking-[0.25em] font-medium">
                      Бесплатный расчёт
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-premium-text leading-[1.15]">
                    Рассчитайте свой код
                  </h3>
                  <p className="text-premium-text-secondary/70 text-sm font-sans leading-relaxed">
                    Введите данные, чтобы узнать число вашего жизненного пути
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[11px] text-premium-text-secondary/60 font-sans uppercase tracking-[0.15em]">
                      Ваше имя
                    </label>
                    <Input
                      icon={User}
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Александр"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] text-premium-text-secondary/60 font-sans uppercase tracking-[0.15em]">
                      Дата рождения
                    </label>
                    <Input
                      icon={Calendar}
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" size="xl" className="w-full">
                    Рассчитать мой код
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </Button>
                </form>

                <p className="text-center text-premium-text-secondary/40 text-[11px] font-sans flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3" />
                  Ваши данные в безопасности
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
