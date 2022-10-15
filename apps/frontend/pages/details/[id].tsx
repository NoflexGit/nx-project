import { Button, Typography } from '@nx-project/components';
import Image from 'next/image';

import { ReviewCard, AgentInfo } from '../../components';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import { AppPropsWithLayout } from '../../types';
import { ReactComponent as LocationSVG } from '../../static/icons/bold/location.svg';
import { ReactComponent as BedSVG } from '../../static/icons/outline/bedroom.svg';
export function Details(props: AppPropsWithLayout) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
          <div className="col-span-2">
            <div className="mb-6 grid gap-6 md:grid-cols-3">
              <div className="relative h-[180px] overflow-hidden rounded-lg md:col-span-2 md:h-[331px]">
                <Image
                  alt="Mountains"
                  src="https://images.unsplash.com/photo-1612637968894-660373e23b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex w-full gap-6 md:col-span-1 md:flex-col">
                <div className="relative h-[108px] w-full overflow-hidden rounded-lg md:h-[153px]">
                  <Image
                    alt="Mountains"
                    src="https://images.unsplash.com/photo-1612637968894-660373e23b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative h-[108px] w-full overflow-hidden rounded-lg md:h-[153px]">
                  <span className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 font-bold text-white">
                    +12
                  </span>
                  <Image
                    alt="Mountains"
                    src="https://images.unsplash.com/photo-1612637968894-660373e23b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="col-span-2">
                <Typography.Text className="mb-3">APARTMENT</Typography.Text>
                <Typography.Title size="xl" weight="bold" className="mb-3">
                  Star Sun Hotel & Apartment
                </Typography.Title>
                <div className="mb-2 flex items-center">
                  <LocationSVG
                    width="20"
                    height="20"
                    className="text-primary-900 mr-2 inline-block flex-none"
                  />
                  <Typography.Text color="secondary">
                    Jl Letda Nasir 45 RT 001/02
                  </Typography.Text>
                </div>
              </div>
              <div className="col-span-1">
                <Typography.Text className="mb-3">Price</Typography.Text>
                <div className="text-secondary-500 flex items-center">
                  <span className="text-primary-500 mr-1 text-2xl font-bold">
                    $80
                  </span>
                  /night
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Typography.Title
                tag="h4"
                className="mb-4"
                size="lg"
                weight="bold"
              >
                Facility
              </Typography.Title>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <Typography.Text size="sm" weight="semibold">
                  <BedSVG
                    width="16"
                    height="16"
                    className="text-secondary-300 mr-2 inline-block flex-none"
                  />
                  2 Beds
                </Typography.Text>
                <Typography.Text size="sm" weight="semibold">
                  <BedSVG
                    width="16"
                    height="16"
                    className="text-secondary-300 mr-2 inline-block flex-none"
                  />
                  3 Baths
                </Typography.Text>
                <Typography.Text size="sm" weight="semibold">
                  <BedSVG
                    width="16"
                    height="16"
                    className="text-secondary-300 mr-2 inline-block flex-none"
                  />
                  24M area
                </Typography.Text>
                <Typography.Text size="sm" weight="semibold">
                  <BedSVG
                    width="16"
                    height="16"
                    className="text-secondary-300 mr-2 inline-block flex-none"
                  />
                  Smooking Area
                </Typography.Text>
                <Typography.Text size="sm" weight="semibold">
                  <BedSVG
                    width="16"
                    height="16"
                    className="text-secondary-300 mr-2 inline-block flex-none"
                  />
                  Kitchen
                </Typography.Text>
                <Typography.Text size="sm" weight="semibold">
                  <BedSVG
                    width="16"
                    height="16"
                    className="text-secondary-300 mr-2 inline-block flex-none"
                  />
                  Wifi
                </Typography.Text>
              </div>
            </div>
            <div className="mt-6">
              <Typography.Title
                tag="h4"
                className="mb-4"
                size="lg"
                weight="bold"
              >
                Description
              </Typography.Title>
              <Typography.Text color="secondary" size="sm">
                Star Apartment by Star Hotel is an inn that has a room concept
                in an apartment, which is comfortable and clean. This apartment
                is located in a strategic area of ​​Semarang City, thus
                providing easy access to several famous places in Semarang City.
                With the facilities and services in this apartment, you can make
                this apartment your vacation accommodation with your family or
                partner.
              </Typography.Text>
            </div>
          </div>
          <div className="mt-6 space-y-4 md:mt-0">
            <AgentInfo
              name="John Doe"
              location="Ampera 3 no 8 Daerah Khusus"
              propertyCount={12}
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            />
            <Button size="lg" fluid>
              Book now
            </Button>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-4 md:p-6">
        <Typography.Title tag="h4" className="mb-4" size="lg" weight="bold">
          Reviews
        </Typography.Title>
        <div>
          <div className="mb-4 flex items-center">
            <div className="bg-primary-500 rounded-lg py-1 px-3 font-bold text-white">
              4.2
            </div>
            <div className="text-secondary-500 ml-2">from 28 reviews</div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ReviewCard
              author="Albert Flores"
              score="5.0"
              content=" Comfortable apartment, friendly staff, and very careful with the
                covid protocol"
            />
            <ReviewCard
              author="Albert Flores"
              score="5.0"
              content=" Comfortable apartment, friendly staff, and very careful with the
                covid protocol"
            />
            <ReviewCard
              author="Albert Flores"
              score="5.0"
              content=" Comfortable apartment, friendly staff, and very careful with the
                covid protocol"
            />
            <ReviewCard
              author="Albert Flores"
              score="5.0"
              content=" Comfortable apartment, friendly staff, and very careful with the
                covid protocol"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Details.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Details;
