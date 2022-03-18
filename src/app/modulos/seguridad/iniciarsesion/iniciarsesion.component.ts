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
    correo: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private securityService: SeguridadService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  IdentificarUsuario() {
    const usuario = this.fgValidacion.controls['correo'].value;
    const clave = this.fgValidacion.controls['clave'].value;
    const claveCifrada = cryptoJS.MD5(clave).toString();
    this.securityService.Identificar(usuario, claveCifrada).subscribe(
      (datos: any) => {
        this.securityService.AlmacenarSesion(datos);
        this.router.navigate(['/index']);
      },
      (error: any) => {
        alert('datos invalidos');
      }
    );
  }
}
