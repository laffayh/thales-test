import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from './models/user/user.model';
import { AppState } from './modules/core/store/reducers';
import { getAllUsers } from './modules/users/store/selectors/users-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  users$: Observable<Array<User>>;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit() {
    this.users$ = this.store.pipe(select(getAllUsers));
  }

}
