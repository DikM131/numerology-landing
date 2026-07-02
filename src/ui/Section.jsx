export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative z-10 py-section-sm md:py-section ${className}`}>
      {children}
    </section>
  );
}
