import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from 'react';

export interface NavLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName?: string;
  defaultClassName?: string;
}

export function NavLink({
  children,
  activeClassName,
  defaultClassName,
  ...props
}: NavLinkProps) {
  const { asPath } = useRouter();
  const isMatched = asPath.includes(props.href as string);
  const childClassName = children.props.className ?? '';
  const newClassName = isMatched
    ? `${activeClassName ?? ''} ${childClassName}`
    : `${defaultClassName ?? ''} ${childClassName}`;

  return (
    <Link {...props}>
      {cloneElement(children, { className: newClassName.trim() })}
    </Link>
  );
}

export default NavLink;
