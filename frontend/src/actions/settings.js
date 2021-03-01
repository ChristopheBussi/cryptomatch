export const UPDATE_SIGNIN_FIELD = 'UPDATE_SIGNIN_FIELD';
export const UPDATE_SIGNUP_FIELD = 'UPDATE_SIGNUP_FIELD';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const USER_REGISTRATION = 'USER_REGISTRATION';
export const LOGOUT = 'LOGOUT';
export const GET_USER_DATA_LOCAL = 'GET_USER_DATA_LOCAL';
export const DISPLAY_ERROR_MESSAGE_AUTH_SIGN_UP ='DISPLAY_ERROR_MESSAGE_AUTH_SIGN_UP';

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

export const logOut = () => ({
  type: LOGOUT,
});
export const getUserDataLocal = () => {
  let logged = false
  let username = ""
  let USDAmount = 0
  let token = ""
  if (localStorage.getItem('username') != null) {
    username = localStorage.getItem('username');
    token = localStorage.getItem('token');
    USDAmount = parseInt(localStorage.getItem('USDAmount'));
    logged = true;
  } 
  return ({
    type: GET_USER_DATA_LOCAL,
    username,
    token,
    logged,
    USDAmount,
  });
}
export const displayErrorMessageAuthSignUp = (message,username,email) => ({
  type : DISPLAY_ERROR_MESSAGE_AUTH_SIGN_UP,
  message,
  username,
  email
});
