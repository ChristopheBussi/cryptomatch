import { connect } from 'react-redux';

import Order from 'src/components/Order';

import {
  placeTheOrder,
  displayMessageOrder,
  updateFieldAmount,
  updateFieldQuantity,
} from '../../actions/order';

const mapStateToProps = (state) => ({
  quantity: state.order.quantity,
  amount: state.order.amount,
  pairname: state.order.pairname,
  name: state.order.name,
  USDAmount: state.user.USDAmount,
  actualQuantityPair: state.order.actualQuantityPair,
  message: state.order.message,
  symbol: state.order.symbol,
  logo: state.order.logo,
});

const mapDispatchToProps = (dispatch) => ({
  handlePlaceTheOrder: (ordertype, quotation) => {
    dispatch(placeTheOrder(ordertype, quotation));
  },
  changeFieldAmount: (newAmount, quotation) => {
    dispatch(updateFieldAmount(newAmount, quotation));
  },
  changeFieldQuantity: (newQuantity, quotation) => {
    dispatch(updateFieldQuantity(newQuantity, quotation));
  },
  handleDiplayMessage: (message) => {
    dispatch(displayMessageOrder(message));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
