import React, { useContext } from 'react';
import logoImg from '../assets/logo.svg';
import { AppContext } from '../Context';

const Header = () => {
  const {
    state: { score }
  } = useContext(AppContext);

  return (
    <div className='flex justify-between w-full p-4 md:p-5 mb-20 border border-white border-solid rounded-xl'>
      <img
        src={logoImg}
        calt='Rock, Paper, Scissors'
        className='max-md:w-24 max-md:h-14'
      />
      <div className=' bg-white rounded py-1 md:py-4 px-5'>
        <h3 className='text-xs uppercase'>Score</h3>
        <h1 className='text-2xl md:text-5xl'>{score}</h1>
      </div>
    </div>
  );
};

export default Header;
