import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import HomeTrans from './HomeTrans';
import BookingTrans from './BookingTrans';
import NoPageTrans from './NoPageTrans';
import QueueTrans from '../../pages/users/queue/QueueTrans';
import MemberTrans from './MemberTrans';
import ServicesTrans from './ServicesTrans';
import indexTrans from './NavbarTrans';

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
