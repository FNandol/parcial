import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app'
import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private _Auth: AuthService,
    public router: Router,
    private afAuth: AngularFireAuth,
    private platform: Platform,
    private googlePlus: GooglePlus
  ) { }
  ingresar(text){
    this._Auth.loginGoogle().then(()=>{
      this.router.navigate(['/Home']);
    }).catch(err => {
      alert(err);
      alert('pida ayuda a soporte');
    })
  }
  ngOnInit() {
  }
  picture;
  name;
  email;
 async  ingresar1(){
    
      const res = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      const user = res.user;
      console.log(user);
      this.picture = user.photoURL;
      this.name = user.displayName;
      this.email = user.email;
   
  }
  loginGoogle() {
    if (this.platform.is('android')) {
      this.loginGoogleAndroid();
    } else {
      this.loginGoogleWeb();
    }
    console.log('hola');
    
  }

  async loginGoogleAndroid() {
    const res = await this.googlePlus.login({
      'webClientId': "647803975799-dm61asd45tlnhkm4a0bfe5esf1fg168l.apps.googleusercontent.com" ,
      'offline': true
    });
    const resConfirmed = await this.afAuth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken));
    const user = resConfirmed.user;
    this.picture = user.photoURL;
    this.name = user.displayName;
    this.email = user.email;
    this.router.navigate(['../Home']);
  }

  async loginGoogleWeb() {
    const res = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const user = res.user;
    console.log(user);
    this.picture = user.photoURL;
    this.name = user.displayName;
    this.email = user.email;
    this.router.navigate(['../Home']);
  }
  

}
