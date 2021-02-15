export const UPDATE_PAIR_NAME = 'UPDATE_PAIR_NAME';
export const ADD_CRYPTOS = 'ADD_CRYPTOS';

// Modifie les champs de la page Connexion
export const updatePairName = (pairName) => ({
  type: UPDATE_PAIR_NAME,
  pairName,
});
export const addCryptos = (data) => ({
  type: ADD_CRYPTOS,
  data,
});
