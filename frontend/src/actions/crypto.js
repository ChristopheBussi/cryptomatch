export const UPDATE_PAIR_NAME = 'UPDATE_PAIR_NAME';
export const FETCH_CRYPTO = 'FETCH_CRYPTO';
export const SAVE_CRYPTOS = 'SAVE_CRYPTOS';

// Modifie les champs de la page Connexion
export const updatePairName = (pairName) => ({
  type: UPDATE_PAIR_NAME,
  pairName,
});
export const fetchCrypto = () => ({
  type: FETCH_CRYPTO,
});
export const saveCryptos = (cryptos) => ({
  type: SAVE_CRYPTOS,
  cryptos,
});
