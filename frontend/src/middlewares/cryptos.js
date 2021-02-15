import axios from 'axios';

import { LIST_CRYPTOS, addCryptos } from '../actions/crypto';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LIST_CRYPTOS: {
      axios.get(
        'http://localhost:3001/cryptos',
      ).then((response) => {
        console.log(response);
        store.dispatch(addCryptos(response));
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
