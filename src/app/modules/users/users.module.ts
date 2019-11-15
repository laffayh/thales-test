import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UsersMainComponent } from './pages/users-main/users-main.component';

@NgModule({
  declarations: [
    UsersMainComponent
  ],
  imports: [
    SharedModule,
  ],
})
export class UsersModule { }
