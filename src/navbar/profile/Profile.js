import { useTranslation } from 'react-i18next';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { UserIcon, LoginIcon, LogoutIcon } from '@heroicons/react/outline';

function Profile(props) {
  const { t } = useTranslation();
  const { user } = props.data;

  const handleLogout = () => {
    user.handleLogin();
    props.handleShowProfile(false);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="max-w-xs bg-transparent  rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-red-600 hover:ring-red-600 hover:ring-2  ">
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-full"
          src={user.profile.imageUrl}
          alt=""
        />
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hover:bg-zinc-200">
          <Menu.Item>
            <div className="   hover:bg-red-100 rounded-t items-center text-center border-b-2 border-zinc-400">
              <UserIcon className="pt-4 w-10 mx-auto" />
              <span className="mt-2 font-bold block px-2 text-sm text-center  text-zinc-800">
                {user.profile.name} ({user.profile.rank})
              </span>
              <span className="mb-2 block text-xs text-center  text-zinc-700">
                {user.profile.position}
              </span>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="flex flex-row hover:bg-red-600 hover:text-white rounded-b">
              {user.isLogin ? (
                <LogoutIcon className="ml-2 pl-1 basis-1/6" />
              ) : (
                <LoginIcon className="ml-2 pl-1 basis-1/6" />
              )}
              <button
                className="hover:text-white block px-2 py-2 text-sm  text-zinc-700 basis-5/6"
                onClick={handleLogout}
              >
                {user.isLogin ? t('usernav.logout') : t('usernav.login')}
              </button>
            </div>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Profile;
