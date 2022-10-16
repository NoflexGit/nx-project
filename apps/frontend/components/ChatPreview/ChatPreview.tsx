import Image from 'next/image';
import { Avatar } from '@nx-project/components';
import cn from 'clsx';

export interface ChatPreviewProps {
  name: string;
  message: string;
  avatar: string;
  isActive?: boolean;
}

export function ChatPreview({
  name,
  avatar,
  message,
  isActive,
}: ChatPreviewProps) {
  const wrapperClasses = cn(
    'flex items-center p-4 rounded-xl ',
    isActive
      ? 'bg-primary-500 text-white cursor-default'
      : 'cursor-pointer hover:bg-secondary-100'
  );

  return (
    <div className={wrapperClasses}>
      <Avatar shape="rounded">
        <Image alt={name} src={avatar} layout="fill" objectFit="cover" />
      </Avatar>
      <div className="ml-4">
        <p className="m-0 text-sm font-semibold">{name}</p>
        <span className="text-sm">{message}</span>
      </div>
    </div>
  );
}

export default ChatPreview;
