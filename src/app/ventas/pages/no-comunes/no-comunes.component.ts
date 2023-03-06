import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Ana';
  genero: string = 'femenino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Juan', 'Alonso', 'Vicente', 'Ana', 'Gustavo'];
  clientesEspera = {
    '=0': 'no hay clientes en espera.',
    '=1': 'hay un cliente en espera',
    'other': 'hay # clientes en espera'
  }

  cambiarCliente(){
    this.nombre = 'Gustavo';
    this.genero = 'masculino'
  }

  borrarCliente(){
    this.clientes.pop(); 
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Gustavo',
    edad: 27,
    direccion: 'Santiago, Chile'
  }

  heroes= [{
    nombre: 'Spiderman',
    real: 'Peter Parker',
    vuela: 'false'
  },
  {
    nombre: 'Ironman',
    real: 'Tony stark',
    vuela: 'true'
  },{
    nombre: 'Superman',
    real: 'Clark Kent',
    vuela: 'true'
  }]

  //Async Pipe

  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) =>{
    setTimeout( ()=> {
      resolve( 'Tenemos data de promesa');
    }, 3500);
  } );
}


