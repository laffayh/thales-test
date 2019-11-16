import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UsersMainComponent } from './pages/users-main/users-main.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersMainComponent,
    children: [
      {
        path: '',
        redirectTo: '1',
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: UpdateUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class UsersRoutingModule {
}
