import { Typography } from '@nx-project/components';
import Image from 'next/image';

import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import { AppPropsWithLayout } from '../../types';

export function Dashboard(props: AppPropsWithLayout) {
  return (
    <>
      <Typography.Title size="xl" weight="bold">
        Dashboard
      </Typography.Title>
      <div className="rounded-2xl bg-white p-6">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="h-44 w-full relative rounded-lg overflow-hidden">
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                width={700}
                height={475}
                src={
                  'https://images.unsplash.com/photo-1612637968894-660373e23b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
