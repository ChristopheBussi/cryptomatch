import axios from 'axios';

import { PLACE_THE_ORDER, displayMessageOrder } from '../actions/order';

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
        store.dispatch(displayMessageOrder(response.data));
      }).catch((error) => {
        console.log(error);
        console.log('erreur requete order');
      });

      next(action);
      break;
    }

    default:
      // si cette action ne nous interesse pas, on la laisse passer
      next(action);
  }
};
