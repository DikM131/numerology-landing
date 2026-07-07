import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, FileText, Gem } from 'lucide-react';
import { Container, Section, Divider, IconBox } from '../ui';

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

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(value.replace(/[^0-9]/g, ''));
    if (isNaN(num)) { setDisplay(value); return; }
    const suffix = value.replace(/[0-9]/g, '');
    let start = 0;
    const duration = 1500;
    const step = Math.max(1, Math.floor(num / 30));
    const interval = setInterval(() => {
      start += step;
      if (start >= num) {
        setDisplay(value);
        clearInterval(interval);
      } else {
        setDisplay(start + suffix);
      }
    }, duration / (num / step));
    return () => clearInterval(interval);
  }, [isInView, value]);

  return <span>{display || value}</span>;
}

export default function Advantages() {
  return (
    <Section className="pt-0 md:pt-0">
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
                whileHover={{ y: -6, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
              >
                <IconBox icon={Icon} size="md" className="!mx-auto" />
                <div className="space-y-1">
                  <p className="typo-h4 text-premium-text">
                    <AnimatedNumber value={stat.value} />
                  </p>
                  <p className="typo-small text-premium-text-secondary">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <Divider className="mt-12" />
      </Container>
    </Section>
  );
}
