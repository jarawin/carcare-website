import useDarkMode from '../../system/useDarkMode';
import useLanguage from '../../system/useLanguage';

import { useState } from 'react';

import { t } from 'i18next';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  SunIcon,
  CogIcon,
  MoonIcon,
  TranslateIcon,
  LockClosedIcon,
  LockOpenIcon,
} from '@heroicons/react/outline';

function Setting(props) {
  const [isLogin, handleLogin] = props.login;
  const [theme, handleTheme] = useDarkMode();
  const [language, handleLanguage] = useLanguage();
  const [isAdminMode, setIsAdminMode] = useState(false);

  const [isAdmin, setIsAdmin] = useState(true);

  const handleAdminMode = () => {
    // check is loged in and is admin
    if (isLogin && isAdmin) {
      alert(
        isAdminMode
          ? 'Admin mode is deactived now.'
          : 'Admin mode is actived now.'
      );

      setIsAdminMode(!isAdminMode);
    } else {
      alert('You need to login as admin to use this feature.');
    }
  };

  const settingNavigation = [
    {
      name:
        language === 'en' ? t('usernav.languageTH') : t('usernav.languageEN'),
      onClick: handleLanguage,
      icon: TranslateIcon,
    },
    {
      name: theme === 'dark' ? t('usernav.lightmode') : t('usernav.darkmode'),
      onClick: handleTheme,
      icon: theme === 'dark' ? SunIcon : MoonIcon,
    },
  ];

  // check login and permission
  if (isLogin && isAdmin) {
    settingNavigation.push({
      name: isAdminMode ? t('usernav.usermode') : t('usernav.adminmode'),
      onClick: handleAdminMode,
      icon: isAdminMode ? LockOpenIcon : LockClosedIcon,
    });
  }

  return (
    <Menu as="div" className=" relative">
      <Menu.Button className="max-w-xs  rounded-full flex text-sm">
        <button
          type="button"
          className="dark:bg-zinc-800 text-zinc-700 hover:text-red-600  dark:text-white dark:hover:text-red-600 rounded-full"
        >
          <span className="sr-only">View setting</span>
          <CogIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right mt-1 absolute right-0 w-36 rounded-md shadow-lg bg-white  focus:outline-none ring-1 ring-black ring-opacity-5 ">
          {settingNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {
                <div className="flex flex-row hover:bg-red-600 hover:text-white rounded">
                  <item.icon className="ml-2 pl-1 basis-1/6" />
                  <h4
                    onClick={item.onClick}
                    className="hover:text-white block px-2 py-2 text-sm  text-zinc-700 basis-5/6"
                  >
                    {item.name}
                  </h4>
                </div>
              }
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Setting;
