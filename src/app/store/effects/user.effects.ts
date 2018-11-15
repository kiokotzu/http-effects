import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserService } from '../../core/services/user.service';
import * as userActions from '../actions/global/user.action';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) { }

  @Effect()
  loadUser$ = this.actions$.ofType(userActions.LOAD_USER)
    .pipe(
      switchMap( (action: any) => {
        return this.userService.getUserById(action.id)
          .pipe(
            map(user => new userActions.LoadUserSuccess(user)),
            catchError(err => of(new userActions.LoadUserFail(err)))
          );
      })
    );
}
