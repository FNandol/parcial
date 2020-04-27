import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage {
  mostrarForm=true;
  myForm: FormGroup;
  reportes: report[]=[];
  nombre=   "";
  apellido= "";
  correo=   "";
  reporte=  "";
  rep:report;
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private alertCtrl: AlertController
  ) {
    this.myForm = this.createMyForm();
  }

  hide(){
    this.mostrarForm=!this.mostrarForm;
  }
  
  saveData(){
    console.log(this.myForm.value);
    this.rep=this.myForm.value
    this.reportes.push(this.rep);
    this.mostrarForm=!this.mostrarForm;
    this.myForm.reset();
    this.presentConfirm();
  }

  async presentConfirm() {
      const alert = await  this.alertCtrl.create({
        header: 'Atención',
        message: 'Se ha guardado con exito' ,
        buttons: [
          {
            text: 'Aceptar',
            role: 'cancel',
            handler: () => {
              // console.log('Cancel clicked'); aqui se coloca lo que va a hacer el boton al presionarse
            }
          }
        ]
      });
      alert.present();
  }
  
  private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [
        Validators.required, Validators.email
      ]],
      reporte: ['', Validators.required]
    });
  }



}
