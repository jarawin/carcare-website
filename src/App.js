import { Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/users/home/Home';
import Booking from './pages/users/booking/Booking';
import NoPage from './pages/users/nopage/NoPage';
import Queue from './pages/users/queue/Queue';
import Member from './pages/users/member/Member';
import Services from './pages/users/services/Services';

const AppUser = () => {
  return (
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
  );
};

const AppAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export { AppUser, AppAdmin };
