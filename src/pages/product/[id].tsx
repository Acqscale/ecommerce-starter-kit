import { useState } from 'react';

import { Disclosure, RadioGroup } from '@headlessui/react';
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

import Button from '@/components/ui/button';
import { Meta } from '@/layout/Meta';
import { product } from '@/mock-data/product';
import { Main } from '@/templates/Main';
import classNames from '@/utils/classnames';

import Gallery from './gallery';

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <Main
      meta={<Meta title={product.name} description={product.description} />}
    >
      <div className="p-4 mx-auto max-w-2xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <Gallery images={product.images} />

          {/* Product info */}
          <div className="px-4 mt-10 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-on-background">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-on-background">{product.price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? 'text-primary'
                          : 'text-on-background',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-on-background text-opacity-80"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className="mt-6">
              {/* Colors */}
              <div>
                <h3 className="text-sm text-on-background text-opacity-80">
                  Color
                </h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedColor,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="p" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.bgColor,
                            'h-8 w-8 border border-on-background border-opacity-10 rounded-full'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="flex mt-10 sm:flex-col1">
                <Button onClick={() => {}}>Add to bag</Button>
                <button
                  type="button"
                  className="flex justify-center items-center p-3 ml-4 rounded-md bg-background text-on-background hover:text-on-secondary hover:bg-secondary"
                >
                  <HeartIcon className="shrink-0 w-6 h-6" aria-hidden="true" />
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="border-t divide-y divide-border-color">
                {product.details.map((detail) => (
                  <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group flex relative justify-between items-center py-6 w-full text-left">
                            <span
                              className={classNames(
                                open ? 'text-primary' : 'text-on-background',
                                'text-sm font-medium'
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className="flex items-center ml-6">
                              {open ? (
                                <MinusSmIcon
                                  className="block w-6 h-6 group-hover:opacity-80 text-primary"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmIcon
                                  className="block w-6 h-6 group-hover:opacity-80 text-on-background"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as="div"
                          className="pb-6 prose prose-sm"
                        >
                          <ul role="list">
                            {detail.items.map((item) => (
                              <li key={item} className="text-on-background">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Main>
  );
}
