import Link from 'next/link';

const Header = () => {
  const routes = ['dev', 'dev', 'dev'];

  return (
    <header className='flex justify-center sticky top-0 z-10 h-16 bg-background/80 backdrop-blur-md '>
      <div className='m-auto  w-full md:w-[768px] flex justify-between items-center h-full text-headline pl-4 pr-4'>
        <Link href={'/'} passHref>
          <div className=' cursor-pointer'>
            <span className=' font-bold text-lg'>🚧dev.io</span>
          </div>
        </Link>
        <div>
          <ul className='flex space-x-2'>
            {routes.map((content, index) => {
              return <li key={index}>{content}</li>;
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
