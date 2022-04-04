import { Fragment, FunctionComponent, useState } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, SearchIcon, ShoppingBagIcon } from '@heroicons/react/solid';
import Link from 'next/link';

import { navigation } from '@/mock-data/navidagion';
import classNames from '@/utils/classnames';

import ThemeSwitcher from '../ui/theme-switcher';
import MobileMenu from './mobile-menu';

type HeaderProps = {
  setSelectedTheme: (val: string) => void;
  theme: string;
};

const Header: FunctionComponent<HeaderProps> = ({
  theme,
  setSelectedTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <>
      <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      <header className="relative z-30 bg-background">
        <nav
          aria-label="Top"
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        >
          <div className="border-b border-border-color">
            <div className="flex items-center h-16">
              <button
                type="button"
                className="p-2 rounded-md lg:hidden text-on-background bg-background"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="flex ml-4 lg:ml-0">
                <Link href="/">
                  <a>
                    <span className="sr-only">Workflow</span>
                    <img
                      className="w-auto h-8"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
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
                      {({ open }) => (
                        <>
                          <div className="flex relative">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-primary text-primary'
                                  : 'border-transparent text-on-background hover:text-opacity-80',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                              )}
                            >
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
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
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
                                          className="group relative text-base sm:text-sm"
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
                                            className="mt-1"
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
                                            className="font-medium text-secondary"
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
                                                  className="hover:text-opacity-80"
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
                      className="flex items-center text-sm font-medium text-on-background hover:text-opacity-80"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="flex items-center ml-auto">
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-on-background hover:text-opacity-80"
                  >
                    Sign in
                  </a>
                  <span className="w-px h-6 bg-background" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-on-background hover:text-opacity-80"
                  >
                    Create account
                  </a>
                </div>

                <div className="hidden lg:flex lg:ml-8">
                  <ThemeSwitcher
                    isDark={theme === 'dark'}
                    switchTheme={setSelectedTheme}
                  />
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a
                    href="#"
                    className="p-2 text-on-background hover:text-opacity-80"
                  >
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Cart */}
                <div className="flow-root ml-4 lg:ml-6">
                  <a href="#" className="group flex items-center p-2 -m-2">
                    <ShoppingBagIcon
                      className="shrink-0 w-6 h-6 text-on-background group-hover:text-opacity-80"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-on-background group-hover:text-opacity-80">
                      0
                    </span>
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
