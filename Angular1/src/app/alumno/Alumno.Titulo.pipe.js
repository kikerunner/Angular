"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AlumnoTituloPipe = (function () {
    function AlumnoTituloPipe() {
    }
    AlumnoTituloPipe.prototype.transform = function (value, sexo) {
        if (sexo == 'hombre')
            return "Sr. " + value;
        else
            return "Sra. " + value;
    };
    return AlumnoTituloPipe;
}());
AlumnoTituloPipe = __decorate([
    core_1.Pipe({
        name: 'alumnoTitulo'
    })
], AlumnoTituloPipe);
exports.AlumnoTituloPipe = AlumnoTituloPipe;
//# sourceMappingURL=Alumno.Titulo.pipe.js.map