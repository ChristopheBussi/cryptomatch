import axios from 'axios';

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
        'http://localhost:3001/api/login_check',
        {
          username,
          password,
        },
      ).then((response) => {
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        store.dispatch(saveUserData(response.data));
      }).catch((error) => {
        console.log('erreur requete login check');
      });
      next(action);
      break;
    }
    case SIGNUP: {
      const { username, password, email } = store.getState().auth.signUp;
      axios.post(
        'http://localhost:3001/signup', JSON.stringify({
          username,
          password,
          email,
        }),
      ).then((response) => {
        console.log(response);
        console.log(response.data);
        store.dispatch(userRegistration(response.data));
      }).catch((error) => {
        console.log(error);
        console.log('erreur requete signup');
      });

      next(action);
      break;
    }

    default:
      // si cette action ne nous interesse pas, on la laisse passer
      next(action);
  }
};
