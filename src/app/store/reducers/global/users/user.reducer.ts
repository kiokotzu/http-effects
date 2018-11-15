import * as fromUSer from '../../../actions/global/user.action';
import { UserState } from '../../../state/global.state';


const initState: UserState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function userReducer(state = initState, action: fromUSer.actions): UserState {
  switch (action.type) {
    case fromUSer.LOAD_USER:
      return {
        ...state,
        loading: true
      };

    case fromUSer.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.user
      };

    case fromUSer.LOAD_USER_FAIL:
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
