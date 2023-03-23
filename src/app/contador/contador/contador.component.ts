
import {Component} from '@angular/core'

@Component({
  selector: 'app-contador',
  template: `
      <h1 style="text-align: center;">{{title}}</h1>

    <h3> La base es: <strong>5</strong></h3>

    <button (click)="Base5(+1)"> +{{base}}</button>

    <span> {{numero}}</span>

    <button (click)="Base5r(-1)">-{{base}}</button>

  `
})

  export class ContadorComponent {
  title: string = 'Contador App';
  numero:number  = 10;
  base : number = 5;

// base: number = 5;
Base5 (valor:number){
  this.numero += 5;
}
Base5r (valor:number){
  this.numero -= 5;
}
}
