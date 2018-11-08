import { Action } from '@ngrx/store';

import { User } from '../../../core/models/user.model';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_FAIL = 'LOAD_USERS_FAIL';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';


export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;

  constructor(public payload: any) { }

}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;

  constructor(public users: User[]) { }
}


export type actions = LoadUsers | LoadUsersFail | LoadUsersSuccess;
