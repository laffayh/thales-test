import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

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
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ]
})
export class CoreStoreModule { }
