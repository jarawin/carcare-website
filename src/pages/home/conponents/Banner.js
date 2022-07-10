import React from "react";
import { useTranslation } from "react-i18next";
import "./Banner.css";

function Banner() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="topic-banner">{t('header')}</h1>
      
      <p>{t('')}</p>
    </>
  );
}

export default Banner;
