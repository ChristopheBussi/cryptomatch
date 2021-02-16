import cryptosData from 'src/data/listCryptos';
import { SAVE_CRYPTOS } from '../actions/crypto';

const initialState = {
  cryptos: cryptosData,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CRYPTOS:
      return {
        ...state,
        cryptos: action.cryptos,
        loading: false,

      };

    default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
