import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import * as usersActions from '../actions/global/users.action';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user.model';

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }


  @Effect()
  loadUsers$ = this.actions$.ofType(usersActions.LOAD_USERS)
    .pipe(
      switchMap( () => {
        return this.userService.getUsers()
          .pipe(
            map( (users: User[]) => new usersActions.LoadUsersSuccess(users)),
            catchError( err => of(new usersActions.LoadUsersFail(err)))
          );
      })
    );

}
