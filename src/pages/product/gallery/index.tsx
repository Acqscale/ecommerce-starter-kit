import { FunctionComponent } from 'react';

import { Tab } from '@headlessui/react';

import classNames from '@/utils/classnames';

type GalleryProps = {
  images: {
    id: number | string;
    name: string;
    src: string;
    alt: string;
  }[];
};

const Gallery: FunctionComponent<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="hidden mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <Tab
              key={image.id}
              className="flex relative justify-center items-center h-24 text-sm font-medium uppercase rounded-md focus:outline-none focus:ring focus:ring-offset-4 focus:opacity-50 cursor-pointer text-on-background"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">{image.name}</span>
                  <span className="overflow-hidden absolute inset-0 rounded-md">
                    <img
                      src={image.src}
                      alt=""
                      className="object-cover object-center w-full h-full"
                    />
                  </span>
                  <span
                    className={classNames(
                      selected ? 'ring-secondary' : 'ring-transparent',
                      'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover object-center w-full h-full sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
