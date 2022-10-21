import NavLink from '../NavLink/NavLink';
import { useAuth } from '@frontend/hooks';
import { ReactComponent as DashboardSVG } from '@frontend/assets/icons/bold/category.svg';
import { ReactComponent as DiscoverSVG } from '@frontend/assets/icons/bold/discover.svg';
import { ReactComponent as TicketSVG } from '@frontend/assets/icons/bold/ticket.svg';
import { ReactComponent as ChatSVG } from '@frontend/assets/icons/bold/chat.svg';
import { ReactComponent as ProfileSVG } from '@frontend/assets/icons/bold/profile-circle.svg';
import { useRouter } from 'next/router';

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
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/signin');
  };

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
      <div
        className="text-error-500 absolute bottom-0 left-0 px-6 py-10"
        onClick={handleSignOut}
      >
        Logout
      </div>
    </aside>
  );
}

export default Sidebar;
