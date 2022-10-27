/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useRouter } from 'next/router';
import cn from 'clsx';

import { ReactComponent as DashboardSVG } from '@frontend/assets/icons/bold/category.svg';
import { ReactComponent as DiscoverSVG } from '@frontend/assets/icons/bold/discover.svg';
import { ReactComponent as TicketSVG } from '@frontend/assets/icons/bold/ticket.svg';
import { ReactComponent as ChatSVG } from '@frontend/assets/icons/bold/chat.svg';
import { ReactComponent as ProfileSVG } from '@frontend/assets/icons/bold/profile-circle.svg';
import { ReactComponent as LogoutSVG } from '@frontend/assets/icons/bold/logout.svg';
import NavLink from '../NavLink/NavLink';

export interface SidebarProps {
  className?: string;
  view?: 'default' | 'compact';
}

const routes = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: {
      component: DashboardSVG,
      width: 20,
      height: 20,
    },
  },
  {
    name: 'Explore',
    href: '/explore',
    icon: {
      component: DiscoverSVG,
      width: 20,
      height: 20,
    },
  },
  {
    name: 'My order',
    href: '/my-order',
    icon: {
      component: TicketSVG,
      width: 20,
      height: 20,
    },
  },
  {
    name: 'Messages',
    href: '/messages',
    icon: {
      component: ChatSVG,
      width: 18,
      height: 18,
    },
  },
  {
    name: 'My profile',
    href: '/profile',
    icon: {
      component: ProfileSVG,
      width: 22,
      height: 22,
    },
  },
];

export function Sidebar({ view = 'default', className }: SidebarProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    router.push('/signin');
  };

  const wrapperClasses = cn(
    'relative hidden shadow-lg md:block',
    {
      'basis-[250px]': view === 'default',
      'basis-[60px]': view === 'compact',
    },
    className
  );

  const navItemClasses = cn(
    'flex items-center rounded-lg text-sm font-semibold transition-colors duration-200',
    {
      'justify-center w-11 h-11': view === 'compact',
      'px-3 h-11 w-full': view === 'default',
    }
  );

  return (
    <aside className={wrapperClasses}>
      <div className="mt-6 mb-16 flex items-center justify-center">
        {/* <div className="bg-primary-300 h-[24px] w-[126px]"></div> */}
      </div>
      <nav className="px-6">
        <ul className="space-y-4">
          {routes.map(
            ({
              name,
              href,
              icon: { component: IconComponent, ...restIconProps },
            }) => (
              <li key={name}>
                <NavLink
                  href={href}
                  activeClassName="bg-primary-100 text-primary-500"
                  defaultClassName="hover:text-primary-400 hover:bg-secondary-100 text-secondary-500"
                >
                  <a className={navItemClasses}>
                    <IconComponent {...restIconProps} />
                    {view === 'default' && <span className="ml-3">{name}</span>}
                  </a>
                </NavLink>
              </li>
            )
          )}
        </ul>
      </nav>
      <div className="absolute bottom-0 left-0 mb-6 w-full px-6">
        <button
          className="text-error-500 hover:bg-error-100 active:bg-error-200 flex w-full items-center rounded-lg py-3 px-4 text-sm transition-all duration-200"
          onClick={handleSignOut}
        >
          <LogoutSVG width={20} height={20} />
          {view === 'default' && <span className="ml-3">Sign out</span>}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
