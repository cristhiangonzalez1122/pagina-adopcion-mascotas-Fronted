import { Component, OnInit } from '@angular/core';
import { ModeloPersona } from 'src/app/models/persona.modelo';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {
  page: number = 1;
  listPerson: ModeloPersona[] = [];

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.ObtenerListaPersonas();
  }

  ObtenerListaPersonas() {
    this.personaService
      .ListarRegistros()
      .subscribe((data: ModeloPersona[]) => {
        this.listPerson = data;
      });
  }

  VerificarEliminacion(id?: number, nombre?: String){
    if(window.confirm("Relamente desea eliminar el registro de " + nombre)){
      let modelo = new ModeloPersona();
      modelo.id = id;
      modelo.nombres = nombre;
      this.personaService.EliminarRegistro(modelo).subscribe(
        (datos) =>{
          alert("El registro " + nombre + " ha sido eliminado correctamente");
          this.listPerson = this.listPerson.filter(x => x.id != id);
        },
        (error) =>{
          alert("Error eliminando el registro " + nombre)
        }
      );
    }
  }

}
