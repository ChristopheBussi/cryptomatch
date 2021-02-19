import axios from 'axios';

import { PLACE_THE_ORDER, orderPassed, actualQuantityPair } from '../actions/order';
import { TO_ORDER } from '../actions/crypto';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case PLACE_THE_ORDER: {
      const { quantity, pairname } = store.getState().order;
      const { quotation, ordertype } = action;
      const instance = axios.create({
        baseURL: 'http://localhost:3001',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      instance.post(
        '/api/v1/order', JSON.stringify({
          quantity,
          pair_name: pairname,
          ordertype,
          quotation,
        }),
      ).then((response) => {
        console.log(response.data);
        store.dispatch(orderPassed(response.data));
      }).catch((error) => {
        console.log(error);
        console.log('erreur requete order passed');
      });

      next(action);
      break;
    }
    case TO_ORDER: {
      const { pairname } = action;
      const instance = axios.create({
        baseURL: 'http://localhost:3001',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      instance.get(
        `/api/v1/portfolio/${pairname}`, 
      ).then((response) => {
        console.log(response);
        console.log(response.data);
        store.dispatch(actualQuantityPair(response.data));
      }).catch((error) => {
        console.log(error);
        console.log('erreur requete order AmoutnPair');
      });

      next(action);
      break;
    }
    default:
      // si cette action ne nous interesse pas, on la laisse passer
      next(action);
  }
};
