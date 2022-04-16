import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className=' flex justify-center'>
        <div className=' w-full lg:w-[1024px] p-2 pt-0 overflow-hidden'>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
