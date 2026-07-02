import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, ArrowRight, Lock, Check } from 'lucide-react';
import { Container, Section, Card, Input, Button } from '../ui';
import ScrollReveal from './ScrollReveal';

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
          <Card hover={false} padding={false} className="shadow-gold p-8 md:p-14">
            {!submitted ? (
              <div className="max-w-lg mx-auto space-y-8">
                <div className="text-center space-y-3">
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-premium-text">
                    Раскрыть полную карту
                  </h2>
                  <p className="text-premium-text-secondary text-sm md:text-base font-sans font-light">
                    Получите полный нумерологический разбор и{' '}
                    <span className="text-amber-400">персональный бонус</span> к
                    консультации
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input icon={User} type="text" placeholder="Ваше имя" required />
                  <Input icon={Phone} type="tel" placeholder="+7 (___) ___-__-__" required />

                  <Button type="submit" size="xl" className="w-full">
                    Раскрыть полную карту и получить бонус
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </Button>
                </form>

                <div className="flex items-center justify-center gap-2 text-premium-text-secondary/30 text-xs font-sans">
                  <Lock className="w-3 h-3" />
                  <span>Ваши данные в безопасности</span>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-6 py-8"
              >
                <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7 text-amber-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-light text-premium-text">
                    Заявка принята!
                  </h3>
                  <p className="text-premium-text-secondary text-sm font-sans">
                    Я свяжусь с вами в ближайшее время для уточнения деталей
                  </p>
                </div>
              </motion.div>
            )}
          </Card>
        </Container>
      </ScrollReveal>
    </Section>
  );
}
