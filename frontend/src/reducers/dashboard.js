import { SAVE_HIS_ORDERS, SAVE_HIS_CRYPTOS } from "../actions/dashboard";

const initialState = {
  hisCryptos: [],
  hisOrders:[], 
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_HIS_ORDERS: 
    return{
      ...state,
      hisOrders: action.hisOrders,
    };
    case SAVE_HIS_CRYPTOS: 
    return{
      ...state,
      hisCryptos: action.hisCryptos,
      loading: false,
    }
    default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
