import { Component, OnInit } from '@angular/core';

import {ReportInfoService} from 'src/app/services/report-info.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {
  evaluaciones: any[]=[];
  eva:  any;

  constructor(private reportInfoService: ReportInfoService) { }

  ngOnInit() {
    this.reportInfoService.$getResportesEvaluacion.subscribe( data => {
      this.eva = data;
      this.evaluaciones.push(this.eva);
      console.log('p1salida: ', this.evaluaciones)
      
    }).unsubscribe();

  }

}