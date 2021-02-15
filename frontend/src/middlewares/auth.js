import axios from 'axios';

import { SIGNIN, saveUserData, SIGNUP } from '../actions/settings';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNIN: {
      const { username, password } = store.getState().auth.signIn;

      axios.post(
        'http://localhost:3001/api/login_check',
        {
          username,
          password,
        },
      ).then((response) => {
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
        'http://localhost:3001/signup',
        {
          username,
          email,
          password,
        },
      ).then((response) => {
        console.log(response.data);
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
