import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { INITIAL_STATE, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { INITIAL_APPLICATION_STATE } from './store/state/application.state';
import { rootReducer } from './store/reducers/root.reducer';
import { environment as ENV } from '../environments/environment';
import { UsersModule } from './modules/users/users.module';
import { rootEffects } from './store/effects';

export const REDUCER_TOKEN = new InjectionToken('Registered REducers');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsersModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot(rootEffects),
    ENV.imports
  ],
  providers: [
    {
      provide: INITIAL_STATE,
      useValue: INITIAL_APPLICATION_STATE
    },
    {
      provide: REDUCER_TOKEN,
      useValue: rootReducer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
