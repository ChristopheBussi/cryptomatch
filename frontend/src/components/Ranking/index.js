import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import User from './User'

import './ranking.scss'

const Ranking = ({
  users,
  loading,
  manageLoadRank,
}) => {
  useEffect(
    manageLoadRank,
    [],
  );

  return (
    <div className="ranking">
      {loading && <div>Page de classement en cours de chargement</div>}
      {!loading && (
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Pseudo</th>
              <th>Capital</th>
              <th>Evolution</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <User
                  key={user.username}
                  {...user}
                />
              ))
            }
          </tbody>
        </table>
      )}
    </div>
  );
};

Ranking.proptypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  manageLoadRank: PropTypes.func.isRequired,
}

export default Ranking;
