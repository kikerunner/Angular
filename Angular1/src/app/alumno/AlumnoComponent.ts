import { Component, OnInit } from '@angular/core';
import { Alumno } from './IAlumno';
import { ActivatedRoute} from '@angular/router';
import { AlumnoService } from './Alumno.service';

@Component({
    selector: 'el-alumno',
    templateUrl: `app/alumno/Alumno.component.html`,
    
    //styleUrls: [`app/alumno/Alumno.component.css`],
})

export class AlumnoComponent implements OnInit{
    alumno: Alumno;

    constructor(private alumnoService: AlumnoService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        let nomAlumno: string = this.activatedRoute.snapshot.params['nombre'];
        this.alumnoService.getAlumnosPorNombre(nomAlumno).subscribe(
            (alumnoDatos) => this.alumno = alumnoDatos);
    }
}