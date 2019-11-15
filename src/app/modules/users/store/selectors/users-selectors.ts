import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/modules/core/store/reducers';

import { UsersState } from '../reducers/users-reducer';

export const getUsersState = (state: AppState) => state.users;

export const getUsersLoaded = createSelector(
  getUsersState,
  (state: UsersState) => state.usersLoaded,
);
