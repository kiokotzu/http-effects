import { combineReducers } from '@ngrx/store';

import { usersReducer as listUsers } from './users/users.reducer';
import { userReducer as user } from './users/user.reducer';

export const global = combineReducers({
  listUsers,
  user
});
