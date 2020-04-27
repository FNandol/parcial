import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  //@Input() temp;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cambiarTemp(tempMes){
    //this.modalCtrl.dismiss();
    if (tempMes == 2){
      this.modalCtrl.dismiss( 1);  // Cierra la ventana Dialog Modal y envia un argumento
    } else { 
      if (tempMes == 3){
        this.modalCtrl.dismiss(2);
    } else { 
      this.modalCtrl.dismiss(3);
    }}
  }
}
