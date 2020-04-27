import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorLuzPage } from './sensor-luz.page';

const routes: Routes = [
  {
    path: '',
    component: SensorLuzPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    
  ],
  exports: [RouterModule],
})
export class SensorLuzPageRoutingModule {}
