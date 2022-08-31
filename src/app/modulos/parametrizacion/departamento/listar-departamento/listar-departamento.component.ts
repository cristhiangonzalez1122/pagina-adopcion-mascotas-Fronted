import { Component, OnInit } from '@angular/core';
import { ModeloDatosDepartamento } from 'src/app/models/departamento.modelo';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-listar-departamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.css'],
})
export class ListarDepartamentoComponent implements OnInit {
  page: number = 1;
  listadoDepto: ModeloDatosDepartamento[] = [];

  constructor(private deptoService: DepartamentoService) {}

  ngOnInit(): void {
    this.ObtenerListaDepto();
  }

  ObtenerListaDepto() {
    this.deptoService
      .ListarRegistros()
      .subscribe((data: ModeloDatosDepartamento[]) => {
        this.listadoDepto = data;
      });
  }

  VerificarEliminacion(id?: number, nombre?: String){
    if(window.confirm("Relamente desea eliminar el registro de " + nombre)){
      let modelo = new ModeloDatosDepartamento();
      modelo.id = id;
      modelo.nombre = nombre;
      this.deptoService.EliminarRegistro(modelo).subscribe(
        (datos) =>{
          alert("El registro " + nombre + " ha sido eliminado correctamente");
          this.listadoDepto = this.listadoDepto.filter(x => x.id != id);
        },
        (error) =>{
          alert("Error eliminando el registro " + nombre)
        }
      );
    }
  }
}
