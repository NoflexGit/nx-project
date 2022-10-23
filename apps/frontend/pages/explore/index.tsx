import Image from 'next/image';
import SimpleBar from 'simplebar-react';
import { useQuery } from '@apollo/client';

import { Typography } from '@common/components';
import { ContentPlate, PropertyCard } from '@frontend/components';
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
        className="col-span-3 h-full xl:col-span-2"
        defaultPadding={false}
      >
        <SimpleBar style={{ maxHeight: '100%' }}>
          <div className="space-y-6 p-6">
            {data?.properties?.map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
          </div>
        </SimpleBar>
      </ContentPlate>
      <ContentPlate
        className="hidden xl:col-span-2 xl:block"
        defaultPadding={false}
      ></ContentPlate>
    </div>
  );
}

Explore.getLayout = function getLayout(page) {
  return <DashboardLayout compactSidebar>{page}</DashboardLayout>;
};

export default Explore;
