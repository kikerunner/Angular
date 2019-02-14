import { Component, OnInit } from '@angular/core';
import { Alumno } from './Ialumno';
import { AlumnoService } from './Alumno.Service';

@Component({
    selector: 'lista-alumnos',
    templateUrl: `app/alumno/AlumnoLista.component.html`,
    styleUrls: [`app/alumno/Alumno.component.css`],
    providers: [AlumnoService]
})

export class AlumnoListaComponent implements OnInit{

    alumnos: Alumno[];

    seleccion: string = 'Todos';

    setSeleccion(opcionSeleccionada: string): void {
        this.seleccion = opcionSeleccionada;
    }

    constructor(private losAlumnos: AlumnoService) {
    }

    ngOnInit() {
        this.alumnos = this.losAlumnos.getAlumnos();
    }

    getNumTodos(): number {
        return this.alumnos.length;
    }
    getNumHombres(): number {//Triple igual compara datos y tipo de datos a la vez.
        return this.alumnos.filter(a => a.sexo === "hombre").length;
    }
    getNumMujeres(): number {
        return this.alumnos.filter(a => a.sexo === "mujer").length;
    }
}
