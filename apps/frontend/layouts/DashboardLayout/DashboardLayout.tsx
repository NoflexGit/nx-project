import { Sidebar, TitleBar } from '../../components';

export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-wrap">
      <Sidebar />
      <div className="flex w-full flex-1 flex-col">
        <TitleBar />
        <main className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 overflow-y-auto overflow-x-hidden bg-[#F7F7F7] p-6 md:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
