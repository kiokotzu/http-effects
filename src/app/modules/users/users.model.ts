import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApplicationModel } from '../../application.model';
import { LoadUsers } from '../../store/actions/global/users.action';
import { User } from '../../core/models/user.model';
import { LoadUser } from '../../store/actions/global/user.action';

@Injectable()
export class UsersModel extends ApplicationModel {

  public user$: Observable<User> = this.store.select(store => store.global.user.user);
  public userLoading$: Observable<boolean> = this.store.select(store => store.global.user.loading);
  public userError$: Observable<object> = this.store.select(store => store.global.user.error);

  public users$: Observable<User[]> = this.store.select(store => store.global.listUsers.users);
  public loading$: Observable<boolean> = this.store.select(store => store.global.listUsers.loading);
  public error$: Observable<object> = this.store.select(store => store.global.listUsers.error);

  public loadUsers(): void {
    this.store.dispatch(new LoadUsers());
  }

  public loadUser(id: number): void {
    this.store.dispatch(new LoadUser(id));
  }

}
