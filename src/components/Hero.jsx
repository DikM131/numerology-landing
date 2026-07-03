import { useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }, [mouseX, mouseY]);

  const sphereX = useTransform(springX, [0, 1], [-12, 12]);
  const sphereY = useTransform(springY, [0, 1], [-12, 12]);
  const ring1X = useTransform(springX, [0, 1], [-8, 8]);
  const ring1Y = useTransform(springY, [0, 1], [-8, 8]);
  const ring2X = useTransform(springX, [0, 1], [10, -10]);
  const ring2Y = useTransform(springY, [0, 1], [10, -10]);
  const ring3X = useTransform(springX, [0, 1], [-5, 5]);
  const ring3Y = useTransform(springY, [0, 1], [-5, 5]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-premium-bg" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1400px] max-h-[1400px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(251,191,36,0.06) 0%, transparent 60%)',
        }}
      />

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

      {/* Massive background sphere — spans full section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="rounded-full"
          style={{
            position: 'absolute',
            top: '50%',
            left: 'calc(58% + 150px)',
            width: 'min(90vw, 1200px)',
            height: 'min(90vw, 1200px)',
            marginLeft: 'calc(min(90vw, 1200px) * -0.5)',
            marginTop: 'calc(min(90vw, 1200px) * -0.5)',
            background: 'radial-gradient(circle at 35% 35%, rgba(251,191,36,0.07) 0%, rgba(251,191,36,0.017) 30%, rgba(255,255,255,0.007) 50%, transparent 70%)',
            border: '1.5px solid rgba(251,191,36,0.07)',
            boxShadow: 'inset 0 0 100px rgba(251,191,36,0.03), 0 0 150px rgba(251,191,36,0.017)',
            x: sphereX,
            y: sphereY,
          }}
        />

        <motion.div
          className="rounded-full"
          style={{
            position: 'absolute',
            top: '50%',
            left: 'calc(58% + 150px)',
            width: 'min(96vw, 1400px)',
            height: 'min(96vw, 1400px)',
            marginLeft: 'calc(min(96vw, 1400px) * -0.5)',
            marginTop: 'calc(min(96vw, 1400px) * -0.5)',
            border: '1.5px solid rgba(251,191,36,0.08)',
            boxShadow: '0 0 20px rgba(251,191,36,0.02)',
            x: ring1X,
            y: ring1Y,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />

        <motion.div
          className="rounded-full"
          style={{
            position: 'absolute',
            top: '50%',
            left: 'calc(58% + 150px)',
            width: 'min(88vw, 1300px)',
            height: 'min(88vw, 1300px)',
            marginLeft: 'calc(min(88vw, 1300px) * -0.5)',
            marginTop: 'calc(min(88vw, 1300px) * -0.5)',
            border: '1.5px solid rgba(251,191,36,0.06)',
            boxShadow: '0 0 15px rgba(251,191,36,0.015)',
            x: ring2X,
            y: ring2Y,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
        />

        {Array.from({ length: 18 }, (_, i) => {
          const group = i % 3;
          const radius = 590 + group * 55 + (i * 7) % 31 - 15;
          const angleOffset = (i / 18) * 2 * Math.PI;
          const speed = 57 + group * 34;
          const size = 3 + group;
          const steps = 16;
          const xKf = Array.from({ length: steps + 1 }, (_, k) =>
            radius * Math.cos((k / steps) * 2 * Math.PI + angleOffset)
          );
          const yKf = Array.from({ length: steps + 1 }, (_, k) =>
            radius * Math.sin((k / steps) * 2 * Math.PI + angleOffset)
          );
          return (
            <motion.div
              key={`orbit-${i}`}
              className="absolute rounded-full"
              style={{
                position: 'absolute',
                top: '50%',
                left: 'calc(58% + 150px)',
                width: size,
                height: size,
                marginLeft: -size / 2,
                marginTop: -size / 2,
                background: 'rgb(251, 191, 36)',
                boxShadow: `0 0 ${size * 5}px rgba(251,191,36,0.5), 0 0 ${size * 10}px rgba(251,191,36,0.2)`,
              }}
              initial={{ x: xKf[0], y: yKf[0] }}
              animate={{
                x: xKf,
                y: yKf,
                opacity: [0.15, 0.7, 0.3, 0.6, 0.15],
                scale: [1, 1.5, 0.8, 1.3, 1],
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          );
        })}
      </div>

      <Container className="w-full relative z-10 pt-32 pb-section-sm md:pb-section">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="space-y-10">
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
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[1.0] tracking-tight text-premium-text"
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

            <div className="space-y-4">
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

          <motion.div variants={cardVariants} className="relative flex items-center justify-center" style={{ minHeight: '620px' }}>
            <div className="relative z-10 w-full max-w-md">
              <motion.div
                className="absolute -inset-6 rounded-[2rem] pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(251,191,36,0.05) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
                animate={{ opacity: [0.4, 0.65, 0.4], scale: [0.97, 1.03, 0.97] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />

              <GlassCard glow className="relative !p-0 overflow-hidden group">
                <div
                  className="absolute inset-0 rounded-card pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(251,191,36,0.04), inset 0 0 80px rgba(251,191,36,0.02)',
                  }}
                />

                <div className="p-8 md:p-10 space-y-7">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-[1px] bg-amber-400/30" />
                      <span className="text-amber-400/60 text-[11px] font-sans uppercase tracking-[0.2em] font-medium">
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
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
