import { useContext } from 'react';
import { AppContext } from '../Context';
import Icon from './Icon';

const Choices = () => {
  const {
    state: { mode },
    dispatch
  } = useContext(AppContext);

  const handleIconClick = (variant) => {
    dispatch({ type: 'SET_USER_CHOICE', payload: { choice: variant } });
  };

  const Normal = () => {
    return (
      <div className='mx-auto max-w-[500px] md:w-4/5'>
        <div className='mb-14 flex justify-between md:mb-28'>
          <Icon variant='paper' handleIconClick={handleIconClick} />
          <Icon variant='scissor' handleIconClick={handleIconClick} />
        </div>
        <div className='flex justify-center'>
          <Icon variant='rock' handleIconClick={handleIconClick} />
        </div>
      </div>
    );
  };

  const Difficult = () => {
    return (
      <>
        <div className='mx-auto  grid w-fit auto-cols-[50px] grid-rows-3 gap-x-2 md:auto-cols-[70px] md:gap-x-3'>
          <div className='cols-span-2 col-start-3'>
            <Icon variant='scissor' handleIconClick={handleIconClick} />
          </div>
          <div className='cols-span-2 col-start-1 row-start-2 -mt-5'>
            <Icon variant='spock' handleIconClick={handleIconClick} />
          </div>
          <div className='cols-span-2 col-start-5 row-start-2 -mt-5'>
            <Icon variant='paper' handleIconClick={handleIconClick} />
          </div>
          <div className='cols-span-2 col-start-2 row-start-3'>
            <Icon variant='lizard' handleIconClick={handleIconClick} />
          </div>
          <div className='cols-span-2 col-start-4 row-start-3'>
            <Icon variant='rock' handleIconClick={handleIconClick} />
          </div>
        </div>
      </>
    );
  };

  const bg = {
    1: 'bg-triangle bg-70% md:bg-50%',
    2: 'bg-pentagon bg-80% md:bg-60%'
  };

  return (
    <div className={`${bg[mode]} mb-8 h-4/5 w-full bg-center bg-no-repeat`}>
      {mode === 1 ? <Normal /> : <Difficult />}
    </div>
  );
};

export default Choices;
