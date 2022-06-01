import { Layout } from '../components/Site';
import '../styles/globals.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import '@fontsource/inter';
import '@fontsource/aleo';
import '@fontsource/noto-sans-sc';
import '@fontsource/noto-serif-sc';
import '@fontsource/noto-sans-tc';
import '@fontsource/noto-serif-tc';
import '@fontsource/jetbrains-mono';

export const ThemeContext = React.createContext();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <SessionProvider session={session}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
