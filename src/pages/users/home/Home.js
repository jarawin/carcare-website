import { useTranslation } from 'react-i18next';
import Banner from './Banner';
import { useSelector } from 'react-redux';

function Home(p) {
  const { t } = useTranslation();

  const login = useSelector((state) => state.login);

  return <div className="dark:text-white">{JSON.stringify(login)}</div>;
}

export default Home;
