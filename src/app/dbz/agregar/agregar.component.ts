import { Component, EventEmitter, Input, Output } from '@angular/core';
//import {agregar}  from 'agregar/Agregar.component';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

    constructor(private DbzService: DbzService){}

    //  @Output() onNuevoPersonaje: EventEmitter<Personaje>= new EventEmitter<Personaje>();

    agregar(){

      if(this.nuevo.nombre.trim().length ===0) {return;}

      //this.onNuevoPersonaje.emit(this.nuevo);  //compoente hijo

          this.DbzService.agregarPersonaje(this.nuevo);

      // ese es el que los sube
      this.nuevo= {
        nombre: '',
        poder:0
      }

    }

}

