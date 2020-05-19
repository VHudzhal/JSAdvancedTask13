import { Component, OnInit } from '@angular/core';

// import { _ } from 'underscore';
import * as underscore from 'underscore';

import { IUser } from '../service/userInterface';

import { UserService } from '../service/user.service';
import { NotifyService } from '../service/notification/notify.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<IUser>;

  constructor(private userService: UserService, private notify: NotifyService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = underscore.sortBy(users, 'name');
    });
  }

  addUserList(users: Array<IUser>) {
    this.users = underscore.sortBy(users, 'name');
  }

}
