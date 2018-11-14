import { combineReducers } from '@ngrx/store';

import { userReducer as listUsers } from './users/users.reducer';

export const global = combineReducers({
  listUsers
});
