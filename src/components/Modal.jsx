import React, { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AppContext } from '../Context';
import '../styles/Modal.scss';

const Modal = ({ title, children }) => {
  const {
    state: { showModal },
    dispatch
  } = useContext(AppContext);

  const closeModal = () => {
    dispatch({ type: 'SET_MODAL_STATE' });
  };

  return (
    <>
      <>
        <div className={`modal ${showModal ? 'show' : ''}`}>
          <div className='flex h-full flex-col'>
            <div className='flex justify-between p-12'>
              <h1 className='text-3xl uppercase'>{title}</h1>
              <AiOutlineClose
                onClick={closeModal}
                className='cursor-pointer text-2xl'
              />
            </div>

            <div className='flex-1 basis-2 self-center px-12 pb-12'>
              {children}
            </div>
          </div>
        </div>
        {showModal && <div className='backdrop'></div>}
      </>
    </>
  );
};

export default Modal;
