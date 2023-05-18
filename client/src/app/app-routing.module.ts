import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'material-theme', loadChildren: () => import('./modules/material-theme/material-theme.module').then(m => m.MaterialThemeModule) },
  { path: 'animation', loadChildren: () => import('./modules/animation/animation.module').then(m => m.AnimationModule) },
  { path: 'host-binding-listener', loadChildren: () => import('./modules/host-binding-listener/host-binding-listener.module').then(m => m.HostBindingListenerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
