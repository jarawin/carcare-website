import './contents/i18n/i18n';
import { AppUser } from './App';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './utils/reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import loginSlice from './slices/userSlice';
import pageSlice from './slices/pageSlice';

const store = configureStore({
  reducer: { login: loginSlice, page: pageSlice },
});

const root = createRoot(document.getElementById('root'));
const Index = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <AppUser />
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
};

root.render(<Index />);
reportWebVitals();
