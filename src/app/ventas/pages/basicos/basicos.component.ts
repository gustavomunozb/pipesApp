import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreCompleto: string = 'GuStAvo';

  fecha: Date = new Date(); //Today

}
