import { combineReducers } from '@ngrx/store';

import { userReducer as users } from './users/users.reducer'

export const models = combineReducers({
  users
});
