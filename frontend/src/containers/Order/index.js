import { connect } from 'react-redux';

import Order from 'src/components/Order';

import {
  placeTheOrder,
  updateQuantityField,
  displayMessageOrder,
} from '../../actions/order';

const mapStateToProps = (state) => ({
  quantity: state.order.quantity,
  pairname: state.order.pairname,
  name: state.order.name,
  USDAmount: state.user.USDAmount,
  actualQuantityPair: state.order.actualQuantityPair,
  message: state.order.message,
});

const mapDispatchToProps = (dispatch) => ({
  handlePlaceTheOrder: (ordertype, quotation) => {
    dispatch(placeTheOrder(ordertype, quotation));
  },
  changeField: (newValue, fieldName) => {
    dispatch(updateQuantityField(parseFloat(newValue), fieldName));
  },
  handleDiplayMessage: (message) => {
    dispatch(displayMessageOrder(message));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
