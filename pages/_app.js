import { Layout } from '../components/Site';
import '../styles/globals.css';
import React, { useState } from 'react';
import { useEffect } from 'react';

export const ThemeContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem('theme', 'light')
    }
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
