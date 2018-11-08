import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  public users: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => this.users = data);
  }

}
