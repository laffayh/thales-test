import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/user/user.model';
import { AppState } from 'src/app/modules/core/store/reducers';

import { updateUser } from '../../store/actions/users-actions';
import { getUserById } from '../../store/selectors/users-selectors';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: [ './update-user.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class UpdateUserComponent implements OnInit {

  mobileQuery: MediaQueryList;

  user$: Observable<User>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly media: MediaMatcher,
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this.user$ = this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.store.select(getUserById(id))),
    );
  }

  onUserUpdated(user: User) {
    this.store.dispatch(updateUser({ user }));
  }
}
