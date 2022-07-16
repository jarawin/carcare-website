import React from 'react';
import { useTranslation } from 'react-i18next';

function Member() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto shadow-md bg-zinc-100 dark:bg-zinc-600 w-full h-96 pt-4 text-center">
      {t('menu.member')}
    </div>
  );
}

export default Member;
