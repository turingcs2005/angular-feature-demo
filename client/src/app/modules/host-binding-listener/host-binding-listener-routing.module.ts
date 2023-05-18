import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostBindingListenerComponent } from './host-binding-listener.component';

const routes: Routes = [{ path: '', component: HostBindingListenerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostBindingListenerRoutingModule { }
