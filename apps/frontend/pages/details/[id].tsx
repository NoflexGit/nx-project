import Image from 'next/image';
import { Button, Typography } from '@common/components';

import { ReviewCard, AgentInfo, ContentPlate } from '@frontend/components';
import { DashboardLayout } from '@frontend/layouts';
import { AppPropsWithLayout } from '@frontend/types';
import { ReactComponent as LocationSVG } from '@frontend/assets/icons/bold/location.svg';
import { ReactComponent as BedSVG } from '@frontend/assets/icons/outline/bedroom.svg';
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { GET_PROPERTY_QUERY } from '@frontend/grapql/property';

const client = new ApolloClient({
  link: from([
    new HttpLink({
      uri: 'http://localhost:4200/graphql',
    }),
  ]),
  cache: new InMemoryCache(),
});

export async function getServerSideProps(context) {
  const { id } = context.query;
  try {
    const { data } = await client.query({
      query: GET_PROPERTY_QUERY,
      variables: {
        id,
      },
    });

    return {
      props: {
        property: data.property,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export function Details(props: any) {
  const { property } = props;

  console.log(property);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
          <div className="col-span-2">
            <div className="mb-6 grid gap-6 md:grid-cols-3">
              <div className="relative h-[180px] overflow-hidden rounded-lg md:col-span-2 md:h-[331px]">
                <Image
                  alt={property.name}
                  src={property.previewImg}
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
                <Typography.Text className="mb-3">
                  {property.type}
                </Typography.Text>
                <Typography.Title size="xl" weight="bold" className="mb-3">
                  {property.name}
                </Typography.Title>
                <div className="mb-2 flex items-center">
                  <LocationSVG
                    width="20"
                    height="20"
                    className="text-primary-900 mr-2 inline-block flex-none"
                  />
                  <Typography.Text color="secondary">
                    {property.address}
                  </Typography.Text>
                </div>
              </div>
              <div className="col-span-1">
                <Typography.Text className="mb-3">Price</Typography.Text>
                <div className="text-secondary-500 flex items-center">
                  <span className="text-primary-500 mr-1 text-2xl font-bold">
                    $ {property.details.price / 100}
                  </span>
                  /month
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
                {property.details.description}
              </Typography.Text>
            </div>
          </div>
          <div className="mt-6 space-y-4 md:mt-0">
            <AgentInfo
              name={property.agent.name}
              location={property.agent.location}
              propertyCount={property.agent.propertiesCount}
              avatar={property.agent.avatar}
            />
            <Button size="lg" fluid>
              Book now
            </Button>
          </div>
        </div>
      </div>
      {property.reviews?.list && (
        <ContentPlate>
          <Typography.Title tag="h4" className="mb-4" size="lg" weight="bold">
            Reviews
          </Typography.Title>
          <div>
            <div className="mb-4 flex items-center">
              <div className="bg-primary-500 rounded-lg py-1 px-3 font-bold text-white">
                {property.reviews.average}
              </div>
              <div className="text-secondary-500 ml-2">
                from {property.reviews.count} reviews
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {property.reviews.list.map((review) => (
                <ReviewCard
                  key={review.id}
                  author={review.user.name}
                  score={review.rating}
                  content={review.comment}
                />
              ))}
            </div>
          </div>
        </ContentPlate>
      )}
    </div>
  );
}

Details.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Details;
