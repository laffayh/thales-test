import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CONST } from 'src/app/config/const';
import { Marker } from 'src/app/models/map/marker.model';
import { User } from 'src/app/models/user/user.model';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-user-map',
  templateUrl: './user-map.component.html',
  styleUrls: [ './user-map.component.scss' ]
})
export class UserMapComponent implements OnInit, OnChanges {

  @Input()
  user: User;

  marker: Marker;

  mobileQuery: MediaQueryList;

  zoom: number;

  constructor(private readonly media: MediaMatcher) { }

  ngOnInit() {
    this.zoom = CONST.MAP.ZOOM;
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
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
