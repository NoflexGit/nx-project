import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import { AppPropsWithLayout } from '../../types';

export function Dashboard(props: AppPropsWithLayout) {
  return <div></div>;
}

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
