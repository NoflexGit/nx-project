import cn from 'clsx';

import styles from './Avatar.module.css';

/* eslint-disable-next-line */
export interface AvatarProps {
  shape?: 'circle' | 'square' | 'rounded';
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  src?: string;
  children: React.ReactNode;
}

export function Avatar({
  shape = 'circle',
  size = 'md',
  className,
  src,
  children,
}: AvatarProps) {
  const classes = cn(
    styles.component,
    {
      [styles[shape]]: shape,
      [styles[size]]: size,
    },
    className
  );

  return (
    <span className={classes}>
      {src ? <img src={src} alt="avatar" className="object-cover" /> : children}
    </span>
  );
}

export default Avatar;
