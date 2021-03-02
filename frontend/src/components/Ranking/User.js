import React from 'react';
import PropTypes from 'prop-types';

const User = ({
  rank,
  username,
  accountValorization,
}) => {
  
  const evolution = ((accountValorization / 10000) - 1)*10;
  const evolutionRound = Math.round(evolution*100)/10;
  const signeEvolution = evolution > 0 ? '+' : ''; 


  return(
    <tr>
      <td>{rank}</td>
      <td>{username}</td>
      <td>{accountValorization} $</td>
      <td>{`${signeEvolution} ${evolutionRound}%`}</td>
    </tr>
  );
}


User.proptypes = {
  rank: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  accountValorization: PropTypes.number.isRequired,
}

export default User;
