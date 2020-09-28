import { Component } from '@angular/core'

@Component({
    selector: 'componet_first',
    templateUrl: './componet_first.component.html',
        /*template: `
    <h1>{{titulo}}</h1>
    <p>{{comentario}}</p>
    `*/
})

export class componentFirst{
    public titulo:string;
    public comentario:string;
    constructor(){
        this.titulo = 'componente';
        this.comentario= 'fetch para la api';
        console.log('componente cargado');
    }
}