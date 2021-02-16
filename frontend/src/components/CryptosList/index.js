import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import CryptoList from './CryptoList';

import './cryptos.scss';

const CryptosList = ({
  cryptos,
  changeNameCrytpo,
  loading,
  manageLoad,
}) => {
  useEffect(
    manageLoad,
    [],
  );
  return (
    <div className="cryptos">
      {loading && <div>Liste des cryptos en cours de chargement</div>}
      {!loading && (
        <>
          <div className="cryptos__header">
            <div>Logo et nom</div>
            <div>Dernier prix</div>
            <div>Variation 24h</div>
          </div>
          <div className="cryptos__list">
            {
              cryptos.map((crypto) => (
                <CryptoList key={crypto.symbol} {...crypto} changeNameCrytpo={changeNameCrytpo} />
              ))
            }
          </div>
        </>
      )}

    </div>
  );
};

CryptosList.propTypes = {
  cryptos: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  changeNameCrytpo: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  manageLoad: PropTypes.func.isRequired,
};

export default CryptosList;
