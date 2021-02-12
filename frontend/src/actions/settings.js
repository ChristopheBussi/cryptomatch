export const UPDATE_SIGNIN_FIELD = 'UPDATE_SIGNIN_FIELD';
export const UPDATE_SIGNUP_FIELD = 'UPDATE_SIGNUP_FIELD';

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
