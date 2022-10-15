import NavLink from '../NavLink/NavLink';

import { ReactComponent as DashboardSVG } from '../../static/icons/bold/category.svg';
import { ReactComponent as DiscoverSVG } from '../../static/icons/bold/discover.svg';
import { ReactComponent as TicketSVG } from '../../static/icons/bold/ticket.svg';
import { ReactComponent as ChatSVG } from '../../static/icons/bold/chat.svg';
import { ReactComponent as ProfileSVG } from '../../static/icons/bold/profile-circle.svg';

const routes = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardSVG />,
  },
  {
    name: 'Explore',
    href: '/explore',
    icon: <DiscoverSVG />,
  },
  {
    name: 'My order',
    href: '/my-order',
    icon: <TicketSVG />,
  },
  {
    name: 'Messages',
    href: '/messages',
    icon: <ChatSVG />,
  },
  {
    name: 'My profile',
    href: '/profile',
    icon: <ProfileSVG />,
  },
];

export function Sidebar() {
  return (
    <aside className="relative z-0 hidden basis-[250px] shadow-lg md:block">
      <div className="mt-6 mb-16 flex items-center justify-center">
        <div className="bg-primary-300 h-[24px] w-[126px]"></div>
      </div>
      <nav className="px-6">
        <ul>
          {routes.map(({ name, href, icon }) => (
            <li key={name}>
              <NavLink
                href={href}
                activeClassName="bg-primary-100 text-primary-500"
                defaultClassName="hover:text-primary-400 text-secondary-500"
              >
                <a className="mb-4 flex w-full items-center rounded-lg py-3 px-4 text-sm font-semibold transition-all duration-200">
                  {icon}
                  <span className="ml-3">{name}</span>
                </a>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
