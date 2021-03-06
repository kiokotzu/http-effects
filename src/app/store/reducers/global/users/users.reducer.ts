import * as fromUSers from '../../../actions/global/users.action';
import { UsersState } from '../../../state/global.state';


const initState: UsersState = {
 users: [],
 loaded: false,
 loading: false,
 error: null
};

export function usersReducer(state = initState, action: fromUSers.actions): UsersState {
  switch (action.type) {
    case fromUSers.LOAD_USERS:
      return {
        ...state,
        loading: true
      };

    case fromUSers.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...action.users]
      };

    case fromUSers.LOAD_USERS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };

    default:
      return state;
  }

}
