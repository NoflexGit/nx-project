import {
  Select,
  SelectItem,
  Separator,
  Typography,
} from '@nx-project/components';
import Image from 'next/image';
import Link from 'next/link';

import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import { ReactComponent as ArrowsSVG } from '../../static/icons/bold/arrow-dimensions.svg';
import { ReactComponent as LocationSVG } from '../../static/icons/bold/location.svg';
import { ReactComponent as BedSVG } from '../../static/icons/outline/bedroom.svg';
import { ReactComponent as PairSVG } from '../../static/icons/outline/pair.svg';

export function Dashboard() {
  return (
    <>
      <Typography.Title size="xl" weight="bold" className="mb-5">
        Find Your Best Real Estate
      </Typography.Title>
      <div className="rounded-2xl bg-white p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Select>
            <SelectItem key="red panda">Red Panda</SelectItem>
            <SelectItem key="cat">Cat</SelectItem>
          </Select>
          <Select>
            <SelectItem key="red panda">Red Panda</SelectItem>
            <SelectItem key="cat">Cat</SelectItem>
          </Select>
          <Select>
            <SelectItem key="red panda">Red Panda</SelectItem>
            <SelectItem key="cat">Cat</SelectItem>
          </Select>
        </div>
        <Separator className="my-6" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <article>
            <div className="relative mb-3 h-44 w-full overflow-hidden rounded-lg">
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src={
                  'https://images.unsplash.com/photo-1612637968894-660373e23b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                }
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <Link href="/details/1">
                  <a>
                    <Typography.Title
                      weight="bold"
                      tag="h4"
                      className="hover:text-primary-500 mb-2"
                    >
                      Star Sun Hotel & Apartment
                    </Typography.Title>
                  </a>
                </Link>
                <div className="flex items-center">
                  <LocationSVG
                    width="16"
                    height="16"
                    className="text-primary-900 mr-2 inline-block flex-none"
                  />
                  <Typography.Text color="secondary" size="sm">
                    Jl Letda Nasir 45 RT 001/02
                  </Typography.Text>
                </div>
                <div className="mt-5 flex w-full justify-between">
                  <Typography.Text size="sm" weight="semibold">
                    <BedSVG
                      width="16"
                      height="16"
                      className="text-secondary-300 mr-2 inline-block flex-none"
                    />
                    2
                  </Typography.Text>
                  <Typography.Text size="sm" weight="semibold">
                    <PairSVG
                      width="16"
                      height="16"
                      className="text-secondary-300 mr-2 inline-block flex-none"
                    />
                    3
                  </Typography.Text>
                  <Typography.Text size="sm" weight="semibold">
                    <ArrowsSVG
                      width="16"
                      height="16"
                      className="text-secondary-300 mr-2 inline-block flex-none"
                    />
                    24 M<sup>2</sup>
                  </Typography.Text>
                </div>
              </div>
              <div className="col-span-1 text-right">
                <span className="text-primary-500 bg-primary-100 inline-block rounded-lg px-2 py-1 text-base font-bold">
                  $80
                </span>
              </div>
            </div>
          </article>
          <article>
            <div className="relative mb-3 h-44 w-full overflow-hidden rounded-lg">
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src={
                  'https://images.unsplash.com/photo-1612637968894-660373e23b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                }
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <Link href="/details/1">
                  <a>
                    <Typography.Title
                      weight="bold"
                      tag="h4"
                      className="hover:text-primary-500 mb-2"
                    >
                      Star Sun Hotel & Apartment
                    </Typography.Title>
                  </a>
                </Link>
                <div className="flex items-center">
                  <LocationSVG
                    width="16"
                    height="16"
                    className="text-primary-900 mr-2 inline-block flex-none"
                  />
                  <Typography.Text color="secondary" size="sm">
                    Jl Letda Nasir 45 RT 001/02
                  </Typography.Text>
                </div>
                <div className="mt-5 flex w-full justify-between">
                  <Typography.Text size="sm" weight="semibold">
                    <BedSVG
                      width="16"
                      height="16"
                      className="text-secondary-300 mr-2 inline-block flex-none"
                    />
                    2
                  </Typography.Text>
                  <Typography.Text size="sm" weight="semibold">
                    <PairSVG
                      width="16"
                      height="16"
                      className="text-secondary-300 mr-2 inline-block flex-none"
                    />
                    3
                  </Typography.Text>
                  <Typography.Text size="sm" weight="semibold">
                    <ArrowsSVG
                      width="16"
                      height="16"
                      className="text-secondary-300 mr-2 inline-block flex-none"
                    />
                    24 M<sup>2</sup>
                  </Typography.Text>
                </div>
              </div>
              <div className="col-span-1 text-right">
                <span className="text-primary-500 bg-primary-100 inline-block rounded-lg px-2 py-1 text-base font-bold">
                  $80
                </span>
              </div>
            </div>
          </article>
          <article>
            <div className="relative mb-3 h-44 w-full overflow-hidden rounded-lg">
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src={
                  'https://images.unsplash.com/photo-1612637968894-660373e23b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                }
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <Link href="/details/1">
                  <a>
                    <Typography.Title
                      weight="bold"
                      tag="h4"
                      className="hover:text-primary-500 mb-2"
                    >
                      Star Sun Hotel & Apartment
                    </Typography.Title>
                  </a>
                </Link>
                <div className="flex items-center">
                  <LocationSVG
                    width="16"
                    height="16"
                    className="text-primary-900 mr-2 inline-block flex-none"
                  />
                  <Typography.Text color="secondary" size="sm">
                    Jl Letda Nasir 45 RT 001/02
                  </Typography.Text>
                </div>
                <div className="mt-5 flex w-full justify-between">
                  <Typography.Text size="sm" weight="semibold">
                    <BedSVG
                      width="16"
                      height="16"
                      className="text-secondary-300 mr-2 inline-block flex-none"
                    />
                    2
                  </Typography.Text>
                  <Typography.Text size="sm" weight="semibold">
                    <PairSVG
                      width="16"
                      height="16"
                      className="text-secondary-300 mr-2 inline-block flex-none"
                    />
                    3
                  </Typography.Text>
                  <Typography.Text size="sm" weight="semibold">
                    <ArrowsSVG
                      width="16"
                      height="16"
                      className="text-secondary-300 mr-2 inline-block flex-none"
                    />
                    24 M<sup>2</sup>
                  </Typography.Text>
                </div>
              </div>
              <div className="col-span-1 text-right">
                <span className="text-primary-500 bg-primary-100 inline-block rounded-lg px-2 py-1 text-base font-bold">
                  $80
                </span>
              </div>
            </div>
          </article>
          <article>
            <div className="relative mb-3 h-44 w-full overflow-hidden rounded-lg">
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src={
                  'https://images.unsplash.com/photo-1612637968894-660373e23b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                }
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <Link href="/details/1">
                  <a>
                    <Typography.Title
                      weight="bold"
                      tag="h4"
                      className="hover:text-primary-500 mb-2"
                    >
                      Star Sun Hotel & Apartment
                    </Typography.Title>
                  </a>
                </Link>
                <div className="flex items-center">
                  <LocationSVG
                    width="16"
                    height="16"
                    className="text-primary-900 mr-2 inline-block flex-none"
                  />
                  <Typography.Text color="secondary" size="sm">
                    Jl Letda Nasir 45 RT 001/02
                  </Typography.Text>
                </div>
                <div className="mt-5 flex w-full justify-between">
                  <Typography.Text size="sm" weight="semibold">
                    <BedSVG
                      width="16"
                      height="16"
                      className="text-secondary-300 mr-2 inline-block flex-none"
                    />
                    2
                  </Typography.Text>
                  <Typography.Text size="sm" weight="semibold">
                    <PairSVG
                      width="16"
                      height="16"
                      className="text-secondary-300 mr-2 inline-block flex-none"
                    />
                    3
                  </Typography.Text>
                  <Typography.Text size="sm" weight="semibold">
                    <ArrowsSVG
                      width="16"
                      height="16"
                      className="text-secondary-300 mr-2 inline-block flex-none"
                    />
                    24 M<sup>2</sup>
                  </Typography.Text>
                </div>
              </div>
              <div className="col-span-1 text-right">
                <span className="text-primary-500 bg-primary-100 inline-block rounded-lg px-2 py-1 text-base font-bold">
                  $80
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="mt-6 rounded-2xl bg-white p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="grid grid-cols-3 gap-6">
            <div className="col-span-1">
              <div className="relative mb-3 h-[140px] w-full overflow-hidden rounded-lg">
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  src={
                    'https://images.unsplash.com/photo-1612637968894-660373e23b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                  }
                />
              </div>
            </div>
            <div className="col-span-2">
              <span className="text-primary-500 bg-primary-100 mb-4 inline-block rounded-lg px-2 py-1 text-base font-bold">
                $80
              </span>
              <Typography.Title weight="bold" className="mb-2">
                Star Sun Hotel & Apartment
              </Typography.Title>
              <Typography.Text color="secondary" size="sm">
                Jl Letda Nasir 45 RT 001/02
              </Typography.Text>
              <div className="mt-4 grid w-9/12 grid-cols-3 gap-4">
                <Typography.Text size="sm" weight="semibold">
                  2
                </Typography.Text>
                <Typography.Text size="sm" weight="semibold">
                  3
                </Typography.Text>
                <Typography.Text size="sm" weight="semibold">
                  24M
                </Typography.Text>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
