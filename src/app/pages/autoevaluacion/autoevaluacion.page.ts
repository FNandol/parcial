import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-autoevaluacion',
  templateUrl: './autoevaluacion.page.html',
  styleUrls: ['./autoevaluacion.page.scss'],
})
export class AutoevaluacionPage implements OnInit {
  customPickerOptions: any;

  constructor(private alertCtrl: AlertController) {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  ngOnInit() {
  }

  async presentConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'COVID19 - Ministerio de Salud',
      message: 'Este formulario tiene carácter de declarión '
        + 'jurada, hacer una falsa declaración es '
        + 'considerada una falta grave',
      buttons: [
        {
          text: 'ENVIAR',
          role: 'CANCELAR',
          handler: () => {
            // console.log('Cancel clicked'); aqui se coloca lo que va a hacer el boton al presionarse
          }
        }
      ]
    });
    alert.present();
  }

}
