import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    InicioComponent,
    PublicacionesComponent
    
    
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    InicioComponent,
    PublicacionesComponent,
    FormsModule,
  ]
})
export class ComponentesModule { }
