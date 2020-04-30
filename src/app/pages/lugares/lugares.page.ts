import { Component, OnInit } from '@angular/core';

import {ReportInfoService} from 'src/app/services/report-info.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {
  evaluacion: any;

  constructor(private reportInfoService: ReportInfoService) { }

  ngOnInit() {
    this.reportInfoService.$getResportesEvaluacion.subscribe( data => {
      this.evaluacion = data; 
      console.log('p1salida: ', this.evaluacion)
      
    }).unsubscribe();

  }

}