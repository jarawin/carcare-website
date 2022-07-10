import React from 'react'
import "./Menu.css"

import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation();

  return (
    <div>{t('menu')}</div>
  )
}

export default Menu