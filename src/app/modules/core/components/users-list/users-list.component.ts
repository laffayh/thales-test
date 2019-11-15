import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user/user.model';

import { AppState } from '../../store/reducers';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: [ './users-list.component.scss' ]
})
export class UsersListComponent implements OnInit {

  @Input()
  users: Array<User>;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit() {
  }

}
