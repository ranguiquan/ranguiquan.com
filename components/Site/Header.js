import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../pages/_app';
import config from '../../site.config';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const { siteName, nav } = config;

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
    <header
      className='flex justify-center sticky top-0 z-10 h-16 bg-white/80 dark:bg-black/80
     backdrop-blur-md '>
      <nav className='m-auto  w-full md:w-[768px] flex justify-between items-center h-fullttext-rich-default dark:text-rich-default-dark  pl-4 pr-4'>
        <Link href={'/'} passHref>
          <div className=' cursor-pointer'>
            <span>🚧</span>
            <span className='ml-2 font-bold text-lg'>{siteName}</span>
          </div>
        </Link>
        <div className='flex space-x-4'>
          <button
            onClick={() => {
              setTheme((prev) => {
                const toggled = prev === 'dark' ? 'light' : 'dark';
                localStorage.setItem('theme', toggled);
                return toggled;
              });
            }}>
            {theme === 'dark' ? (
              <MdLightMode size='1.5em' />
            ) : (
              <MdDarkMode size='1.5em' />
            )}
          </button>
          <ul className='flex space-x-4'>
            {nav.slice(1, nav.length).map((item) => {
              switch (item.type) {
                case 'link':
                  return (
                    // open in a new tab
                    <a
                      href={item.id}
                      key={item.id}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <li
                        key={item.id}
                        className='cursor-pointer border-b-2 hover:border-transparent transition duration-100 font-semibold'>
                        {item.name}
                      </li>
                    </a>
                  );
                default:
                  return (
                    <Link href={`/${item.name}`} key={item.id} passHref>
                      <li
                        key={item.id}
                        className='cursor-pointer border-b-2 hover:border-transparent transition duration-100 font-semibold'>
                        {item.name}
                      </li>
                    </Link>
                  );
              }
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};
