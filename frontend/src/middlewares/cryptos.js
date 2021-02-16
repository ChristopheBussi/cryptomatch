import axios from 'axios';

import { FETCH_CRYPTO, saveCryptos } from '../actions/crypto';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CRYPTO: {
      axios.get(
        'http://localhost:3001/cryptos',
      ).then((response) => {
        console.log(response);
        store.dispatch(saveCryptos(response.data));
      }).catch((error) => {
        console.log(error);
        console.log('erreur requete cryptos');
      });

      next(action);
      break;
    }

    default:
      // si cette action ne nous interesse pas, on la laisse passer
      next(action);
  }
};
