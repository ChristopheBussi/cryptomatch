import axios from 'axios';
import url from './url';

import { FETCH_USERS_RANKING, saveUsersRanking } from '../actions/crypto';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERS_RANKING: {
      axios.get(
        'http://ec2-34-204-76-231.compute-1.amazonaws.com/ranking',
      ).then((response) => {
        store.dispatch(saveUsersRanking(response.data));
      }).catch((error) => {
        console.log('erreur requete ranking');
      });

      next(action);
      break;
    }

    default:
      next(action);
  }
};

