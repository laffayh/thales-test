import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from './models/user/user.model';
import { AppState } from './modules/core/store/reducers';
import { getAllUsers, getUserBySearchTerm } from './modules/users/store/selectors/users-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  mobileQuery: MediaQueryList;

  users$: Observable<Array<User>>;

  constructor(
    private readonly media: MediaMatcher,
    private readonly store: Store<AppState>
  ) { }

  ngOnInit() {
    this.users$ = this.store.pipe(select(getAllUsers));
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
  }

  onSearched(searchTerm: string) {
    this.users$ = this.store.pipe(select(getUserBySearchTerm(searchTerm)));
  }
}
