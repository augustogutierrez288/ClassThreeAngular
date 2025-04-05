import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'clase-3-angular-2023';
  unSaludo: string = 'Este es un saludo desde Typescript';
  numero = 0;
  hayError = true;
  h4 ={
    fontSize: '2rem',
    backgroundColor: '#fff',
    color:' #1c1c1c'
  }

  constructor(){
    setInterval(() =>{
      this.numero++;
    }, 1000);
  }

}
