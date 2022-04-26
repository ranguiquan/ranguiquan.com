import Link from 'next/link';
import config from '../../site.config';
const { siteName, nav } = config;

export const Header = () => {
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
          <ul className='flex space-x-4'>
            {nav.slice(1, nav.length).map((item) => {
              switch (item.type) {
                case 'link':
                  return (
                    // open in a new tab
                    <a href={item.id} key={item.id} target="_blank" rel="noopener noreferrer">
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
