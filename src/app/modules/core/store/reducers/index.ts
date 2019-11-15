import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { usersReducer, UsersState } from 'src/app/modules/users/store/reducers/users-reducer';

export interface AppState {
  users: UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
  users: usersReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
