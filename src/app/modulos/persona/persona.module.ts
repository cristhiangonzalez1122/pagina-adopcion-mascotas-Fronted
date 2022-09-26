import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { ListarPersonaComponent } from './listar-persona/listar-persona.component';
import { EliminarPersonaComponent } from './eliminar-persona/eliminar-persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    ListarPersonaComponent,
    EliminarPersonaComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ]
})
export class PersonaModule { }
