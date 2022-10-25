/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useCallback, useState } from 'react';
import Image from 'next/image';
import { ReactComponent as MapPin } from '@frontend/assets/icons/pin.svg';
import { GoogleMap, useJsApiLoader, OverlayView } from '@react-google-maps/api';

/* eslint-disable-next-line */
export interface PropertyMapProps {
  items: any[];
  activeItem: any;
}

const googleMapsStyles = [
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#686868',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f8f6f6',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 65,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        lightness: '-22',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        saturation: '11',
      },
      {
        lightness: '-51',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text',
    stylers: [
      {
        saturation: '3',
      },
      {
        lightness: '-56',
      },
      {
        weight: '2.20',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        lightness: '-52',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        weight: '6.13',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.icon',
    stylers: [
      {
        lightness: '-10',
      },
      {
        gamma: '0.94',
      },
      {
        weight: '1.24',
      },
      {
        saturation: '-100',
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        lightness: '-16',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: '-41',
      },
      {
        lightness: '-41',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        weight: '5.46',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        weight: '0.72',
      },
      {
        lightness: '-16',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        lightness: '-37',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#b7e4f4',
      },
      {
        visibility: 'on',
      },
    ],
  },
];

const containerStyle = {
  width: '100%',
  height: '100%',
};

export function PropertyMap({ items, activeItem }: PropertyMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'property-map',
    googleMapsApiKey: 'AIzaSyBBcthieXCzlwvYgzX3aGZqRn4lfNKKees',
    language: 'en',
    region: 'en',
  });

  const [, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (!isLoaded || !items) {
    return null;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: items?.[0]?.details?.latitude,
        lng: items?.[0]?.details?.longitude,
      }}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: googleMapsStyles,
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      {items?.map((item) => (
        <OverlayView
          position={
            new google.maps.LatLng(
              item?.details?.latitude,
              item?.details?.longitude
            )
          }
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          key={item.id}
        >
          <section className="relative">
            {/* <div className="rounded bg-white p-2 shadow-lg">
              <div className="relative h-16 w-24 overflow-hidden rounded">
                <Image
                  src={item.previewImg}
                  alt={item.address}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div> */}

            <MapPin className="absolute -top-full -left-full" />
          </section>
        </OverlayView>
      ))}
    </GoogleMap>
  );
}

export default PropertyMap;
