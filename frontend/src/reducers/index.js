import { combineReducers } from 'redux';

import userReducer from 'src/reducers/user';
import authReducer from 'src/reducers/auth';
import orderReducer from 'src/reducers/order';
import cryptoReducer from 'src/reducers/crypto';
import rankingReducer from 'src/reducers/ranking';

const combinedReducer = combineReducers({
  order: orderReducer,
  auth: authReducer,
  crypto: cryptoReducer,
  user: userReducer,
  ranking: rankingReducer,
});

export default combinedReducer;
