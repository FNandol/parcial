import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportInfoService {
  private resportesEvaluacion = new BehaviorSubject<{}>({});
  //private listResport = new BehaviorSubject<any[]>([])

  $getResportesEvaluacion = this.resportesEvaluacion.asObservable();
  //$getListResport = this.listResport.asObservable();

  constructor() { }

  sendResportesEvaluacion(data:any){
    this.resportesEvaluacion.next(data);
  }

  /*sendtListResport(list:any[]){
    this.listResport.next(list);
  }*/

}