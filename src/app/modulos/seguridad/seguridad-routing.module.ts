import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarclaveComponent } from './cambiarclave/cambiarclave.component';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { ResetearclaveComponent } from './resetearclave/resetearclave.component';

const routes: Routes = [
  {
    path: 'iniciar-sesion',
    component: IniciarsesionComponent
  },
  {
    path: 'cerrarSesion',
    component: CerrarsesionComponent
  },
  {
    path: 'olvidoClave',
    component: ResetearclaveComponent
  },
  {
    path: 'cambiarClave',
    component: CambiarclaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
