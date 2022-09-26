import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './publico/errors/error404/error404.component';
import { IndexComponent } from './publico/index/index.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/index'
  },
  {
    path: 'parametros',
    loadChildren: () => import('./modulos/parametrizacion/parametrizacion.module').then(m => m.ParametrizacionModule)
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./modulos/seguridad/seguridad.module').then(s => s.SeguridadModule)
  },
  {
    path: 'mascota',
    loadChildren: () => import('./modulos/mascota/mascota.module').then(ma => ma.MascotaModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./modulos/usuario/usuario.module').then(u => u.UsuarioModule)
  },
  {
    path: 'persona',
    loadChildren: () => import('./modulos/persona/persona.module').then(u => u.PersonaModule)
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
