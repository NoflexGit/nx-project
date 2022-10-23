import { ReactNode } from 'react';
import cn from 'clsx';

export interface ContentPlateProps {
  children?: ReactNode;
  className?: string;
  defaultPadding?: boolean;
}

export function ContentPlate({
  children,
  className,
  defaultPadding = true,
}: ContentPlateProps) {
  const classes = cn(
    'overflow-hidden rounded-2xl bg-white',
    {
      'p-6': defaultPadding,
    },
    className
  );

  return <section className={classes}>{children}</section>;
}

export default ContentPlate;
