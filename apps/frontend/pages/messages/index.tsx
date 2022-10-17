import Image from 'next/image';
import {
  Avatar,
  Button,
  TextField,
  Typography,
  IconButton,
} from '@common/components';

import { DashboardLayout } from '@frontend/layouts';
import { AppPropsWithLayout } from '@frontend/types';
import { ContentPlate, ChatPreview } from '@frontend/components';
import { ReactComponent as MoreSVG } from '@frontend/assets/icons/bold/more-vertical.svg';

export function Dashboard(props: AppPropsWithLayout) {
  return (
    <ContentPlate className="h-full w-full p-0">
      <div className="grid h-full grid-cols-6">
        <div className="border-secondary-200 col-span-2 space-y-6 border-r p-6">
          <div className="flex items-center justify-between">
            <Typography.Title size="xl" weight="bold">
              Messages
            </Typography.Title>
            <Button>New</Button>
          </div>
          <TextField />
          <div className="space-y-4">
            <ChatPreview
              isActive
              name="John Doe"
              avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
              message="Hi, how is it going on?"
            />
            <ChatPreview
              name="John Doe"
              avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
              message="Hi, how is it going on?"
            />
          </div>
        </div>
        <div className="relative col-span-4 flex flex-col">
          <div className="border-secondary-200 flex items-center justify-between border-b p-6">
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
          <div className="flex-1 overflow-hidden px-6 py-8">
            <div className="flex h-full flex-col-reverse gap-y-6 overflow-auto">
              <div className="flex items-start gap-2">
                <Avatar shape="rounded" size="sm" className="flex-none">
                  <Image
                    alt="123"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </Avatar>
                <div className="space-y-2">
                  <div className="border-primary-200 w-80 rounded-r-lg rounded-tl-lg border py-2 px-6">
                    <Typography.Text size="sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </Typography.Text>
                  </div>
                  <Typography.Text size="xs" color="secondary">
                    11:15 AM
                  </Typography.Text>
                </div>
                <IconButton view="minimal">
                  <MoreSVG />
                </IconButton>
              </div>
              <div className="flex flex-row-reverse items-start gap-2">
                <div className="space-y-2">
                  <div className="bg-secondary-100 w-80 rounded-l-lg rounded-tr-lg py-2 px-6">
                    <Typography.Text size="sm">
                      Im good 👍 and you? How can I help you? Printing and
                      industry
                    </Typography.Text>
                  </div>
                  <Typography.Text
                    size="xs"
                    color="secondary"
                    className="text-right"
                  >
                    11:15 AM
                  </Typography.Text>
                </div>
                <IconButton view="minimal">
                  <MoreSVG />
                </IconButton>
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
