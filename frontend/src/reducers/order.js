import { UPDATE_QUANTITY_FIELD, DISPLAY_MESSAGE_ORDER } from '../actions/order';
import { UPDATE_PAIR_NAME } from '../actions/crypto';

const initialState = {
  quantity: 0.000,
  pairname: '',
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Met à jour le state signIn
    case UPDATE_QUANTITY_FIELD:
      console.log(action);
      return {
        ...state,
        // nom de champ(qui correspond au state): et valeur du champ
        [action.fieldName]: action.newValue,
      };
    case DISPLAY_MESSAGE_ORDER:
      return {
        ...state,
        // nom de champ(qui correspond au state): et valeur du champ
        message: action.message,
      };
    case UPDATE_PAIR_NAME:
      return {
        ...state,
        // nom de champ(qui correspond au state): et valeur du champ
        pairname: action.pairname,
      };
    default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
