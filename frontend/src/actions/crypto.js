export const TO_ORDER = 'TO_ORDER';
export const FETCH_CRYPTO = 'FETCH_CRYPTO';
export const SAVE_CRYPTOS = 'SAVE_CRYPTOS';

// Modifie les champs de la page Connexion
export const toOrder = (pairname,name) => ({
  type: TO_ORDER,
  pairname,
  name,
});
export const fetchCrypto = () => ({
  type: FETCH_CRYPTO,
});
export const saveCryptos = (cryptos) => ({
  type: SAVE_CRYPTOS,
  cryptos,
});
