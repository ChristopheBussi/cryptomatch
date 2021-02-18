import { USER_REGISTRATION, UPDATE_SIGNIN_FIELD, UPDATE_SIGNUP_FIELD, SAVE_USER_DATA } from '../actions/settings';

const initialState = {
  signIn: {
    username: '',
    password: '',
  },
  signUp: {
    username: '',
    password: '',
    email: '',
    message: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Met à jour le state signIn
    case UPDATE_SIGNIN_FIELD:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          // nom de champ(qui correspond au state): et valeur du champ
          [action.fieldName]: action.newValue,
        },
      };

    // Met à jour le state signUp
    case UPDATE_SIGNUP_FIELD:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          // nom de champ(qui correspond au state): et valeur du champ
          [action.fieldName]: action.newValue,
        },
      };SAVE_USER_DATA
    case USER_REGISTRATION:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          // nom de champ(qui correspond au state): et valeur du champ
          message: action.message,
        },
      };
      case SAVE_USER_DATA:
        return {
          ...state,
          signIn: {
            ...state.signUp,
            username: '',
            password: '',
          },
        };
    default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
