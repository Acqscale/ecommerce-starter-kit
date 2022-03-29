import { useState } from 'react';

import { RadioGroup } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/solid';

import PageTitle from '@/components/page-title';
import { product, reviews } from '@/mock-data/product';
import classNames from '@/utils/classnames';

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-background">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="flex items-center px-4 mx-auto space-x-2 max-w-2xl sm:px-6 lg:px-8 lg:max-w-7xl"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id} className="text-sm">
                <div className="flex h-5">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 font-medium text-on-background"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-on-background"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-secondary hover:text-opacity-80"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8 lg:max-w-7xl">
          <div className="hidden overflow-hidden rounded-lg aspect-w-3 aspect-h-4 lg:block">
            <img
              src={product?.images[0]?.src}
              alt={product?.images[0]?.alt}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
              <img
                src={product?.images[1]?.src}
                alt={product?.images[1]?.alt}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
              <img
                src={product?.images[2]?.src}
                alt={product?.images[2]?.alt}
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={product?.images[3]?.src}
              alt={product?.images[3]?.alt}
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="px-4 pt-10 pb-16 mx-auto max-w-2xl sm:px-6 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24 lg:max-w-7xl">
          <div className="lg:col-span-2 lg:pr-8 lg:border-r lg:border-border-color">
            <PageTitle title={product.name} />
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-primary">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? 'text-on-background'
                          : 'text-secondary',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-secondary hover:text-opacity-80"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-on-background">
                  Color
                </h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
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
                            color.selectedClass,
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
                            color.class,
                            'h-8 w-8 border border-border-color border-opacity-10 rounded-full'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-on-background">
                    Size
                  </h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-secondary hover:text-opacity-80"
                  >
                    Size guide
                  </a>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'bg-background shadow-sm text-on-background cursor-pointer'
                              : 'bg-background text-disable cursor-not-allowed',
                            active ? 'ring-2 ring-secondary' : '',
                            'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:opacity-80 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="p">
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <div
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked
                                    ? 'border-secondary'
                                    : 'border-transparent',
                                  'absolute -inset-px rounded-md pointer-events-none'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <div
                                aria-hidden="true"
                                className="absolute -inset-px rounded-md border-2 pointer-events-none border-disable"
                              >
                                <svg
                                  className="absolute inset-0 w-full h-full stroke-2 text-disable"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </div>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="flex justify-center items-center py-3 px-8 mt-10 w-full text-base font-medium rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-80 text-on-secondary bg-secondary focus:ring-secondary"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pr-8 lg:pb-16 lg:border-r lg:border-border-color">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-on-background">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-primary">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-on-background">
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-primary">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-on-background">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
