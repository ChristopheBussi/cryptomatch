import { SAVE_USER_DATA } from '../actions/settings';

const initialState = {
  username: '',
  token: '',
  logged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        username: action.data.data.username,
        token: action.data.token,
        logged: true,
      };

    default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
