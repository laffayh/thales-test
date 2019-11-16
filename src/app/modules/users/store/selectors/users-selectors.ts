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

export const getUserById = (id: string) => createSelector(
  getUsersState,
  state => state.entities[ id ],
);

export const getUserBySearchTerm = (searchTerm: string) => createSelector(
  getAllUsers,
  users => users.filter(user => {
    const searchStr = searchTerm.toLowerCase().trim();
    return user.name.first.toLowerCase().startsWith(searchStr) || user.name.last.toLowerCase().startsWith(searchStr);
  })
);
