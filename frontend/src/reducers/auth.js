import { UPDATE_SIGNIN_FIELD, UPDATE_SIGNUP_FIELD } from '../actions/settings';

const initialState = {
  signIn: {
    username: '',
    password: '',
  },
  signUp: {
    username: '',
    password: '',
    email: '',
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

    default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
