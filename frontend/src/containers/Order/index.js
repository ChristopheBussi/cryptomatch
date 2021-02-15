import { connect } from 'react-redux';

import Order from 'src/components/Order';

import {
  placeTheOrder,
  updateQuantityField,
} from '../../actions/order';

const mapStateToProps = (state) => ({
  quantity: state.order.quantity,

});

const mapDispatchToProps = (dispatch) => ({
  handlePlaceTheOrder: (ordertype, quantity, quotation) => {
    dispatch(placeTheOrder(ordertype, quantity, quotation));
  },
  changeField: (newValue, fieldName) => {
    dispatch(updateQuantityField(parseFloat(newValue), fieldName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
