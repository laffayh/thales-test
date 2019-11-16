import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserMapComponent } from './components/user-map/user-map.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UsersMainComponent } from './pages/users-main/users-main.component';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersMainComponent,
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
