import { motion } from 'framer-motion';
import { Compass, Heart, Crosshair } from 'lucide-react';
import { Container, Section as SectionBase, SectionTitle, Card, IconBox } from '../ui';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

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
    <SectionBase>
      <Container>
        <SectionTitle
          title="Знакомы ли вам эти"
          highlight="ощущения?"
          subtitle="Тысячи людей приходят ко мне с этими вопросами. И за каждой консультацией — история осознания и перемен."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <Card key={i} as={motion.div} variants={cardVariants}>
                <div className="space-y-5">
                  <IconBox icon={Icon} size="lg" />
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl md:text-2xl font-light text-premium-text">
                      {problem.title}
                    </h3>
                    <p className="text-premium-text-secondary text-sm font-sans leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </motion.div>
      </Container>
    </SectionBase>
  );
}
