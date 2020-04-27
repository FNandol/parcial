import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  constructor(private _http:HttpClient) { 
  }

  listarMeses(): Observable<meses> {
   const url=' http://www.mocky.io/v2/5e8e971b300000740064bc4f ';
   return this._http.get<meses>(url);
 }
}
