import { UPDATE_QUANTITY_FIELD, ORDER_PASSED, ACTUAL_QUANTITY_PAIR, DISPLAY_MESSAGE_ORDER } from '../actions/order';
import { TO_ORDER } from '../actions/crypto';

const initialState = {
  quantity: 0.000,
  pairname: '',
  name:'',
  message: null,
  actualQuantityPair: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Met à jour le state signIn
    case UPDATE_QUANTITY_FIELD:
      return {
        ...state,
        // nom de champ(qui correspond au state): et valeur du champ
        [action.fieldName]: action.newValue,
      };
    case ORDER_PASSED:
      return {
        ...state,
        message: "Ordre Enregistré",
        actualQuantityPair: action.new_quantity,
        quantity: 0,
      };
    case TO_ORDER:
      return {
        ...state,
        pairname: action.pairname,
        name: action.name,
      };
      case ACTUAL_QUANTITY_PAIR:
      return {
        ...state,
        // nom de champ(qui correspond au state): et valeur du champ
        actualQuantityPair: action.actualPair.actualQuantity,
      };
      case DISPLAY_MESSAGE_ORDER:
      return{
        ...state,
        message: action.message,
      }
    default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
      return {
        ...state,
      };
  }
};
