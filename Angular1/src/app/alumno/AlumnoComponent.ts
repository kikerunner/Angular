import { Component } from '@angular/core';

@Component({
    selector: 'el-alumno',
    templateUrl: `app/alumno/Alumno.component.html`,
    
    //styleUrls: [`app/alumno/Alumno.component.css`],
})

export class AlumnoComponent {
    columnas: number = 2;
    nombre: string = 'perico';
    apellidos: string = 'Delgado';
    direccion: string = 'Segovia City';
    edad: number = 60;
    visibles: boolean = false;

    alternar2(): void {
        this.visibles = !this.visibles
    }
}