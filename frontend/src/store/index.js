// import de redux et de l'enhancer
import { createStore } from 'redux';
// import du reducer combine
import reducer from 'src/reducers';

const store = createStore(
  reducer,
);

// on rend dispo le store
export default store;
