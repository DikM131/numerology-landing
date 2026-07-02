import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { Button } from '../ui';

export default function NotImplementedModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 backdrop-blur-xl bg-premium-bg/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative glass rounded-3xl p-10 md:p-14 text-center max-w-md mx-6 space-y-6"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center mx-auto">
              <AlertCircle className="w-7 h-7 text-amber-400/60" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-light text-premium-text">
                Ещё не реализовано
              </h3>
              <p className="text-premium-text-secondary text-sm font-sans">
                Этот раздел появится в будущей версии.
                <br />
                Следите за обновлениями.
              </p>
            </div>
            <Button onClick={onClose} size="lg">
              Закрыть
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
