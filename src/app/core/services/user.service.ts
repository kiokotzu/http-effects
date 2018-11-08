import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment as ENV } from '../../../environments/environment';
import { ListUsers } from '../interfaces/list-users.interface';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(): Observable<Array<User>> {
    return this.http.get(`${ENV.api.base}/users?per_page=5`)
      .pipe(
        map((users: ListUsers) => users.data )
      );
  }
}
