import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next"
        }
    },
    th: {
        translation: {
            "Welcome to React": "สวัสดี รีแอค และรีแอค-ไอสิบแปดเน็ก"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "th",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;