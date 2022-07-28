import { createSlice } from '@reduxjs/toolkit';
// import useDarkMode from '../system/useDarkMode';
// import useLanguage from '../system/useLanguage';

// const [theme, handleTheme] = useDarkMode();
// const [language, handleLanguage] = useLanguage();

const initialState = {
  isAdminMode: false,
  activePage: 'home',
  theme: 'light',
  language: 'en',
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setAdminMode(state, action) {
      state.isAdminMode = action.payload.isAdminMode || !state.isAdminMode;
    },
    setActivePage(state, action) {
      state.activePage = action.payload.activePage || 'home';
    },
    setTheme(state, action) {
      const newTheme =
        action.payload.theme || state.theme === 'light' ? 'dark' : 'light';
      state.theme = newTheme;
      //  handleTheme(newTheme);
    },
    setLanguage(state, action) {
      const newLanguage =
        action.payload.language || state.language === 'en' ? 'th' : 'en';
      state.language = newLanguage;
      //  handleLanguage(newLanguage);
    },
  },
});

// Actions creators
export const { setActivePage, setAdminMode, setTheme, setLanguage } =
  pageSlice.actions;

// Reducer
export default pageSlice.reducer;
