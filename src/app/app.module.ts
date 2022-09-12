import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HeroComponent } from './hero/hero.component';
import { SharedModule } from './shared/shared.module';
import { FormatCurrencyPipe } from './pipes/format-currency.pipe';

@NgModule({
  declarations: [AppComponent, HeroComponent, FormatCurrencyPipe],
  imports: [BrowserModule, SharedModule, AuthModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
