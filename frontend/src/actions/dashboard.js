export const FETCH_HIS_ORDERS = 'FETCH_HIS_ORDERS';
export const SAVE_HIS_ORDERS = 'SAVE_HIS_ORDERS';
export const FECTH_HIS_CRYPTOS = 'FECTH_HIS_CRYPTOS';
export const SAVE_HIS_CRYPTOS = 'SAVE_HIS_CRYPTOS';
export const DISPLAY_TAB = 'DISPLAY_TAB';


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
export const displayTab = (type) => {
  const cryptos = type === 'cryptos' ? '__actived' :'';
  const orders = type === 'orders' ? '__actived' :'';
  const portfolio = type === 'portfolio' ? '__actived' :'';
  return({
  type: DISPLAY_TAB,
  cryptos: cryptos,
  portfolio: portfolio,
  orders: orders,
})}
