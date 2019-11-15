import { Component } from '@angular/core';

import { UsersService } from './modules/core/services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  constructor(private usersService: UsersService) {
    this.usersService.getUsersList(1).subscribe(console.log);
  }

}
