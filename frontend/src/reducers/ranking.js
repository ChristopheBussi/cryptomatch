import { SAVE_USER_RANKING } from '../actions/crypto';

const initialState = {
  users: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_RANKING:
      return {
        ...state,
        users: action.users,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
