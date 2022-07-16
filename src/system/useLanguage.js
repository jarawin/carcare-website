import i18next from 'i18next';

function useLanguage() {
  const language = i18next.language;

  const handleLanguage = () => {
    if (i18next.language === 'en') {
      i18next.changeLanguage('th');
      localStorage.setItem('language', 'th');
    } else {
      i18next.changeLanguage('en');
      localStorage.setItem('language', 'en');
    }
  };

  return [language, handleLanguage];
}

export default useLanguage;
