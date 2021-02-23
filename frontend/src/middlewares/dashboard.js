import axios from 'axios';
import url from './url';

import {
  FETCH_HIS_ORDERS,
  saveHisOrders,
  FECTH_HIS_CRYPTOS,
  saveHisCryptos
}from '../actions/dashboard';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_HIS_ORDERS: {
      axios.get(
        `${url}orders/${action.username}`,
      ).then((response) => {
        store.dispatch(saveHisOrders(response.data));
      }).catch((error) => {
        console.log('erreur requete cryptos');
      });
      next(action);
      break;
    }
    case FECTH_HIS_CRYPTOS: {
      axios.get(
        `${url}portfolio/${action.username}`,
      ).then((response) => {
        store.dispatch(saveHisCryptos(response.data));
      }).catch((error) => {
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
