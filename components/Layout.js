import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className=' flex justify-center'>
        <div className=' w-full lg:w-[1024px] p-2'>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
