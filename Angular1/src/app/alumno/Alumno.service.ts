import { Injectable } from '@angular/core';
import { Alumno } from './IAlumno';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AlumnoService {

    constructor(private _http: Http) {}

    getAlumnos(): Alumno[] {
        return [
            {
                nombre: 'Perico',
                apellidos: 'Garcia',
                direccion: 'Sadaba',
                fnac: '01/02/1970',
                sexo: 'hombre'
            },
            {
                nombre: 'Miguelina',
                apellidos: 'Campor',
                direccion: 'Luna',
                fnac: '04/02/1989',
                sexo: 'mujer'
            },
            {
                nombre: 'Juan',
                apellidos: 'Apellaniz',
                direccion: 'Haro',
                fnac: '01/04/1990',
                sexo: 'mujer'
            },
            {
                nombre: 'Pablo',
                apellidos: 'Lociga',
                direccion: 'Tauste',
                fnac: '01/02/1998',
                sexo: 'hombre'
            }
        ]
    }

    getAlumnosPorNombre(nombre: string): Observable<Alumno> {
        return this._http.get("http://localhost:50540/api/Alumnos/" + nombre)
            .map((response: Response) => <Alumno>response.json());
    }
}