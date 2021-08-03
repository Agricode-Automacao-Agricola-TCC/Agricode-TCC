import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaClientePage } from './area-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: AreaClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaClientePageRoutingModule {}
