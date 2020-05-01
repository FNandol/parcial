import { Component, OnInit, ElementRef} from '@angular/core';
import { Chart } from 'chart.js';
import {ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';

@Component({
  selector: 'app-sensor-temperatura',
  templateUrl: './sensor-temperatura.page.html',
  styleUrls: ['./sensor-temperatura.page.scss'],
})
export class SensorTemperaturaPage implements OnInit{

  grafica: Chart;    // iniciacion del objeto grafica 

  constructor(private lineChart: ElementRef, private modalCtrl: ModalController) {

   }

  ngOnInit () {
    this.createBarChart();
  }

  //------------------------------------ seleccion de la temperatura del mes ----------------------------
   tempMes(n: Number){
    let mes: any[];
    if (n == 1){
        mes= [29, 23, 19, 22, 23, 25, 18, 15];
        this.grafica.data.datasets[0].data=mes;
    } else { 
      if (n == 2){
        mes= [20, 23, 21, 29, 30, 35, 32, 33.5];
        this.grafica.data.datasets[0].data=mes;
    } else {
        mes= [39, 35, 31.5, 29, 35, 37, 36, 34];
        this.grafica.data.datasets[0].data=mes;
    }}
    this.grafica.update();
  }


  // ---------------------------------------------- Grafica ----------------------------------------------
  createBarChart() {
    this.grafica = new Chart( this.lineChart.nativeElement.querySelector('#lineCanvas'), {
      type: 'line',   //tipo de grafica
      data:{ 
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],   // eje x
        datasets: [
          {
          label: 'Temperatura estandar del dia',  // Definicion del dato registrado
          data: [29, 23, 19, 22, 23, 25, 18, 15], //this.tempMes.(n),  // Valores
          backgroundColor: 'rgb(255, 121, 34)', // color area, o puntos valor
          borderColor: 'rgb(255, 121, 34)',// color linea
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: { 
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  

  // -------------------------------- Dialog Modal ------------------------------------------
  async showModal(){
    const modal = await this.modalCtrl.create({
     component: ModalPage   //ventana que debe abrir
    });
    await modal.present();

    const { data } = await modal.onDidDismiss(); // Llega el argumento de modal
    this.tempMes(data);
    //------------------------------
    //this.createBarChart(data);

  }

}
