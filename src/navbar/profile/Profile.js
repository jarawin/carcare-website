import './Profile.module.css';
import classNames from '../../utils/classNames';
import useDarkMode from '../../utils/useDarkMode';

import i18next, { t } from 'i18next';

import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  BellIcon,
  MenuIcon,
  XIcon,
  ShoppingBagIcon,
} from '@heroicons/react/outline';

function Profile() {
  const [isLogin, setIsLogin] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  const setDarkMode = () => setTheme(colorTheme);

  const setLanguage = () => {
    i18next.changeLanguage(i18next.language === 'en' ? 'th' : 'en');
  };

  const Login = () => {
    if (isLogin) {
      alert('Signed out');
      setIsLogin(false);
    } else {
      alert('Signed in');
      setIsLogin(true);
    }
  };

  const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };

  const userNavigation = [
    {
      name:
        i18next.language === 'en'
          ? t('usernav.languageTH')
          : t('usernav.languageEN'),
      onClick: setLanguage,
    },
    {
      name:
        colorTheme === 'light' ? t('usernav.lightmode') : t('usernav.darkmode'),
      onClick: setDarkMode,
    },
    {
      name: isLogin ? t('usernav.logout') : t('usernav.login'),
      onClick: Login,
    },
  ];

  return (
    <div className="ml-auto flex items-center mr-3">
      {!isLogin ? (
        <div className="flex  lg:items-center lg:justify-end lg:space-x-6">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-white dark:hover:text-indigo-600"
            onClick={Login}
          >
            Sign in
          </a>
        </div>
      ) : (
        <div className="block">
          <div className="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              className="dark:bg-gray-800 p-1 rounded-full text-gray-400 dark:hover:text-white dark:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.imageUrl}
                    alt=""
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          onClick={item.onClick}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            <span className="ml-5 h-6 w-px bg-gray-200" aria-hidden="true" />

            <div className="ml-4 flow-root lg:ml-4">
              <a href="#" className="group -m-2 p-2 flex items-center">
                <ShoppingBagIcon
                  className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-white"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-500 group-hover:text-gray-800 dark:group-hover:text-white">
                  0
                </span>
                <span className="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
