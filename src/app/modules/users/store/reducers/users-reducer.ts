import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user/user.model';

import { loadUsersSuccess, UsersActionsUnion } from '../actions/users-actions';

export const usersFeatureKey = 'users';

export interface UsersState extends EntityState<User> {
  usersLoaded: boolean;
}

export function selectUserId(user: User): string {
  return user.id.value;
}

export function sortByName(a: User, b: User): number {
  return a.name.first.localeCompare(b.name.first);
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectUserId,
  sortComparer: sortByName,
});

export const initialState: UsersState = adapter.getInitialState({
  usersLoaded: false,
});

const reducer = createReducer(
  initialState,
  on(
    loadUsersSuccess,
    (state, { users }) => adapter.addAll(users, {
      ...state,
      usersLoaded: true,
    })
  ),
);

export function usersReducer(
  state = initialState,
  action: UsersActionsUnion,
): UsersState {
  return reducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
