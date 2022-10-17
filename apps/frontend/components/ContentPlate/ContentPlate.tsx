import { ReactNode } from 'react';

export interface ContentPlateProps {
  children: ReactNode;
  className?: string;
}

export function ContentPlate({ children, className }: ContentPlateProps) {
  return (
    <section
      className={`overflow-hidden rounded-2xl bg-white p-6 ${className}`}
    >
      {children}
    </section>
  );
}

export default ContentPlate;
