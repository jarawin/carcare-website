import React from 'react'
import "./Register.module.css"

import { useTranslation } from "react-i18next";

function Register() {
  const { t } = useTranslation();

  return (
    <div>{t('register')}</div>
  )
}

export default Register