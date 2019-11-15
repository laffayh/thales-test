import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { UsersStoreModule } from '../../users/store/users-store.module';
import { metaReducers, reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    UsersStoreModule,
  ]
})
export class CoreStoreModule { }
