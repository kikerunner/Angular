"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.aplicarClases = "italica negrita";
        this.aplicarNegrita = true;
        this.aplicarColor = true;
        this.visible = true;
        this.visibles = true;
    }
    AppComponent.prototype.hacerClick = function () {
        if (this.visibles = false)
            this.visibles = true;
        else
            this.visibles = false;
    };
    AppComponent.prototype.alternar2 = function () {
        this.visibles = !this.visibles;
    };
    AppComponent.prototype.addClases = function () {
        var clases = {
            negrita: this.aplicarNegrita,
            color: this.aplicarColor
        };
        return clases;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n                <button class=\"color\">Boton 1</button>\n                <br/><br/>\n                <button [class]='aplicarClases'>Boton 2</button>\n                <br/><br/>                \n                <button class=\"color negrita italica\" [class.negrita] = 'aplicarNegrita'>Boton 3</button>\n                <br/><br/>\n                <button [ngClass]='addClases()'>Boton 4</button>\n                <img id=\"mejico\" src=\"mexico.jpg\" *ngIf='visible'>\n                <button (click) = 'hacerClick()'>ActuaImagen</button>\n                <el-alumno></el-alumno>\n                <table>\n                    <tr>\n                        <td><lista-alumnos></lista-alumnos></td>\n                    </tr>\n                </table>\n                <div style=\"padding:10px\">\n                    <ul class=\"nav nav-tabs\">\n                       <li><a routerLink=\"alumno\">Alumnos</a></li>\n                       <li><a routerLink=\"Profesores\"> Profesores</a></li>\n                    </ul>\n                    <router-outlet></router-outlet>\n               </div>\n                \n                \n",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map