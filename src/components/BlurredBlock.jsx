import { Lock } from 'lucide-react';
import { Card } from '../ui';

export default function BlurredBlock() {
  return (
    <div className="relative overflow-hidden rounded-card">
      <Card hover={false} padding={false} className="text-center space-y-6 relative p-8 md:p-10">
        <div className="absolute inset-0 backdrop-blur-xl z-10 flex flex-col items-center justify-center rounded-3xl">
          <div className="w-16 h-16 rounded-full bg-amber-400/5 flex items-center justify-center mb-6">
            <Lock className="w-7 h-7 text-amber-400/40" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-light text-premium-text/90 mb-3">
            Полный финансовый и кармический код
          </h3>
          <p className="text-premium-text-secondary/60 text-sm md:text-base font-sans max-w-md">
            Эти данные доступны только при индивидуальной консультации. Оставьте
            заявку, чтобы получить полную расшифровку.
          </p>
        </div>

        <div className="space-y-4 opacity-20 select-none pointer-events-none">
          <p className="font-sans text-sm uppercase tracking-widest text-premium-text-secondary">
            Финансовый потенциал
          </p>
          <div className="h-4 w-3/4 mx-auto bg-white/5 rounded-full" />
          <div className="h-4 w-1/2 mx-auto bg-white/5 rounded-full" />

          <p className="font-sans text-sm uppercase tracking-widest text-premium-text-secondary pt-4">
            Кармические задачи
          </p>
          <div className="h-4 w-2/3 mx-auto bg-white/5 rounded-full" />
          <div className="h-4 w-4/5 mx-auto bg-white/5 rounded-full" />

          <p className="font-sans text-sm uppercase tracking-widest text-premium-text-secondary pt-4">
            Благоприятные периоды
          </p>
          <div className="flex gap-2 justify-center">
            {[2025, 2026, 2027, 2028].map((year) => (
              <div
                key={year}
                className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center"
              >
                <span className="text-xs text-premium-text-secondary/30">{year}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
