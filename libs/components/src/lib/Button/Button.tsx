import cn from 'clsx';
import { useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';

import styles from './Button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps extends AriaButtonProps {
  view?: 'primary' | 'secondary' | 'minimal';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  fluid?: boolean;
}

export function Button({
  view = 'primary',
  size = 'md',
  fluid = false,
  className,
  leftSlot,
  rightSlot,
  ...restProps
}: ButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton(restProps, ref);
  const { children } = restProps;

  const classes = cn(
    styles.component,
    {
      [styles[view]]: view,
      [styles[size]]: size,
      [styles.fluid]: fluid,
    },
    className
  );

  return (
    <button {...buttonProps} ref={ref} className={classes}>
      {leftSlot && <span className={styles.leftSlot}>{leftSlot}</span>}
      {children}
      {rightSlot && <span className={styles.rightSlot}>{rightSlot}</span>}
    </button>
  );
}

export default Button;
