export const UPDATE_SIGNIN_FIELD = 'UPDATE_SIGNIN_FIELD';
export const UPDATE_SIGNUP_FIELD = 'UPDATE_SIGNUP_FIELD';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';

// Modifie les champs de la page Connexion
export const updateSingnInField = (newValue, fieldName) => ({
  type: UPDATE_SIGNIN_FIELD,
  newValue,
  fieldName,
});

// Modifie les champs de la page Inscription
export const updateSingnUpField = (newValue, fieldName) => ({
  type: UPDATE_SIGNUP_FIELD,
  newValue,
  fieldName,
});

export const saveUserData = (data) => ({
  type: SAVE_USER_DATA,
  data,
});

export const signIn = () => ({
  type: SIGNIN,
});

export const signUp = () => ({
  type: SIGNUP,
});
