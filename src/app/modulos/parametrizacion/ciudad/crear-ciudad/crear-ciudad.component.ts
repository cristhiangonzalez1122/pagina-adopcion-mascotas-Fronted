import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloDatosCiudad } from 'src/app/models/ciudad.modelo';
import { ModeloDatosDepartamento } from 'src/app/models/departamento.modelo';
import { CuidadService } from 'src/app/services/cuidad.service';
import { DepartamentoService } from 'src/app/services/departamento.service';


@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent implements OnInit {
  deptoListado: ModeloDatosDepartamento[] = [];
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'departamentoId': ['', [Validators.required]]
  });
  constructor(
    private fb: FormBuilder,
    private serviceCiudad: CuidadService,
    private router: Router,
    private serviceDepto: DepartamentoService
  ) {}

  ngOnInit(): void {
    this.serviceDepto.ListarRegistros().subscribe(
      (datos) => {
        this.deptoListado = datos;
      },
      (error) => {
        alert('error cargando los departamentos')
      }
    );
  }

  GuardarCiudad() {
    const nombre = this.fgValidador.controls['nombre'].value;
    const depto = this.fgValidador.controls['departamentoId'].value;
    const d = new ModeloDatosCiudad();
    d.nombre = nombre;
    d.departamentoId = depto;
    this.serviceCiudad.GuardarRegistro(d).subscribe(
      (data: ModeloDatosCiudad) => {
        alert('Creado con exito');
        this.router.navigate(['/parametros/listar-ciudad']);
      },
      (error: any) => {
        alert('Error creando el item solicitado, No tienes los permisos necesarios para relizar esta acción' + error.message);
      }
  );
  }

}
