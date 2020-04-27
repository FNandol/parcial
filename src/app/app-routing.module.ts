import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'Luz',
    loadChildren: () => import('./pages/sensor-luz/sensor-luz.module').then( m => m.SensorLuzPageModule)
  },
  {
    path: 'Home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'Movimiento',
    loadChildren: () => import('./pages/sensor-movimiento/sensor-movimiento.module').then( m => m.SensorMovimientoPageModule)
  },
  {
    path: 'Temperatura',
    loadChildren: () => import('./pages/sensor-temperatura/sensor-temperatura.module').then( m => m.SensorTemperaturaPageModule)
  },
  {
    path: 'Reportes',
    loadChildren: () => import('./pages/reportes/reportes.module').then( m => m.ReportesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
