import { Fragment, FunctionComponent } from 'react';

import { Transition, Dialog, Disclosure } from '@headlessui/react';
import { XIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';

type MobileCategoryFiltersProps = {
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
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: (val: boolean) => void;
};

const MobileCategoryFilters: FunctionComponent<MobileCategoryFiltersProps> = ({
  subCategories,
  filters,
  mobileFiltersOpen,
  setMobileFiltersOpen,
}) => {
  return (
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
  );
};

export default MobileCategoryFilters;
