import { useContext, useEffect } from 'react';
import Arena from './components/Arena';
import Choices from './components/Choices';
import Layout from './components/Layout';
import Mode from './components/Mode';
import { AppContext } from './Context';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const {
    state: { mode, userChoice }
  } = useContext(AppContext);

  useEffect(() => {
    if (!mode) {
      navigate('/mode');
    }
  }, [mode, navigate]);

  return (
    <div className='relative z-0 flex min-h-screen w-full flex-col bg-gradient-radial p-10'>
      {/* <Header />
      <div className='flex flex-col items-center flex-auto'>
        <div className='w-full max-w-[500px] '>
          {userChoice ? <Arena /> : <Choices />}
        </div>
      </div>
      <Result reset={reset} />
      <Rules /> */}
      <div className='mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center'>
        <Routes>
          <Route exact path='/mode' element={<Mode />} />
          <Route path='/' element={<Layout />}>
            <Route index element={userChoice ? <Arena /> : <Choices />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
