import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { CogIcon } from '@heroicons/react/outline';

function Setting(props) {
  const setting = props.setting;

  return (
    <Menu as="div" className=" relative  hidden md:block">
      <Menu.Button className="max-w-xs  rounded-full flex text-sm">
        <div
          type="button"
          className="dark:bg-zinc-800 text-zinc-700 hover:text-red-600  dark:text-white dark:hover:text-red-600 rounded-full"
        >
          <span className="sr-only">View setting</span>
          <CogIcon className="h-6 w-6" aria-hidden="true" />
        </div>
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
          {setting.map((item) => (
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
