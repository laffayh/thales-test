import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Marker } from 'src/app/models/map/marker.model';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-user-map',
  templateUrl: './user-map.component.html',
  styleUrls: [ './user-map.component.scss' ]
})
export class UserMapComponent implements OnChanges {

  @Input()
  user: User;

  marker: Marker;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user && changes.user.currentValue) {
      this.marker = {
        label: {
          color: 'red',
          text: 'toto',
        },
        position: {
          lat: this.user.location.coordinates.latitude,
          lng: this.user.location.coordinates.longitude,
        },
        title: `${this.user.name.first} ${this.user.name.last}`,
      };
    }
  }

}
