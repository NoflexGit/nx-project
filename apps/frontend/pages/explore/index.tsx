import Image from 'next/image';
import SimpleBar from 'simplebar-react';
import { useQuery } from '@apollo/client';

import { Typography, Button } from '@common/components';
import { ContentPlate, PropertyCard, PropertyMap } from '@frontend/components';
import { DashboardLayout } from '@frontend/layouts';
import { AppPropsWithLayout } from '@frontend/types';
import { GET_PROPERTY_LIST_QUERY } from '@frontend/grapql/property';

export function Explore(props: AppPropsWithLayout) {
  const { data, loading, error } = useQuery(GET_PROPERTY_LIST_QUERY);

  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-5 md:gap-6">
      <ContentPlate
        className="col-span-2 xl:col-span-1 xl:block"
        defaultPadding={false}
      ></ContentPlate>
      <ContentPlate
        className="relative col-span-3 h-full pr-3 pb-12 xl:col-span-2"
        defaultPadding={false}
      >
        <SimpleBar style={{ maxHeight: '100%' }}>
          <div className="space-y-6 p-6">
            {data?.properties?.map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
          </div>
        </SimpleBar>
        {/* <section className="absolute inset-x-0 bottom-0 flex h-12 justify-center bg-white">
          <div className="flex w-1/2 justify-between">
            <Button>Prev</Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button view="secondary" key={page}>
                {page}
              </Button>
            ))}
            <button>Next</button>
          </div>
        </section> */}
      </ContentPlate>
      <ContentPlate
        className="hidden xl:col-span-2 xl:block"
        defaultPadding={false}
      >
        <PropertyMap
          items={data?.properties}
          activeItem={data?.properties[0]}
        />
      </ContentPlate>
    </div>
  );
}

Explore.getLayout = function getLayout(page) {
  return <DashboardLayout compactSidebar>{page}</DashboardLayout>;
};

export default Explore;
