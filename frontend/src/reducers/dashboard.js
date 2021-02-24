import { SAVE_HIS_ORDERS, SAVE_HIS_CRYPTOS, DISPLAY_TAB } from "../actions/dashboard";

const initialState = {
  hisCryptos: [],
  hisOrders: [],
  loading: true,
  displayCryptos: '__actived',
  displayOrders: '',
  displayPortfolio: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_HIS_ORDERS:
      return {
        ...state,
        hisOrders: action.hisOrders,
      };
    case SAVE_HIS_CRYPTOS:
      return {
        ...state,
        hisCryptos: action.hisCryptos,
        loading: false,
      }
    case DISPLAY_TAB:
      return {
        ...state,
        displayCryptos: action.cryptos,
        displayOrders: action.orders,
        displayPortfolio: action.portfolio,
      }
    default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
