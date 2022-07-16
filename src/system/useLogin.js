import { useState } from 'react';

function useLogin() {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = (app) => {
    switch(app){
        case 'facebook':
            setIsLogin(true);
            break;
        case 'google':
            setIsLogin(true);
            break;
        case 'twitter':
            setIsLogin(true);
            break;
        case 'github':
            setIsLogin(true);
            break;
        case 'logout':
            setIsLogin(false);
            break;
        default:
            break;
    }
    setIsLogin(!isLogin);
    alert(isLogin ? 'Signed out' : 'Signed in');
  };

  return [isLogin, handleLogin];
}

export default useLogin;
