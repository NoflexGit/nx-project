import { Avatar, TextField } from '@common/components';
import Image from 'next/image';
import { useQuery } from '@apollo/client';

import { CLIENT_ONLY_USER_INFO } from '@frontend/grapql/user';

export function TitleBar() {
  const { data } = useQuery(CLIENT_ONLY_USER_INFO);

  return (
    <div className="border-secondary-200 flex h-20 border-l px-10">
      <div className="flex basis-1/3 items-center">
        <TextField placeholder="Search here ..." fluid />
      </div>
      <div className="flex flex-1 items-center justify-end">
        {data?.userInfo && (
          <Avatar>
            <Image
              alt="Mountains"
              src={data?.userInfo?.avatar}
              layout="fill"
              objectFit="cover"
            />
          </Avatar>
        )}
      </div>
    </div>
  );
}

export default TitleBar;
