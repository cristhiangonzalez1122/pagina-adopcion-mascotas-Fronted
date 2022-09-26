import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './eliminar-persona/eliminar-persona.component';
import { ListarPersonaComponent } from './listar-persona/listar-persona.component';

const routes: Routes = [
  {
    path: 'crear-persona',
    component: CrearPersonaComponent
  },
  {
    path: 'listar-persona',
    component: ListarPersonaComponent
  },
  {
    path: 'editar-persona/:id',
    component: EditarPersonaComponent
  },
  {
    path: 'eliminar-persona',
    component: EliminarPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
