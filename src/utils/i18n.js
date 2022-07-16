import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import HomeTrans from '../userPages/home/HomeTrans';
import BookingTrans from '../userPages/booking/BookingTrans';
import NoPageTrans from '../userPages/nopage/NoPageTrans';
import QueueTrans from '../userPages/queue/QueueTrans';
import MemberTrans from '../userPages/member/MemberTrans';
import ServicesTrans from '../userPages/services/ServicesTrans';
import indexTrans from '../navbar/NavbarTrans';

const resources = {
  en: {
    translation: {
      ...indexTrans.en,
      ...HomeTrans.en,
      ...BookingTrans.en,
      ...NoPageTrans.en,
      ...QueueTrans.en,
      ...MemberTrans.en,
      ...ServicesTrans.en,
    },
  },
  th: {
    translation: {
      ...indexTrans.th,
      ...HomeTrans.th,
      ...BookingTrans.th,
      ...NoPageTrans.th,
      ...QueueTrans.th,
      ...MemberTrans.th,
      ...ServicesTrans.th,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') ?? 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
