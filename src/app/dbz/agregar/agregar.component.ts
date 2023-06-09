import { Component, EventEmitter, Input, Output } from '@angular/core';
//import {agregar}  from 'agregar/Agregar.component';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {



  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

      @Output() onNuevoPersonaje: EventEmitter<Personaje>= new EventEmitter();

    agregar(){

      if(this.nuevo.nombre.trim().length ===0) {return;}
      console.log(this.nuevo)
      this.onNuevoPersonaje.emit(this.nuevo);  //compoente hijo

      // ese es el que los sube
      this.nuevo= {
        nombre: '',
        poder:0
      }

    }

}

