import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CONST } from 'src/app/config/const';
import { Marker } from 'src/app/models/map/marker.model';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-user-map',
  templateUrl: './user-map.component.html',
  styleUrls: [ './user-map.component.scss' ]
})
export class UserMapComponent implements OnInit, OnChanges {

  @Input()
  user: User;

  marker: Marker;

  zoom: number;

  constructor() { }

  ngOnInit() {
    this.zoom = CONST.MAP.ZOOM;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user && changes.user.currentValue) {
      this.zoom = CONST.MAP.ZOOM;
      this.marker = {
        label: {
          color: 'red',
        },
        position: {
          lat: Math.round(changes.user.currentValue.location.coordinates.latitude),
          lng: Math.round(changes.user.currentValue.location.coordinates.longitude),
        },
        title: `${changes.user.currentValue.name.first} ${changes.user.currentValue.name.last}`,
      };
    }
  }

}
