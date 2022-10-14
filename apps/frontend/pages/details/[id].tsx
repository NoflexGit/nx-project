import { Avatar, Button, Typography } from '@nx-project/components';
import Image from 'next/image';

import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import { AppPropsWithLayout } from '../../types';
import { ReactComponent as LocationSVG } from '../../static/icons/bold/location.svg';

export function Dashboard(props: AppPropsWithLayout) {
  return (
    <div className="rounded-2xl bg-white p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="relative col-span-2 h-[331px] overflow-hidden rounded-lg">
              <Image
                alt="Mountains"
                src="https://images.unsplash.com/photo-1612637968894-660373e23b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-6">
              <div className="relative h-[153px] w-full overflow-hidden rounded-lg">
                <Image
                  alt="Mountains"
                  src="https://images.unsplash.com/photo-1612637968894-660373e23b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative h-[153px] w-full overflow-hidden rounded-lg">
                <span className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 font-bold text-white">
                  +12
                </span>
                <Image
                  alt="Mountains"
                  src="https://images.unsplash.com/photo-1612637968894-660373e23b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3"></div>
          <div className="mt-6">
            <Typography.Title tag="h4" className="mb-4" size="lg" weight="bold">
              Facility
            </Typography.Title>
          </div>
          <div className="mt-6">
            <Typography.Title tag="h4" className="mb-4" size="lg" weight="bold">
              Description
            </Typography.Title>
            <Typography.Text color="secondary" size="sm">
              Star Apartment by Star Hotel is an inn that has a room concept in
              an apartment, which is comfortable and clean. This apartment is
              located in a strategic area of ​​Semarang City, thus providing
              easy access to several famous places in Semarang City. With the
              facilities and services in this apartment, you can make this
              apartment your vacation accommodation with your family or partner.
            </Typography.Text>
          </div>
        </div>
        <div>
          <div className="border-secondary-200 flex flex-col items-center rounded-xl border p-6">
            <Avatar shape="rounded" className="mb-4">
              <Image
                alt="Mountains"
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80"
                layout="fill"
                objectFit="cover"
              />
            </Avatar>
            <Typography.Text weight="bold" className="mb-2">
              Jaydon Lipshutz
            </Typography.Text>
            <Typography.Text color="secondary" className="mb-4">
              AGENT
            </Typography.Text>
            <div className="mb-2 flex items-center">
              <LocationSVG
                width="16"
                height="16"
                className="text-primary-900 mr-2 inline-block flex-none"
              />
              <Typography.Text color="secondary" size="xs">
                Ampera 3 no 8 Daerah Khusus
              </Typography.Text>
            </div>
            <Typography.Text className="mb-6">12 Properties</Typography.Text>
            <div>
              <Button>Message</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
