import {
  USER_REGISTRATION,
  UPDATE_SIGNIN_FIELD,
  UPDATE_SIGNUP_FIELD,
  SAVE_USER_DATA,
  DISPLAY_ERROR_MESSAGE_AUTH_SIGN_UP,
} from '../actions/settings';
import { ERROR_AUTH_SIGNUP, ERROR_SIGNIN } from 'src/actions/errorsApi';

const initialState = {
  signIn: {
    username: '',
    password: '',
    message: '',
  },
  signUp: {
    username: '',
    password: '',
    email: '',
    message: '',
    passwordVerify: '',
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
      };
    case USER_REGISTRATION:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          username: '',
          password: '',
          email: '',
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
    case ERROR_AUTH_SIGNUP:
      return {
        ...state,
        signUp: {
          message: action.message,
          username: action.username,
          email: action.email,
          password: '',
          passwordVerify: '',
        }
      };
    case DISPLAY_ERROR_MESSAGE_AUTH_SIGN_UP:
      return {
        ...state,
        signUp: {
          message: action.message,
          username: action.username,
          password: '',
          email: action.email,
          passwordVerify: '',
        }
      };
      case ERROR_SIGNIN:
      return {
        ...state,
        signIn: {
          message: action.message,
          username: '',
          password: '',
        }
      };
    default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
