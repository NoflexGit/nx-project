import Image from 'next/image';
import { Avatar, Typography, Button } from '@common/components';

import { ReactComponent as LocationSVG } from '@frontend/assets/icons/bold/location.svg';

export interface AgentInfoProps {
  name: string;
  location: string;
  avatar: string;
  propertyCount: number;
}

export function AgentInfo({
  name,
  location,
  avatar,
  propertyCount,
}: AgentInfoProps) {
  return (
    <div className="border-secondary-200 flex flex-col items-center rounded-xl border p-6">
      <Avatar shape="rounded" className="mb-4">
        <Image alt={name} src={avatar} layout="fill" objectFit="cover" />
      </Avatar>
      <Typography.Text weight="bold" className="mb-2">
        {name}
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
          {location}
        </Typography.Text>
      </div>
      <Typography.Text className="mb-6">
        {propertyCount} properties
      </Typography.Text>
      <div>
        <Button>Message</Button>
      </div>
    </div>
  );
}

export default AgentInfo;
