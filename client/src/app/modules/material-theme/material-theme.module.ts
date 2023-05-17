import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialThemeRoutingModule } from './material-theme-routing.module';
import { MaterialThemeComponent } from './material-theme.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MaterialThemeComponent,
  ],
  imports: [
    CommonModule,
    MaterialThemeRoutingModule,
    SharedModule
  ]
})
export class MaterialThemeModule { }
