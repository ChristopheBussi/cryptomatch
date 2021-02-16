import axios from 'axios';

import { PLACE_THE_ORDER, displayMessageOrder } from '../actions/order';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case PLACE_THE_ORDER: {
      const { quantity, pairName } = store.getState().order;
      const { quotation, ordertype } = action;
      axios.post(
        'http://localhost:3001/api/v1/order',
        {
          quantity,
          pairName,
          ordertype,
          quotation,
        },
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
