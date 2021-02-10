import { combineReducers } from 'redux';

import userReducer from 'src/reducers/user';
import orderReducer from 'src/reducers/order';
import cryptoReducer from 'src/reducers/crypto';

const combinedReducer = combineReducers({
  order: orderReducer,
  crypto: cryptoReducer,
  user: userReducer,
});

export default combinedReducer;
