import cn from 'clsx';
import { useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';

import styles from './IconButton.module.css';

/* eslint-disable-next-line */
export interface IconButtonProps extends AriaButtonProps {
  view?: 'primary' | 'secondary' | 'minimal';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  fluid?: boolean;
}

export function IconButton({
  view = 'primary',
  size = 'md',
  fluid = false,
  className,
  children,
  ...restProps
}: IconButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton(restProps, ref);

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
      {children}
    </button>
  );
}

export default IconButton;
