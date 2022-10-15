import { ReactNode } from 'react';

export interface ContentPlateProps {
  children: ReactNode;
  className?: string;
}

export function ContentPlate({ children, className }: ContentPlateProps) {
  return (
    <div className={`rounded-2xl bg-white p-6 ${className}`}>{children}</div>
  );
}

export default ContentPlate;
