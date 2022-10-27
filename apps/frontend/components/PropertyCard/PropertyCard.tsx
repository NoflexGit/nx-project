import { Typography } from '@common/components';
import Image from 'next/image';
import Link from 'next/link';

import { ReactComponent as HeartBoldSVG } from '@frontend/assets/icons/bold/heart.svg';
import { ReactComponent as HeartOutlineSVG } from '@frontend/assets/icons/outline/heart.svg';

export interface PropertyCardProps {
  view?: 'default' | 'compact';
  property: {
    id: string;
    name: string;
    address: string;
    previewImg: string;
    details?: {
      rooms?: number;
      bathrooms?: number;
      area?: number;
      price: number;
    };
  };
}

export function PropertyCard({ property }: PropertyCardProps) {
  const {
    id,
    name,
    address,
    previewImg,
    details: { rooms, bathrooms, area, price },
  } = property;

  return (
    <article className="group flex gap-6">
      <div className="flex-0 relative h-[140px] basis-[200px] overflow-hidden rounded-lg">
        <div className="absolute inset-0 z-50 bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="flex h-full w-full items-center justify-center">
            <button className="scale-100 rounded-full bg-white/20 p-3 transition-all hover:bg-white/40 active:scale-90 ">
              <HeartBoldSVG className="text-white" />
            </button>
          </div>
        </div>
        <Image alt={name} layout="fill" objectFit="cover" src={previewImg} />
      </div>
      <div className="flex-1">
        <span className="text-primary-500 bg-primary-100 mb-4 inline-block rounded-lg px-2 py-1 text-base font-bold">
          {price / 100} €
        </span>
        <Link href={`/explore/${id}`}>
          <a>
            <Typography.Title
              weight="bold"
              tag="h4"
              className="hover:text-primary-500 mb-2"
            >
              {name}
            </Typography.Title>
          </a>
        </Link>
        <Typography.Text color="secondary" size="sm">
          {address}
        </Typography.Text>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <Typography.Text size="sm" weight="semibold">
            {rooms}
          </Typography.Text>
          <Typography.Text size="sm" weight="semibold">
            {bathrooms}
          </Typography.Text>
          <Typography.Text size="sm" weight="semibold">
            {area / 100} m²
          </Typography.Text>
        </div>
      </div>
    </article>
  );
}

export default PropertyCard;
