import './Banner.module.css';
import React, { useState } from 'react';

import classNames from '../../utils/classNames';
import { useTranslation } from 'react-i18next';

import { XIcon } from '@heroicons/react/outline';

function Banner(props) {
  const { t } = useTranslation();
  const [closed, setClosed] = useState(props?.show ?? false);

  return (
    <div
      className={classNames(
        closed ? 'hidden' : 'flex',
        'items-center justify-center bg-indigo-600 '
      )}
    >
      <button
        type="button"
        className="absolute rounded-md text-gray-400 dark:text-white right-3"
        onClick={() => setClosed(true)}
      >
        <span className="sr-only">Close banner</span>
        <XIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      <p className=" h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
        {t('banner.title')}
      </p>
    </div>
  );
}

export default Banner;
