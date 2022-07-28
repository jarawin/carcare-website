import classNames from '../utils/classNames';

import useDarkMode from '../system/useDarkMode';
import useLanguage from '../system/useLanguage';

import { useTranslation } from 'react-i18next';

import {
  SunIcon,
  MoonIcon,
  TranslateIcon,
  LockClosedIcon,
  LockOpenIcon,
} from '@heroicons/react/outline';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { useDispatch, useSelector } from 'react-redux';
import {
  setAdminMode,
  setLanguage,
  setTheme,
  setActivePage,
} from '../slices/pageSlice';

import Profile from './profile/Profile';
import Banner from './banner/Banner';
import Setting from './setting/Setting';
import Login from './login/Login';
import checkIsAdmin from '../utils/isAdmin';

function Navbar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // const position = useSelector((state) => state.user.profile.position);
  const position = 'manager';
  const isAdmin = checkIsAdmin(position);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const theme = useSelector((state) => state.page.theme);
  const language = useSelector((state) => state.page.language);
  const activePage = useSelector((state) => state.page.activePage);
  const isAdminMode = useSelector((state) => state.page.isAdminMode);

  const pages = [
    { name: 'home', href: '/' },
    { name: 'services', href: '/services' },
    { name: 'booking', href: '/booking' },
    { name: 'member', href: '/member' },
    { name: 'queue', href: '/queue' },
  ];

  const defaultSetting = [
    {
      name:
        language === 'en' ? t('usernav.languageTH') : t('usernav.languageEN'),
      onClick: dispatch(setLanguage('th')),
      icon: TranslateIcon,
    },
    {
      name: theme === 'dark' ? t('usernav.lightmode') : t('usernav.darkmode'),
      onClick: dispatch(setTheme('dark')),
      icon: theme === 'dark' ? SunIcon : MoonIcon,
    },
    {
      name: isAdminMode ? t('usernav.usermode') : t('usernav.adminmode'),
      onClick: dispatch(setAdminMode()),
      icon: isAdminMode ? LockOpenIcon : LockClosedIcon,
    },
  ];

  const [setting, setSetting] = useState(defaultSetting.slice(0, 2));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isLoggedIn && isAdmin) {
      setSetting(defaultSetting);
    } else {
      setSetting(defaultSetting.slice(0, 2));
    }
  });

  // set active page
  useEffect(() => {
    const pathname = window.location.pathname;
    const lastIndexPath = pathname.split('/').pop();
    dispatch(setActivePage(lastIndexPath ? lastIndexPath : 'home'));
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
              <Dialog.Panel className="relative max-w-[50%] w-full bg-white dark:bg-zinc-800 shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="ml-4 p-2 rounded-md inline-flex items-center justify-center text-gray-400 dark:text-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="px-4 space-y-2">
                  {pages.map((page, idx) => (
                    <div key={idx} className="flow-root">
                      <a
                        href={page.href}
                        className="p-2 block font-medium text-zinc-900 dark:text-white"
                      >
                        {t(`menu.${page.name}`)}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-4 py-4 space-y-2 border-t border-zinc-800 dark:border-white px-2 mx-2">
                  {setting.map((item) => (
                    <div key={item.name} className="flow-root">
                      <a
                        onClick={item.onClick}
                        className="p-2 block font-medium text-zinc-900 dark:text-white cursor-pointer"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* ======= PC ======= */}
      <header className="relative">
        <Banner />
        <nav
          aria-label="Top"
          className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-900 shadow-lg rounded"
        >
          <div className="h-16 flex items-center max-w-7xl mx-auto">
            <button
              type="button"
              className="mr-2 bg-white  dark:bg-white p-2 rounded-md text-gray-400 dark:text-black md:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="flex lg:ml-4">
              <a href="/">
                <span className="sr-only">car care</span>
                <h1 className="ml-2 mr-5 h-8 text-2xl font-serif font-extrabold w-10 text-zinc-700 dark:text-white">
                  TCC
                </h1>
              </a>
            </div>

            {/* Flyout menus */}
            <Popover.Group className="hidden md:ml-5 md:block md:self-stretch">
              <div className="h-full flex md:space-x-6 lg:space-x-8">
                {pages.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    className={classNames(
                      p.id == activePage
                        ? 'text-red-600 dark:text-red-600 dark:hover:text-red-800 font-bold border-b-2'
                        : 'text-gray-700 dark:text-white hover:text-gray-800 dark:hover:text-red-600',
                      'flex items-center text-sm font-medium  border-red-600'
                    )}
                  >
                    {p.name}
                  </a>
                ))}
              </div>
            </Popover.Group>

            <div className="ml-auto flex items-center">
              <div className="flex items-center mx-3">
                {isLoggedIn ? <Profile /> : <Login />}
                <span className="ml-4 mr-3 h-6 w-px bg-zinc-200 hidden md:block" />
                <Setting setting={setting} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
