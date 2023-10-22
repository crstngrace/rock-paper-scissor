import logoImg from '../assets/logo.svg';
import logoBonusImg from '../assets/logo-bonus.svg';
import { useContext, useEffect } from 'react';
import { AppContext } from '../Context';
import { useNavigate } from 'react-router-dom';

const Mode = () => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleMode = (mode) => {
    dispatch({ type: 'SET_MODE', payload: { mode: mode } });
    navigate('/');
  };

  return (
    <div className='flex max-w-xl flex-col text-center text-white md:h-[500px] md:w-9/12'>
      <h1 className='mb-10 text-3xl md:text-5xl'>Choose Mode</h1>
      <div className='mx-auto flex justify-between gap-2 md:gap-10 '>
        <div
          className='relative flex-1 cursor-pointer rounded border px-5 py-10 shadow-2xl hover:scale-105 hover:border-b-4 md:px-10 md:py-20'
          onClick={() => handleMode(1)}
        >
          <h1 className='mb-5 text-3xl md:text-4xl'>Normal</h1>
          <p className='max-md:text-xs'>Rock, Paper, Scissors</p>
        </div>
        <div
          className='relative flex-1 cursor-pointer rounded border px-5 py-10 shadow-2xl hover:scale-105 hover:border-b-4 md:px-10 md:py-20'
          onClick={() => handleMode(2)}
        >
          <h1 className='mb-5 text-3xl md:text-4xl'>Difficult</h1>
          <p className='mb-1 max-md:text-xs'>
            Rock, Paper, Scissors <br />
          </p>
          <small className='text-[10px]'>Plus Lizard & Spock</small>
        </div>
      </div>
    </div>
  );
};

export default Mode;
