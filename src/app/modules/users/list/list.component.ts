import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../../core/models/user.model';
import { ApplicationState } from '../../../store/state/application.state';
import { LoadUsers } from '../../../store/actions/global/users.action';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  public users: Array<User>;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadUsers());
  }

}
