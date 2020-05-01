import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SensorMovimientoPage } from './sensor-movimiento.page';

const routes: Routes = [
  {
    path: '',
    component: SensorMovimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SensorMovimientoPageRoutingModule {}
