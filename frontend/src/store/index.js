// import de redux et de l'enhancer
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Import de notre middleware
import auth from 'src/middlewares/auth';

// import du reducer combine
import reducer from 'src/reducers';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(auth),
));

// on rend dispo le store
export default store;
