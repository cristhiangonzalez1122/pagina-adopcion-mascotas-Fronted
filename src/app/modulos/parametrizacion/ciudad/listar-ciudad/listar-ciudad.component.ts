import { Component, OnInit } from '@angular/core';
import { ModeloDatosCiudad } from 'src/app/models/ciudad.modelo';
import { CuidadService } from 'src/app/services/cuidad.service';

@Component({
  selector: 'app-listar-ciudad',
  templateUrl: './listar-ciudad.component.html',
  styleUrls: ['./listar-ciudad.component.css']
})
export class ListarCiudadComponent implements OnInit {
  page: number = 1;
  listadoCiudad: ModeloDatosCiudad[] = [];

  constructor(private ciudadService: CuidadService) {}

  ngOnInit(): void {
    this.ObtenerListaCiudad();
  }

  ObtenerListaCiudad() {
    this.ciudadService
      .ListarRegistros()
      .subscribe((data: ModeloDatosCiudad[]) => {
        this.listadoCiudad = data;
      });
  }

  VerificarEliminacion(id?: number, nombre?: String){
    if(window.confirm("Relamente desea eliminar el registro de " + nombre)){
      let modelo = new ModeloDatosCiudad();
      modelo.id = id;
      modelo.nombre = nombre;
      this.ciudadService.EliminarRegistro(modelo).subscribe(
        (datos) =>{
          alert("El registro " + nombre + " ha sido eliminado correctamente");
          this.listadoCiudad = this.listadoCiudad.filter(x => x.id != id);
        },
        (error) =>{
          alert("Error eliminando el registro " + nombre)
        }
      );
    }
  }
}
