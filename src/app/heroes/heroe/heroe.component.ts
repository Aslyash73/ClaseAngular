import { Component } from '@angular/core';



@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent{

  nombre: string = 'Iroman🦸‍♀️';
  edad: number = 11;


  get NombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  obtenerNomre(): string {
    return `${this.nombre}-${this.edad}`;
    //return this.nombre + ' - ' + this.edad;
  }

  cambiarNombre(): void{
    this.nombre = 'SpiderMan🕸';

  }
  cambiarEdad(): void{
    this.edad = 45;
  }

}
