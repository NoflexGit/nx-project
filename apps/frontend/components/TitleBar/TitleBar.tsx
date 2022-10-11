import { Avatar, TextField } from '@nx-project/components';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function TitleBar(props: HeaderProps) {
  return (
    <div className="h-20 px-10 flex border-l border-secondary-200">
      <div className="flex items-center basis-1/3">
        <TextField
          placeholder="Search here ..."
          fluid
          onChange={() => {
            console.log(1);
          }}
        />
      </div>
      <div className="flex items-center justify-end flex-1">
        <Avatar>
          <Image
            alt="Mountains"
            src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80"
            layout="fill"
            objectFit="cover"
          />
        </Avatar>
      </div>
    </div>
  );
}

export default TitleBar;
