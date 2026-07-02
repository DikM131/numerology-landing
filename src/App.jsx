import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import ProblemCards from './components/ProblemCards';
import PersonalMeeting from './components/PersonalMeeting';
import Calculator from './components/Calculator';
import CaptureForm from './components/CaptureForm';
import Footer from './components/Footer';
import NotImplementedModal from './components/NotImplementedModal';

export default function App() {
  const [result, setResult] = useState(null);
  const [notImplOpen, setNotImplOpen] = useState(false);

  const handleCalculate = useCallback((name, birthDate) => {
    setResult({ name, birthDate });
    setTimeout(() => {
      document.getElementById('result')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  const handleReset = useCallback(() => {
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      className="relative min-h-screen bg-premium-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Background />
      <Header />
      <Hero onCalculate={handleCalculate} />
      <Advantages />

      {!result && (
        <>
          <ProblemCards />
          <PersonalMeeting />
        </>
      )}

      {result && (
        <Calculator
          name={result.name}
          birthDate={result.birthDate}
          onReset={handleReset}
        />
      )}

      <CaptureForm />
      <Footer onSocialClick={() => setNotImplOpen(true)} />
      <NotImplementedModal isOpen={notImplOpen} onClose={() => setNotImplOpen(false)} />
    </motion.div>
  );
}
