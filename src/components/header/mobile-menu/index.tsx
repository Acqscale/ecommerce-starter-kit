import { Fragment, FunctionComponent } from 'react';

import { Transition, Dialog, Tab } from '@headlessui/react';
import { XIcon as XIconOutline } from '@heroicons/react/outline';

import { navigation } from '@/mock-data/navidagion';
import classNames from '@/utils/classnames';

type MobileMenuProps = {
  open: boolean;
  setOpen: (state: boolean) => void;
};

const MobileMenu: FunctionComponent<MobileMenuProps> = ({ open, setOpen }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="flex fixed inset-0 z-40 lg:hidden"
        onClose={setOpen}
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
          <Dialog.Overlay className="fixed inset-0 opacity-25 bg-on-background" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="flex overflow-y-auto relative flex-col pb-12 w-full max-w-xs shadow-xl bg-background">
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                className="inline-flex justify-center items-center p-2 -m-2 rounded-md text-on-background"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIconOutline className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Links */}
            <Tab.Group as="div" className="mt-2">
              <div className="border-b border-border-color">
                <Tab.List className="flex px-4 -mb-px space-x-8">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'text-primary border-primary'
                            : 'text-on-background border-transparent',
                          'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                        )
                      }
                    >
                      {category.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                {navigation.categories.map((category) => (
                  <Tab.Panel
                    key={category.name}
                    className="px-4 pt-10 pb-8 space-y-10"
                  >
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <div className="overflow-hidden rounded-lg group-hover:opacity-75 aspect-w-1 aspect-h-1 bg-background">
                            <img
                              src={item.imageSrc}
                              alt={item.imageAlt}
                              className="object-cover object-center"
                            />
                          </div>
                          <a
                            href={item.href}
                            className="block mt-6 font-medium text-on-background"
                          >
                            <span
                              className="absolute inset-0 z-10"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                          <p
                            aria-hidden="true"
                            className="mt-1 text-on-background text-opacity-60"
                          >
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-on-background"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="flex flex-col mt-6 space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="block p-2 -m-2 text-on-background text-opacity-60"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            <div className="py-6 px-4 space-y-6 border-t border-border-color">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="block p-2 -m-2 font-medium text-on-background"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="py-6 px-4 space-y-6 border-t border-border-color">
              <div className="flow-root">
                <a
                  href="#"
                  className="block p-2 -m-2 font-medium text-on-background"
                >
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="block p-2 -m-2 font-medium text-on-background"
                >
                  Create account
                </a>
              </div>
            </div>

            <div className="py-6 px-4 border-t border-border-color">
              <a href="#" className="flex items-center p-2 -m-2">
                <img
                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                  alt=""
                  className="block shrink-0 w-5 h-auto"
                />
                <span className="block ml-3 text-base font-medium text-on-background">
                  CAD
                </span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenu;
