import { Component, OnInit } from '@angular/core';
import { ModeloDatosDepartamento } from 'src/app/models/departamento.modelo';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-listar-departamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.css'],
})
export class ListarDepartamentoComponent implements OnInit {
  pagina: number = 1;
  listadoDepto: ModeloDatosDepartamento[] = [];

  constructor(private deptoService: DepartamentoService) {}

  ngOnInit(): void {
    this.ObtenerListaDepto();
  }

  ObtenerListaDepto() {
    this.deptoService
      .obtenerRegistros()
      .subscribe((data: ModeloDatosDepartamento[]) => {
        this.listadoDepto = data;
      });
  }
}
