import logo from './logo.svg';
import './App.css';

import i18n from "i18next";
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  const handleChangeLanguage = () => {
    if (i18n.language == "th") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("th");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('Welcome to React')}
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => { handleChangeLanguage() }}>
          13
        </a>
      </header>
    </div>
  );
}

export default App;
