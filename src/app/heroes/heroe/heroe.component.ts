import { Component } from "@angular/core";


@Component({
selector:'app-heroe',
templateUrl:'heroe.component.html',
})
export class HeroeComponent{
    heroe:string = 'Ironman';
    edad:number = 30;

    get nombreCapitalizado():string{
        return this.heroe.toUpperCase();
    }
    obtenerNombre():string{
        return this.heroe + this.edad
    }

    obtenerNombreTemplateJavascript():string{
        return `${this.heroe} -  ${this.edad}`;
    }

    cambiarNombre():void{
        this.heroe = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad = 17;
    }
}