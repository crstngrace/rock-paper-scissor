import { useContext, useEffect } from 'react';
import { AppContext } from '../Context';

const Result = ({ reset }) => {
  const {
    state: { gameWinner }
  } = useContext(AppContext);

  return (
    <>
      {gameWinner && (
        <div className='flex flex-col items-center mx-auto mb-12'>
          <h1 className='text-3xl text-white uppercase mb-2'>
            {gameWinner == 'both'
              ? "It's a draw"
              : gameWinner == 'user'
              ? 'You Win'
              : 'You Lose'}
          </h1>
          <button
            className='px-10 py-1.5 bg-white rounded uppercase'
            onClick={reset}
          >
            Play Again
          </button>
        </div>
      )}
    </>
  );
};

export default Result;
