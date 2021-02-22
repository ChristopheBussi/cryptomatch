import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import User from './User'

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
      {loading && <div>Liste du classement en cours de chargement</div>}
      {!loading && (
        <div>test</div>
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
