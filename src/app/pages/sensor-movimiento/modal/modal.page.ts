import { Component, OnInit, Host, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SensorMovimientoPage } from '../sensor-movimiento.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() valor1: semana;
  
  constructor(private modalCtrl: ModalController) {  }

  ngOnInit() {
  }

  volver(){
    this.modalCtrl.dismiss();
  }
}
