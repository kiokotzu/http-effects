import * as fromUSers from '../../../actions/model/users.action';


export function userReducer(state = [], action: fromUSers.actions): any {
  switch (action.type) {
    case fromUSers.LOAD_USERS:
      return [];
    default:
      return []
  }

}
