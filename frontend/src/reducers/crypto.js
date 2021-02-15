import { } from '../actions/settings';

const initialState = {
  cryptos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
