import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsersService } from 'src/app/modules/users/services/users/users.service';

import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions/users-actions';

@Injectable()
export class UsersEffects {
  @Effect()
  addConsent$ = this.actions$.pipe(
    ofType(loadUsers),
    switchMap(({ count }) => this.usersService.getUsersList(count)
      .pipe(
        map(({ results }) => loadUsersSuccess({ users: results })),
        catchError(() => of(loadUsersError())),
      ),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly usersService: UsersService,
  ) { }
}
