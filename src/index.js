import './utils/i18n';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './utils/reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';
import Menu from './pages/menu/Menu';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NoPage from './pages/nopage/NoPage';

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="booking" element={<Booking />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
reportWebVitals();
