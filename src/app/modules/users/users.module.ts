import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UsersMainComponent } from './pages/users-main/users-main.component';

@NgModule({
  declarations: [
    UsersMainComponent,
    UpdateUserComponent,
  ],
  imports: [
    SharedModule,
  ],
})
export class UsersModule { }
