import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoundedBlockDirective} from './directives/rounded-block.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RoundedBlockDirective, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'clase-3-angular-2023';
  unSaludo: string = 'Este es un saludo desde Typescript';
  numero = 0;
  isError = true;
  status = 3
  user = {
    username: '',
    password: ''
  }
  birthday = new Date();

  constructor(){
    setInterval(() =>{
      this.numero++;
    }, 1000); 
  }

  onClick(event: MouseEvent): void {
    console.log('Evento click:', event);
    console.log('Coordenadas:', event.clientX, event.clientY);
    this.isError = !this.isError;
  }

  onInputChange(event: Event): void{
     console.log(event)
  }

  onInputKeyboard(event: KeyboardEvent): void{
    const htmlInput = event.target as HTMLInputElement;
    console.log(htmlInput.value);
 }

 onSave() : void{
  console.log(this.user)
 }
}
