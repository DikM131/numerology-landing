export default function Background() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-deep" />

      <div className="fixed inset-0 z-[3] pointer-events-none overflow-hidden">
        <div className="bg-spot bg-spot-gold" />
        <div className="bg-spot bg-spot-blue" />
        <div className="bg-spot bg-spot-neutral" />
        <div className="bg-glow bg-glow-warm" />
        <div className="bg-glow bg-glow-cool" />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-vignette" />
        <div className="absolute inset-0 bg-depth" />
      </div>
    </>
  );
}
