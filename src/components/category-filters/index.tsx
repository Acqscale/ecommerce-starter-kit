import { Fragment, FunctionComponent, ReactNode } from 'react';

import { Menu, Transition, Disclosure } from '@headlessui/react';
import {
  ChevronDownIcon,
  ViewListIcon,
  ViewGridIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
} from '@heroicons/react/solid';

import classNames from '@/utils/classnames';

import PageTitle from '../page-title';
import { ViewType } from '../product-list/item';

type CategoryFilterProps = {
  sortOptions: {
    name: string;
    href: string;
    current: boolean; // @TODO: check current sort option using url url query
  }[];
  subCategories: {
    name: string;
    href: string;
  }[];
  filters: {
    id: string;
    name: string;
    options: {
      value: string;
      label: string;
      checked: boolean; // @TODO: check is option checked using url query
    }[];
  }[];
  viewType: ViewType;
  handleViewTypeChange: () => void;
  setMobileFiltersOpen: (val: boolean) => void;
  children: ReactNode;
};

const CategoryFilters: FunctionComponent<CategoryFilterProps> = ({
  sortOptions,
  subCategories,
  filters,
  viewType,
  handleViewTypeChange,
  setMobileFiltersOpen,
  children,
}) => {
  return (
    <div>
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
                            active ? 'bg-secondary text-on-secondary' : '',
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
                        <span className="font-medium">{section.name}</span>
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
                          <div key={option.value} className="flex items-center">
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
          {children}
        </div>
      </section>
    </div>
  );
};

export default CategoryFilters;
