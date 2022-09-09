import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { FirstNamePipe } from '../pipes/first-name.pipe';

@NgModule({
  declarations: [HeaderComponent, FirstNamePipe],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FontAwesomeModule, FirstNamePipe],
})
export class SharedModule {}
