import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const User = ({
  rank,
  username,
  accountValorization,
}) => (
  <tr>
    <td>
      {rank}
    </td>
    <td className="user">
      <NavLink className='link' to={`/dashboard/${username}`} >
        {username}
      </NavLink>
    </td>
    <td>
      {accountValorization}
    </td>

  </tr>

);

User.proptypes = {
  rank: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  accountValorization: PropTypes.number.isRequired,
}

export default User;
