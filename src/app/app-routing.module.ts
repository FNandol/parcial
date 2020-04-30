import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  {
    path: 'Login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'Perfil',
    loadChildren: () => import('./pages/Perfil/perfil.module').then( m => m.PerfilPageModule)
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
  },   {
    path: 'Reportes',
    loadChildren: () => import('./pages/Reportes/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'Autoevaluacion',
    loadChildren: () => import('./pages/autoevaluacion/autoevaluacion.module').then( m => m.AutoevaluacionPageModule)
  },
  {
    path: 'Lugares',
    loadChildren: () => import('./pages/lugares/lugares.module').then( m => m.LugaresPageModule)
  }
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
