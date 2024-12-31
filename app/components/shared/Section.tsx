// components/shared/Section.tsx
interface SectionProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly id?: string;
}

export default function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      {children}
    </section>
  );
}
