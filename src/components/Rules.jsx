import React from 'react';
import Modal from './Modal';
import rulesImg from '../assets/image-rules-bonus.svg';

const Rules = () => {
  return (
    <Modal title='Rules'>
      <img src={rulesImg} alt='Rules' />
    </Modal>
  );
};

export default Rules;
