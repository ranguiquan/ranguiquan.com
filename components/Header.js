import Link from 'next/link';
import config from '../site.config';
const { siteName, nav } = config;

const Header = () => {
  return (
    <header className='flex justify-center sticky top-0 z-10 h-16 bg-background/80 backdrop-blur-md '>
      <nav className='m-auto  w-full md:w-[768px] flex justify-between items-center h-full text-headline pl-4 pr-4'>
        <Link href={'/'} passHref>
          <div className=' cursor-pointer'>
            <span>🚧</span>
            <span className='ml-2 font-bold text-lg'>{siteName}</span>
          </div>
        </Link>
        <div>
          <ul className='flex space-x-2'>
            {nav.map((item) => {
              return (
                <Link href={`/${item.name}`} key={item.id} passHref>
                  <li key={item.id} className='cursor-pointer border-b-2 hover:border-transparent transition duration-100 font-semibold'>{item.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
