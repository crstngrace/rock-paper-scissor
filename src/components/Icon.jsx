import React, { useContext } from 'react';
import rockImg from '../assets/icon-rock.svg';
import paperImg from '../assets/icon-paper.svg';
import scissorImg from '../assets/icon-scissors.svg';
import spockImg from '../assets/icon-spock.svg';
import lizardImg from '../assets/icon-lizard.svg';
import '../styles/Icon.scss';
import classnames from 'classnames';

const Icon = ({ variant, title, isWinner, showBg = true, handleIconClick }) => {
  const type = {
    rock: {
      class: 'from-rock-start to-rock-stop',
      img: rockImg
    },
    paper: {
      class: 'from-paper-start to-paper-stop',
      img: paperImg
    },
    scissor: {
      class: 'from-scissor-start to-scissor-stop',
      img: scissorImg
    },
    spock: {
      class: 'from-spock-start to-spock-stop',
      img: spockImg
    },
    lizard: {
      class: 'from-lizard-start to-lizard-stop',
      img: lizardImg
    }
  };

  return (
    <div className='flex-col-center'>
      <div
        className={classnames('icon-container', {
          [type[variant] && type[variant].class]: showBg,
          'cursor-pointer': handleIconClick
        })}
        onClick={() => {
          handleIconClick(variant);
        }}
      >
        {isWinner && <div className='icon-success before after'></div>}
        <div
          className={classnames('icon-bg flex-center', {
            'bg-white': variant,
            'bg-dark-text': !variant
          })}
        >
          {variant && <img src={type[variant].img} alt='Icon' />}
        </div>
      </div>

      <p className='subtitle'>{title}</p>
    </div>
  );
};

export default Icon;
