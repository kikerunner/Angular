export interface Ialumno {
    nombre: string;
    apellidos: string;
    direccion: string;
    fnac: string;
    sexo: string;
    nombre_padre?: string;
}

export class Alumno implements Ialumno {

    constructor(public nombre: string, public apellidos: string, public direccion: string, public fnac: string, public  sexo: string) {
        
    }
}