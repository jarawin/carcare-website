import React, { useState } from "react";
import { Link } from "react-router-dom";

import i18n from "i18next";
import { useTranslation } from "react-i18next";

import { FaCar } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import "./Navbar.css";

function Navbar() {
  const { t } = useTranslation();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleChangeLanguage = () => {
    if (i18n.language == "th") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("th");
    }
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <a href="/">
              <FaCar className="facar-icon" />
              &nbsp;{t("carcare")}
            </a>
          </div>

          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link">
              <Link onClick={closeMobileMenu} to="/">
                {t("home")}
              </Link>
            </li>
            <li className="menu-link">
              <Link onClick={closeMobileMenu} to="/menu">
                {t("menu")}
              </Link>
            </li>
            <li className="menu-link">
              <Link onClick={closeMobileMenu} to="/booking">
                {t("booking")}
              </Link>
            </li>
            <hr className={click ? "vl-out" : "vl-in"} />
            <li className="menu-link">
              <Link onClick={closeMobileMenu} to="/login">
                {t("login")}
              </Link>
            </li>
            <li className="menu-link">
              <Link onClick={closeMobileMenu} to="/register">
                {t("register")}
              </Link>
            </li>
          </ul>

          <div className="langChanger">
              <GrLanguage onClick={handleChangeLanguage}/>
          </div>

          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
