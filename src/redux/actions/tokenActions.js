// redux/actions/tokenActions.js
import { persistToken, getTokenFromStorage } from '../redux-persist';

export const setToken = (token) => async (dispatch) => {
  await persistToken(token);
  dispatch({ type: 'SET_TOKEN', payload: token });
};

export const removeToken = () => async (dispatch) => {
  await persistToken(null);
  dispatch({ type: 'REMOVE_TOKEN' });
};