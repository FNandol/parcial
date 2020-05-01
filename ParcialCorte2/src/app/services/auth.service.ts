import { Injectable } from '@angular/core';
import {  Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GooglePlus} from '@ionic-native/google-plus/ngx';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";
import { auth } from 'firebase';
import { AppComponent } from '../app.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private object = new BehaviorSubject<boolean>(false);
  $getobject = this.object.asObservable();
  send(data){
    this.object.next(data);
  }
  constructor(
    private _http:HttpClient,
    private _google:GooglePlus,
    private _AFAuth: AngularFireAuth
    ) { 
      console.log('hola');
  }

loginGoogle(){
  
  return this._google.login({}).then( result =>{
    const user_data_google =result;
   return this._AFAuth.signInWithCredential(auth.GoogleAuthProvider.credential(null, user_data_google.accesToken))
  }) 
}

// menu(){
//   this._menu.showMenu=!this._menu.showMenu;
// }

}
