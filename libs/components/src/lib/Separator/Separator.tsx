import cn from 'clsx';

import styles from './Separator.module.css';

/* eslint-disable-next-line */
export interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  decorative?: boolean;
}

export function Separator({
  orientation = 'horizontal',
  className,
  decorative = false,
}: SeparatorProps) {
  const classes = cn(
    styles.component,
    {
      [styles[orientation]]: orientation,
    },
    className
  );

  return (
    <div className={classes} role={decorative ? 'none' : 'separator'}/>
  );
}

export default Separator;
