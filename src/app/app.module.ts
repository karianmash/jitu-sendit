import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HeroComponent } from './hero/hero.component';

import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { ParcelEffectsService } from './ngrx-store/effects/parcel.effects';
import { ParcelReducer } from './ngrx-store/reducers/parcel.reducer';

@NgModule({
  declarations: [AppComponent, HeroComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ parcel: ParcelReducer }),
    EffectsModule.forRoot([ParcelEffectsService]),
    StoreDevtoolsModule.instrument({
      name: 'Parcel',
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
