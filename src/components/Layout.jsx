import { useContext } from 'react';
import Header from './Header';
import Result from './Result';
import Rules from './Rules';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { AppContext } from '../Context';

const Layout = ({ children }) => {
  const { dispatch } = useContext(AppContext);

  const reset = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  return (
    <>
      <Header />
      <div className='w-full  max-w-3xl flex-auto'>
        <Outlet />
      </div>
      <Result reset={reset} />
      <Rules />
      <Footer />
    </>
  );
};

export default Layout;
