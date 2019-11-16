import { createAction, props, union } from '@ngrx/store';
import { User } from 'src/app/models/user/user.model';

export const loadUsers = createAction(
  '[Users] Load Users',
  props<{ count: number }>()
);

export const loadUsersError = createAction(
  '[Users] Load Users Error',
);

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: Array<User> }>()
);

export const updateUser = createAction(
  '[Users] Update User',
  props<{ user: User }>()
);

const usersActions = union({
  loadUsers,
  loadUsersError,
  loadUsersSuccess,
  updateUser,
});

export type UsersActionsUnion = typeof usersActions;
