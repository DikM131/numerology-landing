export default function Background() {
  return (
    <>
      <div className="fixed inset-0 z-0 bg-premium-bg" />

      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 600px 500px at 10% 15%, rgba(251,191,36,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 400px 400px at 85% 20%, rgba(96,165,250,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 300px 300px at 70% 60%, rgba(251,191,36,0.03) 0%, transparent 70%),
            radial-gradient(ellipse 500px 500px at 50% 80%, rgba(251,191,36,0.02) 0%, transparent 70%)
          `,
        }}
      />

      <div className="noise-overlay" />
    </>
  );
}
