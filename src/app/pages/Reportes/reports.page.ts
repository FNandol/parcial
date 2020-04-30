import { Component, OnInit } from '@angular/core';

import {ReportInfoService} from 'src/app/services/report-info.service';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  evaluacion: any;
  
  constructor(private reportInfoService: ReportInfoService) { }

  ngOnInit() {
    this.reportInfoService.$getResportesEvaluacion.subscribe( data => {
      //console.log(data)
      this.evaluacion = data;
    }).unsubscribe();

    console.log(this.evaluacion);
  }

  
}