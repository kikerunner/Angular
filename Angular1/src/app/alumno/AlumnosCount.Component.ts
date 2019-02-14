import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cuantos-alumnos',
    templateUrl: `app/alumno/AlumnosCount.Component.html`,
    //styleUrls: [`app/alumno/AlumnoStyle.css`],
})

export class AlumnosCountComponent {

    opcionElegida: string = 'Todos';

    @Output()
    globalElegido: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    todos: number = 0;

    @Input()
    hombres: number = 0;

    @Input()
    mujeres: number = 0;

    cuandoCambiemos() {
        this.globalElegido.emit(this.opcionElegida);
        console.log(this.opcionElegida);
    }
}