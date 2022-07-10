import React from "react";
import "./Home.css";

import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return <div>{t('home')}</div>;
}

export default Home;
