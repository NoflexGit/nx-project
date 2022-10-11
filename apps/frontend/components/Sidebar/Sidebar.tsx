import NavLink from '../NavLink/NavLink';

const routes = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Explore',
    href: '/explore',
  },
  {
    name: 'My order',
    href: '/my-order',
  },
  {
    name: 'Messages',
    href: '/messages',
  },
  {
    name: 'My profile',
    href: '/profile',
  },
];

export function Sidebar() {
  return (
    <aside className="basis-[250px] shadow-lg relative z-0">
      <div className="flex items-center justify-center mt-6 mb-16">
        <div className="w-[126px] h-[24px] bg-primary-300"></div>
      </div>
      <nav className="px-6">
        <ul>
          {routes.map(({ name, href }) => (
            <li key={name}>
              <NavLink
                href={href}
                activeClassName="bg-primary-100 text-primary-500"
                defaultClassName="hover:text-primary-400 text-secondary-500"
              >
                <a className="text-sm w-full block rounded-lg font-semibold mb-4 py-3 px-4 transition-all duration-200">
                  {name}
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
