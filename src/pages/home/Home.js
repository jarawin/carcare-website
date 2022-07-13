import './Home.module.css';

import React from 'react';

import classNames from '../../utils/classNames';

import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  const [dark, setDark] = React.useState(false);
  const handleDark = () => {
    setDark(!dark);
  };

  return <div></div>;
}

export default Home;
