import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';

import { AlumnoComponent } from './alumno/AlumnoComponent';
import { AlumnoListaComponent } from './alumno/AlumnoLista.Component';
import { AlumnoTituloPipe } from './alumno/Alumno.Titulo.pipe';
import { AlumnosCountComponent } from './alumno/AlumnosCount.Component';
import { ProfesorComponent } from './Profesores/Profesor.component';
import { PaginaNoEncontradaComponent } from './Otros/PaginaNoEncontrada.component';

const appRutas: Routes = [
    { path: 'Alumno', component: AlumnoListaComponent },
    { path: 'Profesores', component: ProfesorComponent },
    { path: '', redirectTo: '/Profesores', pathMatch: 'full' },
    { path: '**', component: PaginaNoEncontradaComponent },
]

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRutas)],
    declarations: [AppComponent, AlumnoComponent, AlumnoListaComponent, AlumnoTituloPipe, AlumnosCountComponent, ProfesorComponent, PaginaNoEncontradaComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
