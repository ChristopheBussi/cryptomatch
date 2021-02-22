import React from 'react';
import PropTypes from 'prop-types';

const User = ({
  rank,
  username,
  accountValorization,
}) => (
  <tr>
    <td>{rank}</td>
    <td>{username}</td>
    <td>{accountValorization}</td>
  </tr>
);

User.proptypes = {
  rank: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  accountValorization: PropTypes.number.isRequired,
}

export default User;
