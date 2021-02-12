import { UPDATE_SIGNIN_FIELD, UPDATE_SIGNUP_FIELD } from '../actions/settings';

const initialState = {
  signIn: {
    username: '',
    password: '',
  },
  signUp: {
    username: '',
    lastname: '',
    firstname: '',
    password: '',
    email: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SIGNIN_FIELD:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          [action.fieldName]: action.newValue,
        },
      };
    case UPDATE_SIGNUP_FIELD:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          [action.fieldName]: action.newValue,
        },
      };

    default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
