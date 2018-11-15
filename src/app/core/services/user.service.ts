import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment as ENV } from '../../../environments/environment';
import { ListUsers, UserData } from '../interfaces/list-users.interface';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Array<User>> {
    return this.http.get(`${ENV.api.base}/users?per_page=5`)
      .pipe(
        map((users: ListUsers) => users.data )
      );
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get(`${ENV.api.base}/users/${id}`)
      .pipe(
        map((user: UserData) => user.data )
      );
  }
}
