"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var AlumnoComponent_1 = require("./alumno/AlumnoComponent");
var AlumnoLista_Component_1 = require("./alumno/AlumnoLista.Component");
var Alumno_Titulo_pipe_1 = require("./alumno/Alumno.Titulo.pipe");
var AlumnosCount_Component_1 = require("./alumno/AlumnosCount.Component");
var Profesor_component_1 = require("./Profesores/Profesor.component");
var PaginaNoEncontrada_component_1 = require("./Otros/PaginaNoEncontrada.component");
var appRutas = [
    { path: 'Alumno', component: AlumnoLista_Component_1.AlumnoListaComponent },
    { path: 'Profesores', component: Profesor_component_1.ProfesorComponent },
    { path: '', redirectTo: '/Profesores', pathMatch: 'full' },
    { path: '**', component: PaginaNoEncontrada_component_1.PaginaNoEncontradaComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRutas)],
        declarations: [app_component_1.AppComponent, AlumnoComponent_1.AlumnoComponent, AlumnoLista_Component_1.AlumnoListaComponent, Alumno_Titulo_pipe_1.AlumnoTituloPipe, AlumnosCount_Component_1.AlumnosCountComponent, Profesor_component_1.ProfesorComponent, PaginaNoEncontrada_component_1.PaginaNoEncontradaComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map