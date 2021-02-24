import { SAVE_CRYPTOS, CHANGE_SEARCH } from '../actions/crypto';
const initialState = {
  cryptos: [],
  loading: true,
  search: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CRYPTOS:
      return {
        ...state,
        cryptos: action.cryptos,
        loading: false,

      };
      case CHANGE_SEARCH: 
        return {
          ...state,
          search: action.newSearch,
        }

    default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
