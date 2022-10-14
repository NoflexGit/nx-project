import cn from 'clsx';
import { TypographySizes, TypographyWeights } from 'libs/components/src/types';
import { HTMLAttributes, ReactNode } from 'react';

import styles from './Text.module.css';

export interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  tag?: 'span' | 'p' | 'div';
  size?: Exclude<TypographySizes, 'xs'>;
  weight?: TypographyWeights;
  color?: 'primary' | 'secondary';
  className?: string;
}

export function Text({
  tag: Component = 'p',
  weight = 'regular',
  color = 'primary',
  size = 'md',
  className,
  children,
}: TextProps) {
  const classes = cn(
    styles.component,
    {
      [styles[weight]]: weight,
      [styles[size]]: size,
      [styles[color]]: color,
    },
    className
  );

  return <Component className={classes}>{children}</Component>;
}

export default Text;
