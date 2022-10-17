import cn from 'clsx';

import { TypographySizes, TypographyWeights } from '../../../types';
import styles from './Title.module.css';

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  size?: Exclude<TypographySizes, 'xs'>;
  weight?: TypographyWeights;
  color?: 'primary' | 'secondary';
  className?: string;
}

export function Title({
  tag: Component = 'h1',
  weight = 'regular',
  color = 'primary',
  size = 'md',
  children,
  className,
}: TitleProps) {
  const classes = cn(
    {
      [styles[weight]]: weight,
      [styles[size]]: size,
      [styles[color]]: color,
    },
    className
  );

  return <Component className={classes}>{children}</Component>;
}

export default Title;
