import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPersona } from 'src/app/models/persona.modelo';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'documento': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'telefono': ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private servicioPersona: PersonaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarPersona() {
    const nombre = this.fgValidador.controls['nombres'].value;
    const apellidos = this.fgValidador.controls['apellidos'].value;
    const documento = this.fgValidador.controls['documento'].value;
    const direccion = this.fgValidador.controls['direccion'].value;
    const telefono = this.fgValidador.controls['telefono'].value;
    const pers = new ModeloPersona();
    pers.nombres = nombre;
    pers.apellidos = apellidos;
    pers.documento = documento;
    pers.direccion = direccion;
    pers.telefono = telefono;
    this.servicioPersona.GuardarRegistro(pers).subscribe(
      (data: ModeloPersona) => {
        alert('almacenado  con exito');
        this.router.navigate(['/persona/listar-persona']);
      },
      (error: any) => {
        alert('Error creando el item solicitado, No tienes los permisos necesarios para relizar esta acción' + error.message);
      }
    );
  }
}

