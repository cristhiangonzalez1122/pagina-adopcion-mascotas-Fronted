import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/models/identificar.modelo';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  seInicioSesion: boolean = false;
  subs: Subscription = new Subscription();

  constructor(private securityService: SeguridadService) {}

  ngOnInit(): void {
    this.subs = this.securityService
      .obtenerDatosUsuarioSesion()
      .subscribe((datos: ModeloIdentificar) => {
        this.seInicioSesion = datos.isLogged;
      });
  }
}
