import { createContext, useReducer } from 'react';

export const AppContext = createContext(null);

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MODE':
      return { ...state, mode: action.payload.mode };
    case 'SET_USER_CHOICE':
      return { ...state, userChoice: action.payload.choice };
    case 'SET_APP_CHOICE':
      return { ...state, appChoice: action.payload.choice };
    case 'SET_WINNER':
      const score =
        action.payload.winner == 'user' ? state.score + 1 : state.score;

      return {
        ...state,
        score: score,
        gameWinner: action.payload.winner
      };
    case 'RESET_GAME':
      return {
        ...state,
        userChoice: '',
        appChoice: '',
        gameWinner: ''
      };
    case 'SET_MODAL_STATE':
      return { ...state, showModal: !state.showModal };
    default:
      return { ...state };
  }
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    mode: '',
    score: 0,
    showModal: false,
    types: {
      1: ['rock', 'paper', 'scissor'],
      2: ['rock', 'paper', 'scissor', 'lizard', 'spock']
    }
  });

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
