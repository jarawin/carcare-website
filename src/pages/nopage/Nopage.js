import React from 'react'
import "./NoPage.module.css"

import { useTranslation } from "react-i18next";

function NoPage() {
  const { t } = useTranslation();

  return (
    <div>{t('nopage')}</div>
  )
}

export default NoPage