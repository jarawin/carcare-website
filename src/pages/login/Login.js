import React from 'react'
import "./Login.css"

import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();

  return (
    <div>{t('login')}</div>
  )
}

export default Login
