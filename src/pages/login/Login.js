import React from "react";
import "./Login.module.css";

import useLocalStorage from "use-local-storage";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();

  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
   <>
   <p>{t('login')}</p>
   </>
  );
}

export default Login;
