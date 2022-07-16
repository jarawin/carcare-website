import React from 'react';

import { useTranslation } from 'react-i18next';

function NoPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-zinc-600 w-full h-96 pt-4 text-center">
      {t('nopage')}
    </div>
  );
}

export default NoPage;
