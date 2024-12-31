// components/shared/Container.tsx
interface ContainerProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  );
}
