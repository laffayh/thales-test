import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/user/user.model';
import { AppState } from 'src/app/modules/core/store/reducers';

import { updateUser } from '../../store/actions/users-actions';
import { getUserById } from '../../store/selectors/users-selectors';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: [ './update-user.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class UpdateUserComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.user$ = this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.store.select(getUserById(id))),
    );
  }

  onUserUpdated(user: User) {
    this.store.dispatch(updateUser({ user }));
  }
}
