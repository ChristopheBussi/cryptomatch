import { SAVE_USER_RANKING } from '../actions/crypto';

const initialState = {
  users: [],
};

export default (state = initialState, action) => {

  switch(action.type){
      case 'SAVE_USERS_RANKING':
          return {
              ...state,
              
          };
      default: 
          return {
              ...state,
          };
  }

}
