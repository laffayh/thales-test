import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersMainComponent } from './pages/users-main/users-main.component';

const routes: Routes = [
  {
    path: '',
    component: UsersMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
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
