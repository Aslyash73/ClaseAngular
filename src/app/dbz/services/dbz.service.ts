
import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()

export class DbzService {

  private _Personajes: Personaje[]=[
    {
      nombre: 'Goku',
      poder:22222
    },
    {
      nombre: 'Vegeta',
      poder: 324222
    }
  ];


  get Personajes(): Personaje[]{
        return [...this._Personajes];
  }

constructor(){}

agregarPersonaje(Personaje:Personaje){
        this._Personajes.push(Personaje);
}

}
