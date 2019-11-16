import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserMapComponent } from './components/user-map/user-map.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UpdateUserComponent,
    UserMapComponent,
    UserFormComponent,
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
  ],
})
export class UsersModule { }
