import React from 'react'
import "./Nopage.css"

import { useTranslation } from "react-i18next";

function Nopage() {
  const { t } = useTranslation();

  return (
    <div>{t('nopage')}</div>
  )
}

export default Nopage