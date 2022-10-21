import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full'
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./pages/ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./pages/restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'correcto',
    loadChildren: () => import('./pages/correcto/correcto.module').then( m => m.CorrectoPageModule)
  },
  {
    path: 'incorrecto',
    loadChildren: () => import('./pages/incorrecto/incorrecto.module').then( m => m.IncorrectoPageModule)
  },
  {
    path: 'correo',
    loadChildren: () => import('./pages/correo/correo.module').then( m => m.CorreoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
