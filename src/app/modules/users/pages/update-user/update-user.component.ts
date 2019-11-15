import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { AppState } from 'src/app/modules/core/store/reducers';

import { getUserById } from '../../store/selectors/users-selectors';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: [ './update-user.component.css' ]
})
export class UpdateUserComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.user$ = this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.store.select(getUserById(id)))
    );
  }

}
