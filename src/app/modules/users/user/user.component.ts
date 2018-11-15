import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersModel } from '../users.model';
import { Observable } from 'rxjs';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private model: UsersModel
  ) { }

  ngOnInit() {
    this.router.params
      .subscribe(data => this.model.loadUser(data.id));
  }

  get user$(): Observable<User> {
    return this.model.user$;
  }

  get loading$(): Observable<boolean> {
    return this.model.userLoading$;
  }

  get error$(): Observable<object> {
    return this.model.userError$;
  }

}
