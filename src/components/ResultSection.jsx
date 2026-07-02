import { motion } from 'framer-motion';

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function ResultSection({ name, number, data }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="text-center space-y-10"
    >
      <motion.div variants={fadeUp} className="space-y-3">
        <p className="font-sans text-premium-text-secondary text-sm md:text-base tracking-widest uppercase">
          Ваш персональный код
        </p>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-premium-text">
          {name}, ваше Число Пути —{' '}
          <span className="text-gradient-gold">{number}</span>
        </h2>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1], type: 'spring', stiffness: 80 }}
          className="text-[100px] md:text-[120px] lg:text-[140px] font-serif font-light text-amber-400/90 select-none"
          style={{
            textShadow: '0 0 40px rgba(251,191,36,0.15), 0 0 80px rgba(251,191,36,0.05)',
          }}
        >
          {number}
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
            className="w-48 h-48 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)',
            }}
          />
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="max-w-2xl mx-auto space-y-6">
        <h3 className="font-serif text-2xl md:text-3xl font-light text-premium-text">
          {data.title}
        </h3>
        <p className="text-premium-text-secondary text-base md:text-lg font-sans leading-relaxed font-light">
          {data.description}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <p className="text-sm text-premium-text-secondary font-sans uppercase tracking-widest mb-3">
            Ваша главная сила
          </p>
          <p className="text-premium-text font-serif text-lg md:text-xl font-light italic">
            "{data.strength}"
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
