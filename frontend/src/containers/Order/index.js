import { connect } from 'react-redux';

import Order from 'src/components/Order';

import {
  placeTheOrder,
  updateQuantityField,
} from '../../actions/order';

const mapStateToProps = (state) => ({
  quantity: state.order.quantity,
  pairname: state.order.pairname,
  USDAmount: state.user.USDAmount,
});

const mapDispatchToProps = (dispatch) => ({
  handlePlaceTheOrder: (ordertype, quotation) => {
    dispatch(placeTheOrder(ordertype, quotation));
  },
  changeField: (newValue, fieldName) => {
    dispatch(updateQuantityField(parseFloat(newValue), fieldName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
