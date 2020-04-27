import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SensorMovimientoPageRoutingModule } from './sensor-movimiento-routing.module';

import { SensorMovimientoPage } from './sensor-movimiento.page';
import { ModalPage } from './modal/modal.page';
import { ModalPageModule } from './modal/modal.module';

@NgModule({
  entryComponents: [     // modal
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    SensorMovimientoPageRoutingModule,
    ModalPageModule
  ],
  declarations: [SensorMovimientoPage]
})
export class SensorMovimientoPageModule {}
