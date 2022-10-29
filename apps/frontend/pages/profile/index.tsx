import { Avatar, IconButton, Typography } from '@common/components';
import Image from 'next/image';

import { ContentPlate } from '@frontend/components';
import { DashboardLayout } from '@frontend/layouts';
import { AppPropsWithLayout } from '@frontend/types';
import { ReactComponent as LocationSVG } from '@frontend/assets/icons/bold/location.svg';
import { ReactComponent as PhoneSVG } from '@frontend/assets/icons/bold/phone.svg';
import { ReactComponent as EmailSVG } from '@frontend/assets/icons/bold/envelope.svg';
import { ReactComponent as MoreSVG } from '@frontend/assets/icons/bold/more-vertical.svg';

import { GET_USER } from '@frontend/grapql/user';
import { useQuery } from '@apollo/client';

export function Profile() {
  const { data } = useQuery(GET_USER, {
    variables: {
      id: '63529aeb8745f59e231fdee7',
    },
  });

  return (
    <>
      <Typography.Title size="xl" weight="bold" className="mb-5">
        My Profile
      </Typography.Title>
      <ContentPlate className="p-0">
        {data && (
          <div className="grid grid-cols-3">
            <div className="relative col-span-1 h-full">
              <Image
                src="https://images.unsplash.com/photo-1509660933844-6910e12765a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="123"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute -right-10 top-10">
                <Avatar size="2xl">
                  <Image
                    src={data.user.avatar}
                    alt={data.user.name}
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
                    {data.user.name}
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
                      <Typography.Text>{data.user.address}</Typography.Text>
                      <Typography.Text tag="span" size="xs" color="secondary">
                        Address
                      </Typography.Text>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <PhoneSVG className="text-secondary-500" />
                    <div className="mt-[2px]">
                      <Typography.Text>{data.user.phone}</Typography.Text>
                      <Typography.Text tag="span" size="xs" color="secondary">
                        Phone
                      </Typography.Text>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <EmailSVG className="text-secondary-500" />
                    <div className="mt-[2px]">
                      <Typography.Text>{data.user.email}</Typography.Text>
                      <Typography.Text tag="span" size="xs" color="secondary">
                        Email
                      </Typography.Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </ContentPlate>
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Profile;
