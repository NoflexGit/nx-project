import cn from 'clsx';

import { Sidebar, TitleBar } from '@frontend/components';

export interface DashboardLayoutProps {
  children: React.ReactNode;
  compactSidebar?: boolean;
  defaultContentPadding?: boolean;
}

export function DashboardLayout({
  children,
  compactSidebar,
  defaultContentPadding = true,
}: DashboardLayoutProps) {
  const contentWrapperClasses = cn(
    'absolute inset-0 overflow-y-auto overflow-x-hidden bg-[#F7F7F7]',
    {
      'p-4 md:p-6': defaultContentPadding,
    }
  );

  return (
    <div className="flex h-screen w-screen flex-wrap">
      <Sidebar view={compactSidebar ? 'compact' : 'default'} />
      <div className="flex w-full flex-1 flex-col">
        <TitleBar />
        <main className="relative flex-1 overflow-hidden">
          <div className={contentWrapperClasses}>{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
