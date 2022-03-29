import { Fragment, useState } from 'react';

import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import {
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
  ViewGridIcon,
  ViewListIcon,
} from '@heroicons/react/solid';

import PageTitle from '@/components/page-title';
import ProductsList from '@/components/product-list';
import { ViewType } from '@/components/product-list/item';
import { Meta } from '@/layout/Meta';
import { sortOptions, subCategories, filters } from '@/mock-data/category';
import { products } from '@/mock-data/products';
import { Main } from '@/templates/Main';
import classNames from '@/utils/classnames';

export default function CategoryPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [viewType, setViewType] = useState<ViewType>(ViewType.listView);

  const handleViewTypeChange = () => {
    setViewType(
      viewType === ViewType.gridView ? ViewType.listView : ViewType.gridView
    );
  };

  return (
    <Main meta={<Meta title="Products Page" description="Products page" />}>
      <div className="bg-background">
        <div>
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="flex fixed inset-0 z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-25" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="flex overflow-y-auto relative flex-col py-4 pb-12 ml-auto w-full max-w-xs h-full shadow-xl bg-background">
                  <div className="flex justify-between items-center px-4">
                    <h2 className="text-lg font-medium text-on-background">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="flex justify-center items-center p-2 -mr-2 w-10 h-10 rounded-md text-on-background bg-background"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-border-color">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="py-3 px-2 font-medium">
                      {subCategories.map((category) => (
                        <li
                          key={category.name}
                          className="hover:bg-secondary hover:text-on-secondary text-on-background"
                        >
                          <a href={category.href} className="block py-3 px-2">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="py-6 px-4 border-t border-border-color"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="flow-root -my-3 -mx-2">
                              <Disclosure.Button className="flex justify-between items-center py-3 px-2 w-full text-on-background hover:text-opacity-50 bg-background">
                                <span className="font-medium">
                                  {section.name}
                                </span>
                                <span className="flex items-center ml-6">
                                  {open ? (
                                    <MinusSmIcon
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusSmIcon
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="w-4 h-4 rounded focus:ring-primary text-primary border-border-color"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="flex-1 ml-3 min-w-0 text-on-background"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </div>
              </Transition.Child>
            </Dialog>
          </Transition.Root>

          <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex relative z-10 justify-between items-baseline py-6 border-b border-border-color">
              <PageTitle title="Products" />

              <div className="flex items-center">
                <Menu as="div" className="inline-block relative text-left">
                  <div className="flex flex-row items-center">
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium hover:text-opacity-50 text-on-background">
                      Sort
                      <ChevronDownIcon
                        className="shrink-0 -mr-1 ml-1 w-5 h-5 group-hover:text-opacity-50 text-on-background"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-40 rounded-md focus:outline-none ring-1 shadow-2xl origin-top-right ring-on-background bg-background">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? 'text-primary'
                                    : 'text-on-background',
                                  active
                                    ? 'bg-secondary text-on-secondary'
                                    : '',
                                  'block px-4 py-2 font-medium text-sm'
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="p-2 -m-2 ml-5 sm:ml-7 text-on-background hover:text-opacity-50"
                  onClick={handleViewTypeChange}
                >
                  {viewType === ViewType.gridView ? (
                    <>
                      <span className="sr-only">View list</span>
                      <ViewListIcon className="w-5 h-5" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <span className="sr-only">View grid</span>
                      <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
                    </>
                  )}
                </button>
                <button
                  type="button"
                  className="p-2 -m-2 ml-4 sm:ml-6 lg:hidden text-on-background hover:text-opacity-50"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FilterIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="pb-6 space-y-4 text-sm font-medium border-b text-on-background border-border-color"
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="py-6 border-b border-border-color"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="flow-root -my-3">
                            <Disclosure.Button className="flex justify-between items-center py-3 w-full text-sm text-on-background hover:text-opacity-50 bg-background">
                              <span className="font-medium">
                                {section.name}
                              </span>
                              <span className="flex items-center ml-6">
                                {open ? (
                                  <MinusSmIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="w-4 h-4 rounded text-primary border-border-color focus:ring-primary"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-on-background"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
                <div className="lg:col-span-3">
                  <ProductsList products={products} viewType={viewType} />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Main>
  );
}
