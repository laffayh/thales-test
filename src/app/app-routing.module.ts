import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersMainComponent } from './modules/users/pages/users-main/users-main.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersMainComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
