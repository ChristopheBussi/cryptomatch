export const PLACE_THE_ORDER = 'PLACE_THE_ORDER';
export const UPDATE_QUANTITY_FIELD = 'UPDATE_QUANTITY_FIELD';
export const ORDER_PASSED = 'ORDER_PASSED';
export const ACTUAL_QUANTITY_PAIR = 'ACTUAL_QUANTITY_PAIR';

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
export const orderPassed = (response) => ({
  type: ORDER_PASSED,
  new_amount: response.new_amount,
  message: response.message,
  new_quantity: response.new_quantity,
});
export const actualQuantityPair = (actualPair) => ({
  type: ACTUAL_QUANTITY_PAIR,
  actualPair,
});
