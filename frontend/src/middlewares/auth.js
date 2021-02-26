import axios from 'axios';
import url from './url';

import {
  SIGNIN,
  saveUserData,
  SIGNUP,
  userRegistration,
} from '../actions/settings';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNIN: {
      const { username, password } = store.getState().auth.signIn;

      axios.post(
        `${url}api/login_check`,
        {
          username,
          password,
        },
      ).then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.data.username);
        localStorage.setItem('USDAmount', response.data.data.USDAmount);
        localStorage.setItem('email', response.data.data.email);
        store.dispatch(saveUserData(response.data));
      }).catch((error) => {
        console.log(error);
      });
      next(action);
      break;
    }
    case SIGNUP: {
      const { username, password, email } = store.getState().auth.signUp;
      axios.post(
        `${url}signup`, JSON.stringify({
          username,
          password,
          email,
        }),
      ).then((response) => {
        store.dispatch(userRegistration(response.data));
      }).catch((error) => {
        console.log(error);
      });

      next(action);
      break;
    }

    default:
      // si cette action ne nous interesse pas, on la laisse passer
      next(action);
  }
};
