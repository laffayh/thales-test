import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { PreloadService } from './services/preload/preload.service';
import { CoreStoreModule } from './store/core-store.module';

@NgModule({
  declarations: [
    UsersListComponent,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UsersListComponent,
  ],
  imports: [
    CoreStoreModule,
    SharedModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (preloadService: PreloadService) => async () => preloadService.load(),
      deps: [ PreloadService ],
      multi: true,
    },
  ]
})
export class CoreModule { }
