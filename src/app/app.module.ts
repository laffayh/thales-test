import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    CoreModule,
    SharedModule,
    EffectsModule.forRoot([ AppEffects ]),
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
