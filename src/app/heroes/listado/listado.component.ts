import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})


export class ListadoComponent {

heroes: string[]=['spiderman', 'Goku','Iroman','El chapulin', 'capitan America'];
heroeBorrado: string = '';

borrarHeroe(){

  this.heroeBorrado = this.heroes.shift() ||'';


}

}
