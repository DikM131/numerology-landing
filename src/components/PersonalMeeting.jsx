import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { Container, Divider, OutlineButton } from '../ui';
import ScrollReveal from './ScrollReveal';

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function PersonalMeeting() {
  return (
    <section id="about" className="relative z-10 py-section-sm md:py-section">
      <ScrollReveal>
        <Container>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <motion.div
              className="glass-card-solid relative aspect-[4/5] rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-premium-bg/60 via-transparent to-transparent z-10" />
              <motion.div
                className="absolute -inset-20 opacity-40"
                style={{
                  background:
                    'radial-gradient(ellipse 400px 400px at 50% 40%, rgba(212,168,83,0.15) 0%, transparent 70%)',
                }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <img
                src="./images/специалист.png"
                alt="Вера — нумеролог"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-premium-bg/80 to-transparent z-10" />
            </motion.div>

            <div className="space-y-10">
              <div className="space-y-5">
                <h2 className="typo-h2 text-premium-text">
                  Почему{' '}
                  <span className="text-gradient-gold">личная встреча?</span>
                </h2>
                <p className="typo-lead text-premium-text-secondary leading-[1.8]">
                  Полный нумерологический разбор невозможно уместить в
                  автоматический расчёт. Живая консультация — это диалог, в
                  котором рождается истинное понимание вашей уникальной картины
                  судьбы.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  'Индивидуальный анализ всех чисел вашей даты рождения',
                  'Расшифровка кармических задач и текущего периода',
                  'Конкретные рекомендации для финансов, отношений и карьеры',
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    variants={bulletVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={i}
                    viewport={{ once: true }}
                    whileHover={{ x: 3 }}
                  >
                    <motion.div
                      className="w-1 h-1 rounded-full bg-amber-400/60 mt-2.5 flex-shrink-0"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                    />
                    <p className="typo-small text-premium-text">{text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="pt-2"
              >
                <OutlineButton as="a" href="#capture" size="lg">
                  Записаться на консультацию
                  <ArrowRight className="w-4 h-4" />
                </OutlineButton>
              </motion.div>
            </div>
          </div>

          <Divider className="my-16" />

          <motion.div
            className="relative max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-amber-400/5 flex items-center justify-center mx-auto mb-8"
              animate={{ boxShadow: ['0 0 0px rgba(212,168,83,0)', '0 0 30px rgba(212,168,83,0.1)', '0 0 0px rgba(212,168,83,0)'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Quote className="w-5 h-5 text-amber-400/30" />
            </motion.div>
            <blockquote className="typo-h2 text-premium-text/80 italic max-w-2xl mx-auto leading-[1.3]">
              &ldquo;Цифры — это не магия. Это язык, на котором написана ваша
              жизнь. Моя задача — научить вас его читать.&rdquo;
            </blockquote>
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="w-8 h-[1px] bg-amber-400/20 mx-auto mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <p className="typo-small text-premium-text">Вера</p>
                <p className="typo-caption text-premium-text-secondary/70 mt-1">
                  Практикующий нумеролог, 1 год опыта
                </p>
            </motion.div>
          </motion.div>
        </Container>
      </ScrollReveal>
    </section>
  );
}
