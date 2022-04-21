import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className=' flex justify-center text-rich-default'>
        <div className=' w-full md:w-[768px] p-4 pt-0 overflow-hidden'>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
