import Image from 'next/image';
import { Avatar, Button, TextField, Typography } from '@nx-project/components';

import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import { AppPropsWithLayout } from '../../types';
import { ContentPlate } from '../../components';

export function Dashboard(props: AppPropsWithLayout) {
  return (
    <ContentPlate className="p-0">
      <div className="grid grid-cols-5">
        <div className="border-secondary-200 col-span-2 space-y-6 border-r p-6">
          <div className="flex items-center justify-between">
            <Typography.Title size="xl" weight="bold">
              Messages
            </Typography.Title>
            <Button>New</Button>
          </div>
          <TextField />
          <div className="space-y-4">
            <div className="flex items-center p-4">
              <Avatar shape="rounded">
                <Image
                  alt="123"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                  layout="fill"
                  objectFit="cover"
                />
              </Avatar>
              <div className="ml-4">
                <Typography.Text size="sm" className="mb-1.5">
                  John Doe
                </Typography.Text>
                <span className="text-primary-500 text-sm">
                  Hi, how is it going on?
                </span>
              </div>
            </div>
            <div className="flex items-center p-4">
              <Avatar shape="rounded">
                <Image
                  alt="123"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                  layout="fill"
                  objectFit="cover"
                />
              </Avatar>
              <div className="ml-4">
                <Typography.Text size="sm" className="mb-1.5">
                  John Doe
                </Typography.Text>
                <span className="text-primary-500 text-sm">
                  Hi, how is it going on?
                </span>
              </div>
            </div>
            <div className="flex items-center p-4">
              <Avatar shape="rounded">
                <Image
                  alt="123"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                  layout="fill"
                  objectFit="cover"
                />
              </Avatar>
              <div className="ml-4">
                <Typography.Text size="sm" className="mb-1.5">
                  John Doe
                </Typography.Text>
                <span className="text-primary-500 text-sm">
                  Hi, how is it going on?
                </span>
              </div>
            </div>
            <div className="flex items-center p-4">
              <Avatar shape="rounded">
                <Image
                  alt="123"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                  layout="fill"
                  objectFit="cover"
                />
              </Avatar>
              <div className="ml-4">
                <Typography.Text size="sm" className="mb-1.5">
                  John Doe
                </Typography.Text>
                <span className="text-primary-500 text-sm">
                  Hi, how is it going on?
                </span>
              </div>
            </div>
            <div className="flex items-center p-4">
              <Avatar shape="rounded">
                <Image
                  alt="123"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                  layout="fill"
                  objectFit="cover"
                />
              </Avatar>
              <div className="ml-4">
                <Typography.Text size="sm" className="mb-1.5">
                  John Doe
                </Typography.Text>
                <span className="text-primary-500 text-sm">
                  Hi, how is it going on?
                </span>
              </div>
            </div>
            <div className="flex items-center p-4">
              <Avatar shape="rounded">
                <Image
                  alt="123"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                  layout="fill"
                  objectFit="cover"
                />
              </Avatar>
              <div className="ml-4">
                <Typography.Text size="sm" className="mb-1.5">
                  John Doe
                </Typography.Text>
                <span className="text-primary-500 text-sm">
                  Hi, how is it going on?
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-3 flex flex-col p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar shape="rounded">
                <Image
                  alt="123"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                  layout="fill"
                  objectFit="cover"
                />
              </Avatar>
              <div className="ml-4">
                <Typography.Text className="mb-1.5">John Doe</Typography.Text>
                <Typography.Text color="secondary" size="xs">
                  Online
                </Typography.Text>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden py-8">
            <div className="flex h-full  flex-col-reverse gap-y-6 overflow-auto">
              <div className="flex items-start gap-2">
                <Avatar shape="rounded" size="sm" className="flex-none">
                  <Image
                    alt="123"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </Avatar>
                <div className="border-primary-200 w-80 rounded-r-lg rounded-tl-lg border py-2 px-6">
                  <Typography.Text size="sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Typography.Text>
                </div>
              </div>
              <div className="flex items-start justify-end gap-2">
                <div className=" bg-secondary-100 w-80 rounded-l-lg rounded-tr-lg py-2 px-6">
                  <Typography.Text size="sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Typography.Text>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Avatar shape="rounded" size="sm" className="flex-none">
                  <Image
                    alt="123"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </Avatar>
                <div className="border-primary-200 w-80 rounded-r-lg rounded-tl-lg border py-2 px-6">
                  <Typography.Text size="sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Typography.Text>
                </div>
              </div>
              <div className="flex items-start justify-end gap-2">
                <div className=" bg-secondary-100 w-80 rounded-l-lg rounded-tr-lg py-2 px-6">
                  <Typography.Text size="sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Typography.Text>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Avatar shape="rounded" size="sm" className="flex-none">
                  <Image
                    alt="123"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </Avatar>
                <div className="border-primary-200 w-80 rounded-r-lg rounded-tl-lg border py-2 px-6">
                  <Typography.Text size="sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Typography.Text>
                </div>
              </div>
              <div className="flex items-start justify-end gap-2">
                <div className=" bg-secondary-100 w-80 rounded-l-lg rounded-tr-lg py-2 px-6">
                  <Typography.Text size="sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Typography.Text>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Avatar shape="rounded" size="sm" className="flex-none">
                  <Image
                    alt="123"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </Avatar>
                <div className="border-primary-200 w-80 rounded-r-lg rounded-tl-lg border py-2 px-6">
                  <Typography.Text size="sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Typography.Text>
                </div>
              </div>
              <div className="flex items-start justify-end gap-2">
                <div className=" bg-secondary-100 w-80 rounded-l-lg rounded-tr-lg py-2 px-6">
                  <Typography.Text size="sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Typography.Text>
                </div>
              </div>
            </div>
          </div>
          <div className="border-secondary-200 flex items-center gap-3 border-t p-6">
            <Avatar shape="circle" size="sm" className="flex-none">
              <Image
                alt="123"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                layout="fill"
                objectFit="cover"
              />
            </Avatar>
            <TextField placeholder="Write message down here..." />
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </ContentPlate>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
