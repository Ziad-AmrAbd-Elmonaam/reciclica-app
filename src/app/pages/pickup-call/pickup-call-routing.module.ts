import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickupCallsPage } from './pickup-call.page';

const routes: Routes = [
  {
    path: '',
    component: PickupCallsPage
  },
  {
    path: 'pickup-calls',
    loadChildren: () => import('./pickup-call.module').then( m => m.PickupCallPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupCallsPageRoutingModule {}
