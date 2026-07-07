import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, ArrowRight, Lock, Check } from 'lucide-react';
import { Container, Section, Card, Input, Button } from '../ui';
import ScrollReveal from './ScrollReveal';

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function CaptureForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section id="capture">
      <ScrollReveal>
        <Container className="max-w-4xl">
          <Card hover={false} padding={false} variant="elevated" className="p-8 md:p-16">
            {!submitted ? (
              <motion.div
                className="max-w-lg mx-auto space-y-8"
                variants={formVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fieldVariants} className="text-center space-y-4">
                  <h2 className="typo-h2 text-premium-text">
                    Раскрыть полную карту
                  </h2>
                  <p className="typo-lead text-premium-text-secondary/80 max-w-sm mx-auto">
                    Получите полный нумерологический разбор и{' '}
                    <span className="text-amber-400">персональный бонус</span> к
                    консультации
                  </p>
                </motion.div>

                <motion.form variants={fieldVariants} onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    variants={fieldVariants}
                    whileHover={{ scale: 1.005 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Input icon={User} type="text" placeholder="Ваше имя" required />
                  </motion.div>
                  <motion.div
                    variants={fieldVariants}
                    whileHover={{ scale: 1.005 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Input icon={Phone} type="tel" placeholder="+7 (___) ___-__-__" required />
                  </motion.div>

                  <motion.div variants={fieldVariants}>
                    <Button type="submit" size="xl" className="w-full">
                      Раскрыть полную карту и получить бонус
                      <motion.span
                        className="inline-flex"
                        variants={{ rest: { x: 0 }, hover: { x: 3 } }}
                        initial="rest"
                        whileHover="hover"
                        transition={{ duration: 0.4 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </motion.form>

                <motion.div
                  variants={fieldVariants}
                  className="flex items-center justify-center gap-2 typo-caption text-premium-text-secondary/50"
                >
                  <Lock className="w-3 h-3" />
                  <span>Ваши данные в безопасности</span>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center space-y-6 py-8"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center mx-auto"
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 120 }}
                >
                  <Check className="w-7 h-7 text-amber-400" />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h3 className="typo-h3 text-premium-text">
                    Заявка принята!
                  </h3>
                  <p className="typo-small text-premium-text-secondary">
                    Я свяжусь с вами в ближайшее время для уточнения деталей
                  </p>
                </motion.div>
              </motion.div>
            )}
          </Card>
        </Container>
      </ScrollReveal>
    </Section>
  );
}
