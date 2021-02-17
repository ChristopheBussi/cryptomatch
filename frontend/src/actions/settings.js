export const UPDATE_SIGNIN_FIELD = 'UPDATE_SIGNIN_FIELD';
export const UPDATE_SIGNUP_FIELD = 'UPDATE_SIGNUP_FIELD';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const USER_REGISTRATION = 'USER_REGISTRATION';

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
  token: data.token,
  username: data.data.username,
  USDAmount: data.data.USDAmount,
});

export const signIn = () => ({
  type: SIGNIN,
});

export const signUp = () => ({
  type: SIGNUP,
});
export const userRegistration = (data) => ({
  type: USER_REGISTRATION,
  message: data.Message,
});
