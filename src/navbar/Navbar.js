import classNames from '../utils/classNames';
import useDarkMode from '../system/useDarkMode';
import useLogin from '../system/useLogin';

import Profile from './profile/Profile';
import { useTranslation } from 'react-i18next';

import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Banner from './banner/Banner';
import Setting from './setting/Setting';

import Login from './login/Login';

export default function Example() {
  const { t } = useTranslation();

  const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc:
              'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt:
              'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '#',
            imageSrc:
              'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt:
              'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', href: '#' },
              { name: 'Dresses', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Denim', href: '#' },
              { name: 'Sweaters', href: '#' },
              { name: 'T-Shirts', href: '#' },
              { name: 'Jackets', href: '#' },
              { name: 'Activewear', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Significant Other', href: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc:
              'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt:
              'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            href: '#',
            imageSrc:
              'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Sweaters', href: '#' },
              { name: 'T-Shirts', href: '#' },
              { name: 'Jackets', href: '#' },
              { name: 'Activewear', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: t('menu.home'), href: '/', id: 'home' },
      { name: t('menu.services'), href: '/services', id: 'services' },
      { name: t('menu.booking'), href: '/booking', id: 'booking' },
      { name: t('menu.member'), href: '/member', id: 'member' },
      { name: t('menu.queue'), href: '/queue', id: 'queue' },
    ],
  };

  const [isLogin, handleLogin] = useLogin();

  const [colorTheme, setTheme] = useDarkMode();
  const setDarkMode = () => setTheme(colorTheme);

  const [open, setOpen] = useState(false);
  const [pageActive, setPageActive] = useState('home');

  const handleClickPage = (e) => {
    const id = e.currentTarget.id;
    setPageActive(id);
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    const pageActiveIndex = pathname.split('/').pop();
    if (pageActiveIndex) {
      setPageActive(pageActiveIndex === '' ? 'home' : pageActiveIndex);
    }
  }, []);

  return (
    <div className="">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white dark:bg-zinc-800 shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400 dark:text-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex px-4 space-x-8">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'text-red-600 border-red-600'
                                : 'text-gray-900 dark:text-slate-300 border-transparent',
                              'flex-1 whitespace-nowrap  py-4 px-1 border-b-2 text-base font-medium'
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
                        className="pt-10 pb-8 px-4 space-y-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-center object-cover"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900 dark:text-slate-400"
                              >
                                <span
                                  className="absolute z-10 inset-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p
                                aria-hidden="true"
                                className="mt-1 dark:text-slate-200"
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
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 p-2 block text-gray-500"
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

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 p-2 block font-medium text-gray-900"
                      onClick={setDarkMode}
                    >
                      Dark Mode
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 p-2 flex items-center">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* ======= PC ======= */}
      <header className="relative ">
        <Banner />
        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-900 shadow-lg rounded"
        >
          <div className="h-16 flex items-center">
            <button
              type="button"
              className="bg-white dark:bg-white p-2 rounded-md text-gray-400 dark:text-slate-800 md:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="flex lg:ml-4">
              <a href="#">
                <span className="sr-only">car care</span>
                <h1 className="ml-2 mr-5 h-8 text-2xl font-serif font-extrabold w-10 text-zinc-700 dark:text-white">
                  TCC
                </h1>
              </a>
            </div>

            {/* Flyout menus */}
            <Popover.Group className="hidden md:ml-5 md:block md:self-stretch">
              <div className="h-full flex md:space-x-6 lg:space-x-8">
                {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    onClick={handleClickPage}
                    className={classNames(
                      page.id == pageActive
                        ? 'text-red-600 dark:text-red-600 dark:hover:text-red-800 font-bold border-b-2'
                        : 'text-gray-700 dark:text-white hover:text-gray-800 dark:hover:text-red-600',
                      'flex items-center text-sm font-medium  border-red-600'
                    )}
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </Popover.Group>

            <div className="ml-auto flex items-center">
              {isLogin ? (
                <div className="flex items-center mx-3">
                  <Profile login={[isLogin, handleLogin]} />
                  <span
                    className="ml-4 mr-3 h-6 w-px bg-zinc-200"
                    aria-hidden="true"
                  />
                  <Setting login={[isLogin, handleLogin]} />
                </div>
              ) : (
                <div className="flex items-center mx-3">
                  <Login login={[isLogin, handleLogin]} />
                  <span
                    className="ml-4 mr-3 h-6 w-px bg-zinc-200"
                    aria-hidden="true"
                  />
                  <Setting login={[isLogin, handleLogin]} />
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
