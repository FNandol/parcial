import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { AngularFireModule} from '@angular/fire';
import { firebaseConfig} from '../../../environments/environment';
import { LoginPage } from './login.page';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
