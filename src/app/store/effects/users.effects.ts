import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import * as usersActions from '../actions/global/users.action';

@Injectable()
export class UsersEffects {

  constructor(private actions$: Actions) { }


  @Effect({dispatch: false})
  loadUsers$ = this.actions$.ofType(usersActions.LOAD_USERS)
    .pipe(
      map(action => {
        console.log(action);
        return action;
      })
    );

}
