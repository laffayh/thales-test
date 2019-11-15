import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-user-map',
  templateUrl: './user-map.component.html',
  styleUrls: [ './user-map.component.css' ]
})
export class UserMapComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
