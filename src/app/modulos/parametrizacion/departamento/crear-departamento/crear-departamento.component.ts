import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloDatosDepartamento } from 'src/app/models/departamento.modelo';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-crear-departamento',
  templateUrl: './crear-departamento.component.html',
  styleUrls: ['./crear-departamento.component.css'],
})
export class CrearDepartamentoComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private serviceDepto: DepartamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  GuardarDepto() {
    const nombre = this.fgValidador.controls['nombre'].value;
    const d = new ModeloDatosDepartamento();
    d.nombre = nombre;
    this.serviceDepto.guardarRegistro(d).subscribe(
      (data: ModeloDatosDepartamento) => {
        alert('Creado con exito');
        this.router.navigate(['/parametros/listar-departamento']);
      },
      (error: any) => {
        alert('Error creando el item solicitado');
      }
  );
  }
}
