import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Container, Divider } from '../ui';
import ScrollReveal from './ScrollReveal';

export default function PersonalMeeting() {
  return (
    <section id="about" className="relative z-10 py-section-sm md:py-section">
      <ScrollReveal>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-premium-bg/60 via-transparent to-transparent z-10" />
              <div
                className="absolute -inset-20 opacity-40"
                style={{
                  background:
                    'radial-gradient(ellipse 400px 400px at 50% 40%, rgba(251,191,36,0.15) 0%, transparent 70%)',
                }}
              />
              <img
                src="./images/специалист.png"
                alt="Вера — нумеролог"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-premium-bg/80 to-transparent z-10" />
            </motion.div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
                  Почему{' '}
                  <span className="text-gradient-gold">личная встреча?</span>
                </h2>
                <p className="text-premium-text-secondary text-base md:text-lg font-sans leading-relaxed font-light">
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
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-amber-400/60 mt-2.5 flex-shrink-0" />
                    <p className="text-premium-text text-sm font-sans">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Divider className="my-16" />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="w-12 h-12 rounded-full bg-amber-400/5 flex items-center justify-center mx-auto mb-8">
              <Quote className="w-5 h-5 text-amber-400/30" />
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light italic text-premium-text/80 leading-relaxed">
              &ldquo;Цифры — это не магия. Это язык, на котором написана ваша
              жизнь. Моя задача — научить вас его читать.&rdquo;
            </blockquote>
            <div className="mt-10">
              <div className="w-8 h-[1px] bg-amber-400/20 mx-auto mb-6" />
              <p className="text-premium-text font-sans text-sm tracking-wide">Вера</p>
              <p className="text-premium-text-secondary/50 text-xs font-sans mt-1">
                Практикующий нумеролог, 1 год опыта
              </p>
            </div>
          </div>
        </Container>
      </ScrollReveal>
    </section>
  );
}
