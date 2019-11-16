import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/modules/users/services/users/users.service';

import { loadUsers, loadUsersError, loadUsersSuccess, updateUser } from '../actions/users-actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CONST } from 'src/app/config/const';

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

  @Effect({ dispatch: false })
  updateUser$ = this.actions$.pipe(
    ofType(updateUser),
    tap(() => {
      this.snackBar.open('Utilisateur mis à jour', 'Ok', { duration: CONST.SNACK_BAR_DURATION });
    }),
  );

  constructor(
    private readonly actions$: Actions,
    private snackBar: MatSnackBar,
    private readonly usersService: UsersService,
  ) { }
}
