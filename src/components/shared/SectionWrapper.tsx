import type { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  return (
    <section id={id} className={`snap-section noise-overlay relative bg-dark ${className}`}>
      <div className="aqua-halo" style={{ width: 700, height: 700, top: '-10%', right: '-15%' }} />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {children}
      </div>
    </section>
  );
}
