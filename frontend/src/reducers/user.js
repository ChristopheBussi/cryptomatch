import { SAVE_USER_DATA } from '../actions/settings';

const initialState = {
  username: '',
  token: '',
  USDAmount: 0,
  logged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        username: action.username,
        token: action.token,
        logged: true,
        USDAmount: action.USDAmount,
      };

    default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
