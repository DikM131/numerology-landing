import { motion } from 'framer-motion';
import { Compass, Heart, Crosshair } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const problems = [
  {
    icon: Compass,
    title: 'Не знаете своё направление',
    description:
      'Чувствуете, что стоите на месте и не понимаете, куда двигаться дальше. Нумерология помогает увидеть ваш истинный путь и предназначение.',
  },
  {
    icon: Heart,
    title: 'Сомнения в своих силах',
    description:
      'Внутренний критик мешает принимать решения. Ваш личный код раскроет сильные стороны, о которых вы даже не подозревали.',
  },
  {
    icon: Crosshair,
    title: 'Повторяющиеся сценарии',
    description:
      'Одни и те же ситуации повторяются в жизни снова и снова. Понимание числовых циклов поможет разорвать этот круг.',
  },
];

export default function ProblemCards() {
  return (
    <section className="relative z-10 py-16 md:py-24">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
              Знакомы ли вам эти{' '}
              <span className="text-gradient-gold">ощущения?</span>
            </h2>
            <p className="text-premium-text-secondary text-base md:text-lg font-sans max-w-2xl mx-auto font-light">
              Тысячи людей приходят ко мне с этими вопросами. И за каждой
              консультацией — история осознания и перемен.
            </p>
          </div>

            <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, i) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={i}
                  className="glass rounded-3xl p-8 md:p-10 space-y-5 card-shine group cursor-default"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.4 } }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/5 flex items-center justify-center group-hover:bg-amber-400/10 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-amber-400/60" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl md:text-2xl font-light text-premium-text">
                      {problem.title}
                    </h3>
                    <p className="text-premium-text-secondary text-sm font-sans leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
