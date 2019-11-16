import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpdateUserComponent } from './pages/update-user/update-user.component';

const routes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: ':id',
        component: UpdateUserComponent,
      },
      {
        path: '',
        redirectTo: '/users/1',
        pathMatch: 'full'
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
