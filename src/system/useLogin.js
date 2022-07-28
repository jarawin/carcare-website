import { useState } from 'react';
// import LineLiff from './login/LineLiff';

function useLogin() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (app) => {
    switch (app) {
      case 'Facebook':
        setIsLogin(true);
        break;
      case 'Google':
        setIsLogin(true);
        break;
      case 'Line':
        // LineLiff.login();
        // console.log(LineLiff.getUserData());
        break;
    }
    setIsLogin(!isLogin);
    alert(isLogin ? 'Signed out' : 'Signed in');
  };

  return [isLogin, handleLogin];
}

export default useLogin;
