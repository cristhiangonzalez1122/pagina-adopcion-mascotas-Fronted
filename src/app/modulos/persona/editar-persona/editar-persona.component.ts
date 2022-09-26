import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPersona } from 'src/app/models/persona.modelo';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  fgValidacion: FormGroup = this.fb.group({});
  id: number = 0;

  constructor(private fb: FormBuilder,
    private servicio: PersonaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ConstruirFormulario() {
    this.fgValidacion = this.fb.group({
      id: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      documento: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.ConstruirFormulario();
    this.id = this.route.snapshot.params["id"];
    this.servicio.BuscarRegistro(this.id).subscribe(
      (datos) =>{
        this.ObtenerFGV['id'].setValue(datos.id);
        this.ObtenerFGV['nombres'].setValue(datos.nombres);
        this.ObtenerFGV['apellidos'].setValue(datos.apellidos);
        this.ObtenerFGV['documento'].setValue(datos.documento);
        this.ObtenerFGV['direccion'].setValue(datos.direccion);
        this.ObtenerFGV['telefono'].setValue(datos.telefono);
      },
      (error) =>{
        alert("No se encuentra el registro.")
      }
    );
  }

  get ObtenerFGV() {
    return this.fgValidacion.controls;
  }

  ActualizarRegistro() {
    let id = this.ObtenerFGV['id'].value;
    let nom = this.ObtenerFGV['nombres'].value;
    let ape = this.ObtenerFGV['apellidos'].value;
    let doc = this.ObtenerFGV['documento'].value;
    let dir = this.ObtenerFGV['direccion'].value;
    let tel = this.ObtenerFGV['telefono'].value;
    let obj = new ModeloPersona();
    obj.nombres = nom;
    obj.apellidos = ape;
    obj.documento = doc;
    obj.direccion = dir;
    obj.telefono = tel;
    obj.id = id;
    this.servicio.ActualizarRegistro(obj).subscribe(
      (datos) => {
        alert("Registro actualizado correctamente.");
        this.router.navigate(["/persona/listar-persona"]);
      },
      (error) => {
        alert("Error actualizando el registro.");
      }
    );
  }
}
