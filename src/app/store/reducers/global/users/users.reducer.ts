import * as fromUSers from '../../../actions/global/users.action';
import { UserState } from '../../../state/global.state';


const initState: UserState = {
 users: [],
 loaded: false,
 loading: false,
 error: null
};

export function userReducer(state = initState, action: fromUSers.actions): UserState {
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
        error: action.payload
      };

    default:
      return state;
  }

}
