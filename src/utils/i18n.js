import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import HomeTrans from "../pages/home/HomeTrans";
import MenuTrans from "../pages/menu/MenuTrans";
import BookingTrans from "../pages/booking/BookingTrans";
import LoginTrans from "../pages/login/LoginTrans";
import RegisterTrans from "../pages/register/RegisterTrans";
import NoPageTrans from "../pages/nopage/NoPageTrans";

import indexTrans from "../navbar/NavbarTrans";



const resources = {
    en: {
        translation: {
            ...indexTrans.en,
            ...HomeTrans.en,
            ...MenuTrans.en,
            ...BookingTrans.en,
            ...LoginTrans.en,
            ...RegisterTrans.en,
            ...NoPageTrans.en,
        },
    },
    th: {
        translation: {
            ...indexTrans.th,
            ...HomeTrans.th,
            ...MenuTrans.th,
            ...BookingTrans.th,
            ...LoginTrans.th,
            ...RegisterTrans.th,
            ...NoPageTrans.th,
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;