import { Action } from '@ngrx/store';

import { User } from '../../../core/models/user.model';

export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_FAIL = 'LOAD_USER_FAIL';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';


export class LoadUser implements Action {
  readonly type = LOAD_USER;

  constructor(public id: number) { }
}

export class LoadUserFail implements Action {
  readonly type = LOAD_USER_FAIL;

  constructor(public payload: any) { }

}

export class LoadUserSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;

  constructor(public user: User) { }
}


export type actions = LoadUser | LoadUserFail | LoadUserSuccess;
