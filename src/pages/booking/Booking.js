import React from 'react'
import "./Booking.css"

import { useTranslation } from "react-i18next";

  
function Booking() {
  const { t } = useTranslation();

  return (
    <div>{t('booking')}</div>
  )
}

export default Booking