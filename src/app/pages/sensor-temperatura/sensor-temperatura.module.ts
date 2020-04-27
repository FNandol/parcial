import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SensorTemperaturaPageRoutingModule } from './sensor-temperatura-routing.module';

import { SensorTemperaturaPage } from './sensor-temperatura.page';
import { ModalPage } from './modal/modal.page';
import { ModalPageModule } from './modal/modal.module';

@NgModule({
  entryComponents: [     // modal
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SensorTemperaturaPageRoutingModule,
    ModalPageModule   //modal
  ],
  declarations: [SensorTemperaturaPage]
})
export class SensorTemperaturaPageModule {}
