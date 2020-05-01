import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
   },
   {
     path: 'Home',
     loadChildren: () => import('../../pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'Menu',
    loadChildren: () => import('../../app.module').then( m => m.AppModule)
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
