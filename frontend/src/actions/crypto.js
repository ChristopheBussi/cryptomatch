export const UPDATE_PAIR_NAME = 'UPDATE_PAIR_NAME';

// Modifie les champs de la page Connexion
export const updatePairName = (pairName) => ({
  type: UPDATE_PAIR_NAME,
  pairName,
});
