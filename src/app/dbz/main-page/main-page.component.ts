
import { Component } from '@angular/core';


interface Personaje {
  nombre: string;
  poder: number;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {

      Personajes: Personaje[]=[
        {
          nombre: 'Goku',
          poder:222
        },
        {
          nombre: 'Vegeta',
          poder: 324
        }
      ];
        nuevo: Personaje= {
          nombre: 'Maestro Roshi',
          poder: 1000
        }

        agregarNuevoPersonaje(){
          console.log('Main page component');
        }

}
