import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

import { ReportInfoService } from 'src/app/services/report-info.service';


@Component({
  selector: 'app-autoevaluacion',
  templateUrl: './autoevaluacion.page.html',
  styleUrls: ['./autoevaluacion.page.scss'],
})
export class AutoevaluacionPage {
  myForm: FormGroup;

  p1habilitar: boolean = true;
  p2habilitar: boolean = true;
  p3habilitar: boolean = true;
  p4habilitar: boolean = true;

  constructor(private reportInfoService: ReportInfoService,
    private navCtrl: NavController, private formBuilder: FormBuilder, private alertCtrl: AlertController) {

    this.myForm = this.createMyForm();
  }

  Ap1(event) {
    // Activa las preguntas p1
    console.log('p1', event.target.value);
    if (event.target.value == "si") {
      this.p1habilitar = false;
    }
    else { this.p1habilitar = true; }
  }

  Ap2(event) {
    // Activa las preguntas p2
    console.log('p2', event.target.value);
    if (event.target.value == "si") {
      this.p2habilitar = false;
    }
    else { this.p2habilitar = true; }
  }

  Ap3(event) {
    // Activa las preguntas p3
    console.log('p3', event.target.value);
    if (event.target.value == "si") {
      this.p3habilitar = false;
    }
    else { this.p4habilitar = true; }
  }

  Ap4(event) {
    // Activa las preguntas p4
    console.log('p4', event.target.value);
    if (event.target.value == "si") {
      this.p4habilitar = false;
    }
    else { this.p4habilitar = true; }
  }

  public createMyForm() {
    return this.formBuilder.group({
      p1: [''],         //p1
      p1salida: [''],
      p1fecha: [''],
      p2: [''],         //p2
      p2extrajero: [''],
      p2fecha: [''],
      p3: [''],         //p3
      p3persona: [''],
      p3fecha: [''],
      p4: [''],         //p4
      p4sintomas: [''],
      p4nombre: [''],
      p4apellido: [''],
      p4edad: [''],
      p4documento: [''],
      p4nacionalidad: [''],
      p4telefono: [''],
      p4direccion: [''],
      p4eps: [''],
      p4fecha: [''],
      fechaActual: [new Date().toDateString()]  // Envia la fecha en donde se realizo el formulario
    });
  }

  async presentConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'COVID19 - Ministerio de Salud',
      message: 'Este formulario tiene carácter de declarión '
        + 'jurada, hacer una falsa declaración es '
        + 'considerada una falta grave',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          handler: () => {
            this.myForm.reset();  // limpia el formulario si cancela
          }
        }, {
          text: 'Enviar',
          handler: () => {
            console.log('enviar', this.myForm.value);
            this.reportInfoService.sendResportesEvaluacion(this.myForm.value);
            this.myForm.reset();
          }
        }
      ]
    });
    alert.present();
  }

}
