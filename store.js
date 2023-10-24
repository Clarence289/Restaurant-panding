import { createStore, combineReducers } from 'redux';



// Define initial state
const initialState = {
  email: '',
  password: '',
  isRegistered: false,
};

// Define actions
export const setEmail = (email) => ({
  type: 'SET_EMAIL',
  email,
});

export const setPassword = (password) => ({
  type: 'SET_PASSWORD',
  password,
});

export const setIsRegistered = (isRegistered) => ({
  type: 'SET_IS_REGISTERED',
  isRegistered,
});

// Define reducers
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.email };
    case 'SET_PASSWORD':
      return { ...state, password: action.password };
    case 'SET_IS_REGISTERED':
      return { ...state, isRegistered: action.isRegistered };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = createStore(rootReducer);
