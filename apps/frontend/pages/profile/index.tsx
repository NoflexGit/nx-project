import { Avatar, IconButton, Typography } from '@common/components';
import Image from 'next/image';

import { ContentPlate } from '@frontend/components';
import { DashboardLayout } from '@frontend/layouts';
import { AppPropsWithLayout } from '@frontend/types';
import { ReactComponent as LocationSVG } from '@frontend/assets/icons/bold/location.svg';
import { ReactComponent as PhoneSVG } from '@frontend/assets/icons/bold/phone.svg';
import { ReactComponent as EmailSVG } from '@frontend/assets/icons/bold/envelope.svg';
import { ReactComponent as MoreSVG } from '@frontend/assets/icons/bold/more-vertical.svg';

export function Profile(props: AppPropsWithLayout) {
  return (
    <>
      <Typography.Title size="xl" weight="bold" className="mb-5">
        My Profile
      </Typography.Title>
      <ContentPlate className="p-0">
        <div className="grid grid-cols-3">
          <div className="relative col-span-1 h-full">
            <Image
              src="https://images.unsplash.com/photo-1665751461693-e3fd01d63645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              alt="123"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute -right-10 top-10">
              <Avatar size="2xl">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                  alt="123"
                  layout="fill"
                  objectFit="cover"
                />
              </Avatar>
            </div>
          </div>
          <div className="col-span-2">
            <div className="pl-16 pt-12 pr-6 pb-6">
              <div className="flex items-center gap-2">
                <Typography.Title size="xl" weight="bold">
                  John Doe
                </Typography.Title>
                <IconButton size="sm" view="minimal">
                  <MoreSVG />
                </IconButton>
              </div>
              <Typography.Text color="secondary" size="xs">
                Joined 6 months ago
              </Typography.Text>
              <div className="border-secondary-100 mt-6 space-y-4 border p-6">
                <div className="flex items-start gap-2">
                  <LocationSVG className="text-secondary-500" />
                  <div className="mt-[2px]">
                    <Typography.Text>
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Typography.Text>
                    <Typography.Text tag="span" size="xs" color="secondary">
                      Address
                    </Typography.Text>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <PhoneSVG className="text-secondary-500" />
                  <div className="mt-[2px]">
                    <Typography.Text>+62 124 2123 8925</Typography.Text>
                    <Typography.Text tag="span" size="xs" color="secondary">
                      Phone
                    </Typography.Text>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <EmailSVG className="text-secondary-500" />
                  <div className="mt-[2px]">
                    <Typography.Text>alvertflore925@gmail.com</Typography.Text>
                    <Typography.Text tag="span" size="xs" color="secondary">
                      Email
                    </Typography.Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentPlate>
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Profile;
