import { DashboardLayout } from '@frontend/layouts';
import { AppPropsWithLayout } from '@frontend/types';

export function Dashboard(props: AppPropsWithLayout) {
  return <div></div>;
}

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
