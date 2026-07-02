import { motion } from 'framer-motion';
import { Users, FileText, Gem } from 'lucide-react';
import { Container, Divider, IconBox } from '../ui';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stats = [
  { icon: Users, value: '1 200+', label: 'Проведённых консультаций' },
  { icon: Gem, value: 'Индивидуально', label: 'Персональный подход к каждому' },
  { icon: FileText, value: 'Детальная карта', label: 'Подробный печатный разбор' },
];

export default function Advantages() {
  return (
    <div className="relative z-10 pb-section-sm">
      <Container>
        <Divider className="mb-12" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-3 gap-8"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="text-center space-y-3"
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
              >
                <IconBox icon={Icon} size="md" className="!mx-auto" />
                <div className="space-y-1">
                  <p className="font-serif text-xl md:text-2xl font-light text-premium-text">
                    {stat.value}
                  </p>
                  <p className="text-premium-text-secondary text-sm font-sans">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <Divider className="mt-12" />
      </Container>
    </div>
  );
}
