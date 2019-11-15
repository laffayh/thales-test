import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UsersEffects } from './effects/users.effects';
import * as fromUsersReducer from './reducers/users-reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromUsersReducer.usersFeatureKey, fromUsersReducer.usersReducer),
    EffectsModule.forFeature([ UsersEffects ]),
  ],
})
export class UsersStoreModule { }
