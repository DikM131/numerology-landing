import { motion } from 'framer-motion';

export default function Background() {
  return (
    <>
      {/* Layer 1: Solid base */}
      <div className="fixed inset-0 z-0 bg-premium-bg" />

      {/* Layer 2: Large gold glow (slow pulse) */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: `
            radial-gradient(ellipse 800px 600px at 20% 10%, rgba(251,191,36,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 500px 500px at 75% 25%, rgba(251,191,36,0.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* Layer 3: Cool blue light (floats slowly) */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: `
            radial-gradient(ellipse 700px 500px at 85% 50%, rgba(96,165,250,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 400px 400px at 60% 75%, rgba(147,197,253,0.03) 0%, transparent 60%)
          `,
        }}
      />

      {/* Layer 4: Deep warm ambience (slow drift) */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        animate={{ x: [0, 15, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: `
            radial-gradient(ellipse 600px 600px at 30% 70%, rgba(251,191,36,0.03) 0%, transparent 60%),
            radial-gradient(ellipse 500px 400px at 50% 20%, rgba(251,191,36,0.02) 0%, transparent 60%)
          `,
        }}
      />

      {/* Layer 5: Faint golden haze across the middle */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: `
            radial-gradient(ellipse 900px 300px at 50% 40%, rgba(251,191,36,0.03) 0%, transparent 60%)
          `,
        }}
      />

      {/* Layer 6: Subtle grid pattern */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Layer 7: Vignette (darker edges) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 100% 90% at 50% 50%, transparent 50%, rgba(2,6,23,0.4) 100%)
          `,
        }}
      />

      {/* Layer 8: Noise overlay */}
      <div className="noise-overlay" />
    </>
  );
}
