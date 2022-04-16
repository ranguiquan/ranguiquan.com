import Link from 'next/link';

const Header = () => {
  const routes = ['dev', 'dev', 'dev'];

  return (
    <header className='sticky top-0 z-10 h-16 bg-background/80 backdrop-blur-md '>
      <div className='m-auto  w-full lg:w-[1024px] flex justify-between items-center h-full text-headline'>
        <Link href={'/'} passHref>
          <div className=' cursor-pointer'>
            <span className=' font-bold text-lg ml-2'>🚧dev.io</span>
          </div>
        </Link>
        <div>
          <ul className='flex space-x-2 mr-2'>
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
