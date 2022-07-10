import React from "react";
import "./Home.css";
import Banner from "./conponents/Banner";

import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* <h1 >{t('home')}</h1> */}
      <Banner />
    </>
  );
}

export default Home;
