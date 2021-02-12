export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';

export const updateLoginField = (newValue, fieldName) => ({
  type: UPDATE_LOGIN_FIELD,
  newValue,
  fieldName,
});
