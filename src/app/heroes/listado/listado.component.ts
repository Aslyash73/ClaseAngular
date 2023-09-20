import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})


export class ListadoComponent {

  public heroes: string[]=['spiderman', 'Goku','Iroman','El chapulin', 'capitan America'];
  heroeBorrado: string = '';

// removeLastHero():void{
//    this.heroes.pop();
// }

borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() ||'';
}

}
