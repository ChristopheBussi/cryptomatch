export const PLACE_THE_ORDER = 'PLACE_THE_ORDER';
export const UPDATE_QUANTITY_FIELD = 'UPDATE_QUANTITY_FIELD';
export const DISPLAY_MESSAGE_ORDER = 'DISPLAY_MESSAGE_ORDER';

// Modifie les champs de la page Connexion
export const placeTheOrder = (ordertype, quotation) => ({
  type: PLACE_THE_ORDER,
  ordertype,
  quotation,
});

export const updateQuantityField = (newValue, fieldName) => ({
  type: UPDATE_QUANTITY_FIELD,
  newValue,
  fieldName,
});
export const displayMessageOrder = (message) => ({
  type: DISPLAY_MESSAGE_ORDER,
  message,
});
