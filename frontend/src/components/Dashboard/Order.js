import React from 'react';
import PropTypes from 'prop-types';
import './dashboard.scss';

import { NavLink } from 'react-router-dom';
const Order = ({
  pairname,quantity,quotation,orderType,amount,createdAt
}) => {
  return (
  <div className="hisOrder">
          <div className="hisOrder__name">{pairname}</div>
          <div className="hisOrder__orderType">{orderType}</div>
          <div className="hisOrder__quantity">{quantity}</div>
          <div className="hisOrder__amount">{amount}</div>
          <div className="hisOrder__quotation">{quotation}</div>
          <div className="hisOrder__createdAt">{createdAt}</div>
  </div>
  );
};

Order.propTypes = {
  pairname: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  quotation: PropTypes.number.isRequired,
  orderType: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Order;
