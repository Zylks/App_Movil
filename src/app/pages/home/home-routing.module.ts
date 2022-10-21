import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { PublicacionesComponent } from 'src/app/components/publicaciones/publicaciones.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'inicio',
        component: InicioComponent   
      },
      {
        path: 'publicaciones',
        component: PublicacionesComponent   
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
