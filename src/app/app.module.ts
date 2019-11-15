import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
