import './utils/i18n';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './utils/reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './userPages/home/Home';
import Booking from './userPages/booking/Booking';
import NoPage from './userPages/nopage/NoPage';
import Queue from './userPages/queue/Queue';
import Member from './userPages/member/Member';
import Services from './userPages/services/Services';

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="queue" element={<Queue />} />
          <Route path="member" element={<Member />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
reportWebVitals();
