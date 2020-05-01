import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  showMenu=false;
  public appPages = [
    
    {
      title: 'Home',
      url: 'Home',
      icon: 'home'
    },
    {
      title: 'Autoevaluacion',
      url: 'Autoevaluacion',
      icon: 'reader'
    },
    {
      title: 'Reportes',
      url: 'Reportes',
      icon: 'clipboard'
    },
    {
      title: 'Lugares',
      url: 'Lugares',
      icon: 'map'
    }
  ];

  constructor(
    private _Auth: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }
  
  

  ngOnInit() {
    this._Auth.$getobject.subscribe(data => {this.showMenu=data;});
  }
}
