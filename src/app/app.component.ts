import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BurnOut!';
  wenna = 'Felicidades no necesitas rendir exámen';
  malaza = 'Lo lamento vas a exámen con nota: ';
  noporce = 'La suma de todos los porcentajes debe ser igual a 100';
  //Variables de notas
  nota1:number=33;
  nota2:number=25;
  nota3:number=55;
  nota4:number=65;
  nota5:number=60;
  //Variables de porcentajes
  porce1:number=20;
  porce2:number=20;
  porce3:number=20;
  porce4:number=20;
  porce5:number=20;
  porce6:number=20;
  porceok:number=100;
  // tuNota:number=this.nota1*this.porce1/100+this.nota2*this.porce2/100+this.nota3*this.porce3/100+this.nota4*this.porce4/100+this.nota5*this.porce5/100;
  //Variables de las funciones
  notas:Array<any> = [];
  porcentajes:Array<any> = [];
  porceRestante:number = 100;
  calculateScore(){
    
  }
}
