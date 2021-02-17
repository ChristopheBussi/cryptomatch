import React from 'react';
import PropTypes from 'prop-types';

import User from './User'

const Ranking = ({ users }) => (
  <div className="ranking">
    {
      users.map ((user) => (
        <User key={} {...user} />
      ))
    }
  </div>
);

Ranking.proptypes = {
  users: PropTypes.array.isRequired,
}

export default Ranking;
