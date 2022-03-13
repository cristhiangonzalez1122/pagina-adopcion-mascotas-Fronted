import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';
import { ResetearclaveComponent } from './resetearclave/resetearclave.component';
import { CambiarclaveComponent } from './cambiarclave/cambiarclave.component';


@NgModule({
  declarations: [
    IniciarsesionComponent,
    CerrarsesionComponent,
    ResetearclaveComponent,
    CambiarclaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
