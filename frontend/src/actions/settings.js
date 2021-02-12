export const UPDATE_SIGNIN_FIELD = 'UPDATE_SIGNIN_FIELD';
export const UPDATE_SIGNUP_FIELD = 'UPDATE_SIGNUP_FIELD';

export const updateSingnInField = (newValue, fieldName) => ({
  type: UPDATE_SIGNIN_FIELD,
  newValue,
  fieldName,
});

export const updateSingnUpField = (newValue, fieldName) => ({
  type: UPDATE_SIGNUP_FIELD,
  newValue,
  fieldName,
});
