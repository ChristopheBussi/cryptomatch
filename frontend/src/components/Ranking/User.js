import React from 'react';
import PropTypes from 'prop-types';

const User = ({
  rank,
  username,
  accountValorization,
}) => (
  <div className="ranking">
    <div>{rank}</div>
    <div>{username}</div>
    <div>{accountValorization}</div>
  </div>
);

User.proptypes = {
  rank: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  accountValorization: PropTypes.number.isRequired,
}

export default User;
