const Header = () => {
  const routes = ['posts', 'profile', 'about'];

  return (
    <header className='sticky h-12 bg-background shadow-sm '>
      <div className='m-auto  w-full lg:w-[1024px] flex justify-between items-center h-full text-headline'>
        <a href='#'>
          <span className=' font-bold text-lg ml-2'>RGQ.PLUS</span>
        </a>
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
