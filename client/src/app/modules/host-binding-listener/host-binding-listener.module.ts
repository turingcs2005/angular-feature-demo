import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostBindingListenerRoutingModule } from './host-binding-listener-routing.module';
import { HostBindingListenerComponent } from './host-binding-listener.component';
import { SharedModule } from '../shared/shared.module';
import { DndDirective } from './dnd.directive';


@NgModule({
  declarations: [
    HostBindingListenerComponent,
    DndDirective
  ],
  imports: [
    CommonModule,
    HostBindingListenerRoutingModule,
    SharedModule
  ]
})
export class HostBindingListenerModule { }
