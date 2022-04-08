import { Fragment, FunctionComponent, useState } from 'react';

import { Popover, Transition } from '@headlessui/react';
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';

import { navigation } from '@/mock-data/navidagion';

import MobileMenu from './mobile-menu';

type HeaderProps = {
  setSelectedTheme: (val: string) => void;
  theme: string;
};

const Header: FunctionComponent<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <>
      <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      <header className="relative z-30 bg-background">
        <nav
          aria-label="Top"
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-0"
        >
          <div>
            <div className="flex items-center h-16 lg:justify-between">
              <button
                type="button"
                className="p-2 text-slate-500 rounded-md lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="flex ml-2 lg:ml-0">
                <Link href="/">
                  <a>
                    <img
                      className="block w-auto h-8 md:hidden"
                      src="/assets/images/logo-sm.svg"
                      alt=""
                    />
                    <img
                      className="hidden w-auto h-8 md:block"
                      src="/assets/images/logo.svg"
                      alt=""
                    />
                  </a>
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:block lg:self-stretch lg:ml-8">
                <div className="flex space-x-8 h-full">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {() => (
                        <>
                          <div className="flex relative">
                            <Popover.Button className="flex relative z-10 items-center text-base font-medium text-secondary">
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full z-10 text-sm text-on-background">
                              <div
                                className="absolute inset-0 top-1/2 shadow bg-background"
                                aria-hidden="true"
                              />
                              <div className="relative bg-background">
                                <div className="px-8 mx-auto max-w-7xl">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="grid grid-cols-2 col-start-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="relative"
                                        >
                                          <div className="overflow-hidden rounded-lg group-hover:opacity-75 aspect-w-1 aspect-h-1 bg-background">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="block mt-6 text-sm font-bold text-black"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1 text-base font-normal text-secondary"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="grid grid-cols-3 row-start-1 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-semibold text-black"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="text-base font-normal text-secondary"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-base font-medium text-secondary"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="flex items-center ml-auto lg:ml-0">
                {/* Search */}
                <div className="flex lg:ml-6 text-secondary">
                  <a href="#" className="p-2">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>

                {/* Cart */}
                <div className="flow-root ml-4 lg:ml-6 text-secondary">
                  <a href="#" className="group flex items-center p-2 -m-2">
                    <ShoppingBagIcon
                      className="shrink-0 w-5 h-5"
                      aria-hidden="true"
                    />
                    <span className="ml-2 font-semibold">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
