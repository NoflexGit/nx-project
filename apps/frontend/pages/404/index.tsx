import { DashboardLayout } from '@frontend/layouts';
import { AppPropsWithLayout } from '@frontend/types';

export function Explore(props: AppPropsWithLayout) {
  return <div>404</div>;
}

Explore.getLayout = function getLayout(page) {
  return <DashboardLayout compactSidebar>{page}</DashboardLayout>;
};

export default Explore;
