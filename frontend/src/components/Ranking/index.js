import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import User from './User'

const Ranking = ({ 
  users,
  loading,
  manageLoad,
}) => {
  useEffect(
    manageLoad,
    [],
  );

  return(
    <div className="ranking">
      {loading && <div>Liste du classement en cours de chargement</div>}
      {!loading && (
          /* users.map ((user) => (
            <User {...user} key={users.username} />
          )) */

          console.log(users)
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
  manageLoad: PropTypes.func.isRequired,
}

export default Ranking;
