import { motion, AnimatePresence } from 'framer-motion';
import { numberDescriptions } from '../data/numerologyData';
import { Container, Section } from '../ui';
import ResultSection from './ResultSection';
import BlurredBlock from './BlurredBlock';
import ScrollReveal from './ScrollReveal';

function calculateLifePath(birthDate) {
  let digits = birthDate.replace(/\D/g, '').split('').map(Number);
  let sum = digits.reduce((acc, d) => acc + d, 0);
  while (sum > 9) {
    sum = String(sum).split('').reduce((a, b) => a + Number(b), 0);
  }
  return sum;
}

export default function Calculator({ name, birthDate, onReset }) {
  const number = calculateLifePath(birthDate);
  const data = numberDescriptions[number];

  return (
    <Section id="result">
      <ScrollReveal>
        <Container className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ResultSection name={name} number={number} data={data} />

              <div className="mt-16">
                <BlurredBlock />
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={onReset}
                  className="typo-caption text-premium-text-secondary/50 hover:text-premium-text-secondary/70 transition-colors duration-300 underline underline-offset-4"
                >
                  Рассчитать заново
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </ScrollReveal>
    </Section>
  );
}
