import { Component, OnInit } from '@angular/core';
import { MovimientoService } from 'src/app/services/movimiento.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';

@Component({
	selector: 'app-sensor-movimiento',
	templateUrl: './sensor-movimiento.page.html',
	styleUrls: ['./sensor-movimiento.page.scss'],
})
export class SensorMovimientoPage implements OnInit {
	meses: meses;
	mes: mes[];
	mostrarmes: boolean[] = [];
	constructor(
		private _listar: MovimientoService,
		private modalCtrl: ModalController
	) {
		this.listarMeses();
	}

	ngOnInit() {
	}

	mostMes(item) {
		this.mostrarmes[item] = !this.mostrarmes[item];
	}
	async listarMeses() {
		await this._listar.listarMeses().toPromise().then(us => {
			this.meses = us;
			this.mes = this.meses.mes;
			for (var i = 0; i < this.mes.length; i++) {
				this.mostrarmes.push(true);
			}
		});
	}
	async showModal(item) {
		const modal = await this.modalCtrl.create({
			component: ModalPage,    //ventana que debe abrir
			componentProps: {
				valor1: item
			}
		});
		await modal.present();
	}

}
