import { useState, useEffect } from 'react';

function useDarkMode() {
  const defaultTheme = 'light';
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || defaultTheme
  );

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  // detect theme change from system
  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const colorScheme = event.matches ? 'dark' : 'light';
        console.log(colorScheme);
        setTheme(colorScheme);
      });
  }, []);

  // save theme to localStorage
  useEffect(() => {
    const olderTheme = theme === 'light' ? 'dark' : 'light';
    const root = window.document.documentElement;

    root.classList.remove(olderTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, handleTheme];
}

export default useDarkMode;
