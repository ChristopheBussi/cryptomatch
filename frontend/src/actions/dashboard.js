export const FETCH_HIS_ORDERS = 'FETCH_HIS_ORDERS';
export const SAVE_HIS_ORDERS = 'SAVE_HIS_ORDERS';
export const FECTH_HIS_CRYPTOS = 'FECTH_HIS_CRYPTOS';
export const SAVE_HIS_CRYPTOS = 'SAVE_HIS_CRYPTOS';


export const fetchHisOrders = (username) => ({
  type: FETCH_HIS_ORDERS,
  username,
});
export const saveHisOrders = (hisOrders) => ({
  type: SAVE_HIS_ORDERS,
  hisOrders,
});
export const fecthHisCryptos = (username) => ({
  type: FECTH_HIS_CRYPTOS,
  username,
});
export const saveHisCryptos = (hisCryptos) => ({
  type: SAVE_HIS_CRYPTOS,
  hisCryptos,
})
