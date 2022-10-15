import { Sidebar, TitleBar } from '../../components';

/* eslint-disable-next-line */
export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-wrap">
      <Sidebar />
      <div className="flex w-full flex-1 flex-col">
        <TitleBar />
        <main className="relative flex-1 overflow-y-auto overflow-x-hidden">
          <div className="absolute min-h-full min-w-full bg-[#F7F7F7] p-6 md:p-10">
            {props.children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
