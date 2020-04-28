import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
public canvasWidth = 300;
public needleValue = 65;
public centralLabel = '';
public name = 'Luminosidad';
public bottomLabel = '65';
public options = {
    hasNeedle: false,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['rgb(44, 151, 222)', 'lightgray'],
    arcDelimiters: [6],
    rangeLabel: ['0', '1000'],
    needleStartValue: 50,
}
  constructor() { }

  boton(){
    var a = Math.floor( Math.random()* (999 - 1) + 1);
    this.needleValue= a;
    this.bottomLabel=a+"";
    a=a/10;
    this.options.arcDelimiters=[a];
    
  }
  ngOnInit() {
  }

}
