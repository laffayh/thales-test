import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PreloadService } from './services/preload/preload.service';
import { CoreStoreModule } from './store/core-store.module';

@NgModule({
  imports: [
    CoreStoreModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
