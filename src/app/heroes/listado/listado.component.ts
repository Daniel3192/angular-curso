import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

heroes:string[]=['Spiderman','Ironman','Thor'];
heroesborrados:string[]=[];
borrar(){
  console.log('Borrando..');
  this.heroes.pop();
}

borrarYVerlo(){
  console.log('Borrando..');
  let heroeborrado = this.heroes.shift();
  if(heroeborrado!=undefined){
  this.heroesborrados.push(heroeborrado);
  }

  this.heroesborrados.push(heroeborrado||'')
  this.heroesborrados.length;

}

  constructor() { 
console.log('constructor');

  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
