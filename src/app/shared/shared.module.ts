import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { FirstNamePipe } from '../pipes/first-name.pipe';
import { NoContentComponent } from './no-content/no-content.component';

@NgModule({
  declarations: [HeaderComponent, FirstNamePipe, NoContentComponent],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FontAwesomeModule,
    FirstNamePipe,
    NoContentComponent,
  ],
})
export class SharedModule {}
