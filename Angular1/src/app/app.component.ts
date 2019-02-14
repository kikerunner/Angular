import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
                <button class="color">Boton 1</button>
                <br/><br/>
                <button [class]='aplicarClases'>Boton 2</button>
                <br/><br/>                
                <button class="color negrita italica" [class.negrita] = 'aplicarNegrita'>Boton 3</button>
                <br/><br/>
                <button [ngClass]='addClases()'>Boton 4</button>
                <img id="mejico" src="mexico.jpg" *ngIf='visible'>
                <button (click) = 'hacerClick()'>ActuaImagen</button>
                <el-alumno></el-alumno>
                <table>
                    <tr>
                        <td><lista-alumnos></lista-alumnos></td>
                    </tr>
                </table>
                <div style="padding:10px">
                    <ul class="nav nav-tabs">
                       <li><a routerLink="alumno">Alumnos</a></li>
                       <li><a routerLink="Profesores"> Profesores</a></li>
                    </ul>
                    <router-outlet></router-outlet>
               </div>
                
                
`,//cosas que empiecen por ng Son directivas, y las utilizaremos para programar directamente en la web.
})
export class AppComponent  {
    aplicarClases: string = "italica negrita";
    aplicarNegrita: boolean = true;
    aplicarColor: boolean = true;

    visible: boolean = true;
    visibles: boolean = true;

    hacerClick(): void {
        if (this.visibles = false)
            this.visibles = true
        else
            this.visibles = false
    }

    alternar2(): void {
        this.visibles = !this.visibles
    }

    addClases() {
        let clases = {
            negrita: this.aplicarNegrita,
            color: this.aplicarColor
        }
        return clases;
    }
}
