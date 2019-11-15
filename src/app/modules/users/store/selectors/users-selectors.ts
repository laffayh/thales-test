import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/modules/core/store/reducers';

import * as fromUsers from '../reducers/users-reducer';

export const getUsersState = (state: AppState) => state.users;

export const getUsersLoaded = createSelector(
  getUsersState,
  (state: fromUsers.UsersState) => state.usersLoaded,
);

export const getAllUsers = createSelector(
  getUsersState,
  fromUsers.selectAll,
);
