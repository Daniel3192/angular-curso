import { Component } from "@angular/core";


@Component({
  
  selector: 'app-contador',
 template:`

    <h1>{{titulo}}</h1>
    <h2>{{'Se puede escribir aqui codigo de javascript'}}</h2>
    <button (click)="numero = numero +1">+1</button>
    <span>{{numero}}</span>
    <button (click)="acumular(10)">Acumular</button>
    <button (click)="sumar()">Sumar 1</button>

    <button (click)="acumular(base)">AcumularBase + {{base}}</button>
    <span>La base elegida es {{base}}</span>
 `,
})

export class ContadorComponent {
  public titulo:string = 'Contador APP';
  public numero:number = 0;
  public base:number = 5;

  sumar(){
    this.numero +=1;
  }

  restar(){
    this.numero -=1;
  }

  acumular(valor:number){
    this.numero +=valor;
  }
}
