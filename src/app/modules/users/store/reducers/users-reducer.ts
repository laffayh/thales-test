import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user/user.model';

import { loadUsersSuccess, UsersActionsUnion } from '../actions/users-actions';

export const usersFeatureKey = 'users';

export interface UsersState extends EntityState<User> {
  usersLoaded: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UsersState = adapter.getInitialState({
  usersLoaded: false,
});

const reducer = createReducer(
  initialState,
  on(
    loadUsersSuccess,
    (state, { users }) => adapter.addAll(users, {
      ...state,
      userLoaded: true,
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
