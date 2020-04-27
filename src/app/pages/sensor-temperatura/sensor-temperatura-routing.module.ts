import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SensorTemperaturaPage } from './sensor-temperatura.page';

const routes: Routes = [
  {
    path: '',
    component: SensorTemperaturaPage
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SensorTemperaturaPageRoutingModule {}
