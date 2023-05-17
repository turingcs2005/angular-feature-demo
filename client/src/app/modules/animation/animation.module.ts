import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationRoutingModule } from './animation-routing.module';
import { AnimationComponent } from './animation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AnimationComponent
  ],
  imports: [
    CommonModule,
    AnimationRoutingModule,
    SharedModule,

  ]
})
export class AnimationModule { }
