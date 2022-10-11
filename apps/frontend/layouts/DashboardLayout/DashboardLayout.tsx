import { Sidebar, TitleBar } from '../../components';

/* eslint-disable-next-line */
export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <div className="flex flex-wrap w-screen h-screen">
      <Sidebar />
      <div className="flex-1 flex w-full flex-col">
        <TitleBar />
        <main className="bg-[#F7F7F7] flex-1 p-10">{props.children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
