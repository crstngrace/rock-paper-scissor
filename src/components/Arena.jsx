import React, { useState, useContext, useEffect } from 'react';

import Icon from './Icon';
import { AppContext } from '../Context';

const Choices = () => {
  const {
    state: { mode, types, userChoice, appChoice, gameWinner },
    dispatch
  } = useContext(AppContext);
  const [isFinal, setIsFinal] = useState(false);

  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getWinner = () => {
    let winner = 'both';

    if (userChoice !== appChoice) {
      switch (userChoice) {
        case 'rock':
          if (appChoice == 'paper') {
            winner = 'computer';
          } else if (appChoice == 'scissor') {
            winner = 'user';
          } else if (appChoice == 'lizard') {
            winner = 'user';
          } else if (appChoice == 'spock') {
            winner = 'computer';
          }
          break;
        case 'paper':
          if (appChoice == 'rock') {
            winner = 'user';
          } else if (appChoice == 'scissor') {
            winner = 'computer';
          } else if (appChoice == 'lizard') {
            winner = 'computer';
          } else if (appChoice == 'spock') {
            winner = 'user';
          }
          break;
        case 'scissor':
          if (appChoice == 'rock') {
            winner = 'computer';
          } else if (appChoice == 'paper') {
            winner = 'user';
          } else if (appChoice == 'lizard') {
            winner = 'user';
          } else if (appChoice == 'spock') {
            winner = 'computer';
          }
        case 'lizard':
          if (appChoice == 'rock') {
            winner = 'computer';
          } else if (appChoice == 'paper') {
            winner = 'user';
          } else if (appChoice == 'scissor') {
            winner = 'computer';
          } else if (appChoice == 'spock') {
            winner = 'user';
          }
        case 'spock':
          if (appChoice == 'rock') {
            winner = 'user';
          } else if (appChoice == 'paper') {
            winner = 'computer';
          } else if (appChoice == 'scissor') {
            winner = 'user';
          } else if (appChoice == 'lizard') {
            winner = 'computer';
          }
          break;
      }
    }

    return winner;
  };

  useEffect(() => {
    if (userChoice) {
      const interval = setInterval(() => {
        const rand = getRandomArbitrary(0, types[mode].length);
        dispatch({
          type: 'SET_APP_CHOICE',
          payload: { choice: types[mode][rand] }
        });
      }, 80);

      setTimeout(function () {
        clearInterval(interval);
        setIsFinal(true);
      }, 1000);
    }
  }, [userChoice]);

  useEffect(() => {
    if (appChoice != '' && isFinal) {
      const winner = getWinner();
      dispatch({ type: 'SET_WINNER', payload: { winner: winner } });
    }
  }, [appChoice, isFinal]);

  return (
    <div className='mx-auto mb-8 sm:w-96'>
      <div className='flex justify-between'>
        <Icon
          variant={userChoice}
          title='You Picked'
          isWinner={gameWinner == 'user'}
        />
        <Icon
          variant={appChoice}
          title='The House Picked'
          isWinner={gameWinner == 'computer'}
          showBg={gameWinner ? true : false}
        />
      </div>
    </div>
  );
};

export default Choices;
