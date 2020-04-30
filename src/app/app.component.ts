import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  showMenu=true;
  public appPages = [
    
    {
      title: 'Home',
      url: 'Home',
      icon: 'sunny'
    },
    {
      title: 'Autoevaluacion',
      url: 'Autoevaluacion',
      icon: 'walk'
    },
    {
      title: 'Reportes',
      url: 'Reportes',
      icon: 'thermometer'
    },
    {
      title: 'Lugares',
      url: 'Lugares',
      icon: 'trending-up'
    }
  ];

  constructor(
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
   
  }
}
