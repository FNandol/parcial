import { Component, OnInit, Host } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app'
import { Platform } from '@ionic/angular';
import { LoadingController, AlertController } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AppComponent } from 'src/app/app.component';
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
    public loadingController: LoadingController,
    private platform: Platform,
    public alertController: AlertController,
    private googlePlus: GooglePlus,
    
    private nativeStorage: NativeStorage,
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
      alert(user)
   
  }
  loginGoogle() {
    
    if (this.platform.is('cordova')) {
      this.googleLogin();
      //alert('loginandroid')
    } else {
      this.loginGoogleWeb();
      //alert('loginweb')
    }
    console.log('hola');
    
  }

  async googleLogin() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    //alert('loginandroid1.3')
    this.presentLoading(loading);
    this.googlePlus.login({
      'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '647803975799-dm61asd45tlnhkm4a0bfe5esf1fg168l.apps.googleusercontent.com', // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    })
      .then(user => {
        alert('loginandroid1.5')
        //save user data on the native storage
        this.nativeStorage.setItem('google_user', {
          name: user.displayName,
          email: user.email,
          picture: user.imageUrl
        })
          .then(() => {
            alert('loginandroid2')
            this.router.navigate(["../Home"]);
          }, (error) => {
            alert(error +" 1")
            console.log(error);
          })
        loading.dismiss();
      }, err => {
        alert(err+" 2")
        this.router.navigate(["../Home"]);
      this._Auth.send(false);
        console.log(err);
        if (!this.platform.is('cordova')) {
          this.presentAlert();
        }
        loading.dismiss();
      })
      
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Cordova no está disponible en escritorio. Por favor, intente esto en un dispositivo movil o en un emulador.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  async loginGoogleWeb() {
    const res = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const user = res.user;
    console.log(user);
    this.picture = user.photoURL;
    this.name = user.displayName;
    this.email = user.email;
    //alert(user)
    this.router.navigate(["../Home"]);
    this._Auth.send(false);
  }
  

}
