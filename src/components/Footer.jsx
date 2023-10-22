import { useContext } from 'react';
import { AppContext } from '../Context';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const showModal = () => {
    dispatch({ type: 'SET_MODAL_STATE' });
  };

  return (
    <footer className='w-full'>
      <button
        className='max-md:center mx-auto mb-3 flex rounded-md border border-white px-10 py-1 uppercase text-white'
        onClick={showModal}
      >
        Rules
      </button>
      <div className='text-center'>
        <a href='/mode' className='border-b px-2 py-1 text-sm text-white'>
          Back to Mode Selection
        </a>
      </div>
    </footer>
  );
};

export default Footer;
