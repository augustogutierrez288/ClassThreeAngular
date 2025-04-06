import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoundedBlockDirective} from './directives/rounded-block.directive';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RoundedBlockDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'clase-3-angular-2023';
  unSaludo: string = 'Este es un saludo desde Typescript';
  numero = 0;
  isError = false;

  constructor(){
    setInterval(() =>{
      this.numero++;
    }, 1000);
  }

}
