import Image from 'next/image';

export interface GalleryProps {
  images: string[];
  imagePlaceholder: string;
}

export function PropertyGallery({ images, imagePlaceholder }: GalleryProps) {
  const restImagesCount = images.length - 3;
  const primaryImage = images[0];

  return (
    <div className="mb-6 grid gap-6 md:grid-cols-3">
      <div className="relative h-[180px] overflow-hidden rounded-lg md:col-span-2 md:h-[331px]">
        <Image
          alt={imagePlaceholder}
          src={primaryImage}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex w-full gap-6 md:col-span-1 md:flex-col">
        <div className="relative h-[108px] w-full overflow-hidden rounded-lg md:h-[153px]">
          <Image
            alt="Mountains"
            src={images?.[1]}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-[108px] w-full overflow-hidden rounded-lg md:h-[153px]">
          {restImagesCount > 0 && (
            <span className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 font-bold text-white">
              + {restImagesCount}
            </span>
          )}
          <Image
            alt="Mountains"
            src={images?.[2]}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default PropertyGallery;
