import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/services/seguridad.service';
import * as cryptoJS from 'crypto-js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css'],
})
export class IniciarsesionComponent implements OnInit {
  fgValidacion: FormGroup = this.fb.group({
    usuario: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) { }


  ngOnInit(): void {

  }


  IdentificarUsuario() {
    let usuario = this.fgValidacion.controls["usuario"].value;
    let clave = this.fgValidacion.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos: any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(['/']);
    }, (error: any) => {
      alert('Datos incorrectos');
      //ko
    })
  }



}
