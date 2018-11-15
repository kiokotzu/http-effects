import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { User } from '../../../core/models/user.model';
import { UsersModel } from '../users.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  public users: Array<User>;

  constructor(private model: UsersModel) { }

  ngOnInit(): void {
    this.model.loadUsers();
  }

  get users$(): Observable<User[]> {
    return this.model.users$;
  }

  get loading$(): Observable<boolean> {
    return this.model.loading$;
  }

  get error$(): Observable<object> {
    return this.model.error$;
  }

}
