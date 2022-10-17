import { Avatar, Button, TextField, Typography } from '@common/components';
import Image from 'next/image';

import { ContentPlate } from '@frontend/components';
import { DashboardLayout } from '@frontend/layouts';

export function ProfileEdit() {
  return (
    <>
      <ContentPlate>
        <div className="w-2/3">
          <Avatar size="3xl" className="mb-6">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
              alt="123"
              layout="fill"
              objectFit="cover"
            />
          </Avatar>
          <section className="space-y-8">
            <div className="border-secondary-100 grid grid-cols-3 items-center gap-6 border-b pb-8">
              <div className="col-span-1">
                <Typography.Title tag="h4" size="lg" weight="semibold">
                  Photo Profile
                </Typography.Title>
                <Typography.Text color="secondary" size="sm">
                  Change profile photo
                </Typography.Text>
              </div>
              <div className="col-span-2">
                <Button view="secondary">Upload New Photo</Button>
              </div>
            </div>
            <div className="border-secondary-100 grid grid-cols-3 items-center gap-6 border-b pb-8">
              <div className="col-span-1">
                <Typography.Title tag="h4" size="lg" weight="semibold">
                  Address
                </Typography.Title>
                <Typography.Text color="secondary" size="sm">
                  Change your current address
                </Typography.Text>
              </div>
              <div className="col-span-2">
                <TextField fluid />
              </div>
            </div>
            <div className="border-secondary-100 grid grid-cols-3 items-center gap-6 border-b pb-8">
              <div className="col-span-1">
                <Typography.Title tag="h4" size="lg" weight="semibold">
                  Phone Number
                </Typography.Title>
                <Typography.Text color="secondary" size="sm">
                  Change your phone number
                </Typography.Text>
              </div>
              <div className="col-span-2">
                <TextField fluid />
              </div>
            </div>
            <div className="border-secondary-100 grid grid-cols-3 items-center gap-6 border-b pb-8">
              <div className="col-span-1">
                <Typography.Title tag="h4" size="lg" weight="semibold">
                  Email
                </Typography.Title>
                <Typography.Text color="secondary" size="sm">
                  Change your email
                </Typography.Text>
              </div>
              <div className="col-span-2">
                <TextField fluid />
              </div>
            </div>
            <Button>Save changes</Button>
          </section>
        </div>
      </ContentPlate>
    </>
  );
}

ProfileEdit.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ProfileEdit;
