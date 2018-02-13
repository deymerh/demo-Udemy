import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 5;
  progreso2: number = 5;
  
  constructor() { }

  ngOnInit() {  }
  
  // actualizaValor( event: number ){
  //   console.log("Evento: " , event );

  //   this.progreso1 = event;
  // }
 
}
