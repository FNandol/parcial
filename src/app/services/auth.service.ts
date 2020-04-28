import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GooglePlus} from '@ionic-native/google-plus/ngx';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http:HttpClient,
    private _google:GooglePlus,
    private _AFAuth: AngularFireAuth
    ) { 
  }

  listarMeses(): Observable<meses> {
   const url=' http://www.mocky.io/v2/5e8e971b300000740064bc4f ';
   return this._http.get<meses>(url);
 }
loginGoogle(){
  alert('entro');
  return this._google.login({}).then( result =>{
    const user_data_google =result;
    alert(result);
    alert('entro aqui');
    alert(user_data_google )
   return this._AFAuth.signInWithCredential(auth.GoogleAuthProvider.credential(null, user_data_google.accesToken))
  }
 
  ) 
}

}
