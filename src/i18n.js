import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: {
            "carcare": "Car Care",
            "booking": "Booking",
            "home": "Home",
            "menu": "Menu",
            "login": "Login",
            "register": "Register",
            "nopage": "No Page",
            "header": "Header",
        }
    },
    th: {
        translation: {
            "carcare": "ดูแลรถยนต์",
            "booking": "จองคิวออนไลน์",
            "home": "หน้าหลัก",
            "menu": "เมนู",
            "login": "เข้าสู่ระบบ",
            "register": "สมัครสมาชิก",
            "nopage": "ไม่มีหน้านี้",
            "header": "ส่วนหัว",
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