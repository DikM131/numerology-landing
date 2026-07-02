import { motion } from 'framer-motion';
import { Users, FileText, Gem } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const stats = [
  { icon: Users, value: '1 200+', label: 'Проведённых консультаций' },
  { icon: Gem, value: 'Индивидуально', label: 'Персональный подход к каждому' },
  { icon: FileText, value: 'Детальная карта', label: 'Подробный печатный разбор' },
];

export default function Advantages() {
  return (
    <section className="relative z-10 pb-16 md:pb-24">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="divider-premium mb-12" />

          <div className="grid sm:grid-cols-3 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  className="text-center space-y-3"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <div className="w-12 h-12 rounded-full bg-amber-400/5 flex items-center justify-center mx-auto">
                    <Icon className="w-5 h-5 text-amber-400/70" />
                  </div>
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
          </div>

          <div className="divider-premium mt-12" />
        </div>
      </ScrollReveal>
    </section>
  );
}
