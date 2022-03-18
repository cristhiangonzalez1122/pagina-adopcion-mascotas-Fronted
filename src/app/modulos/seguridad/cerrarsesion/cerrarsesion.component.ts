import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-cerrarsesion',
  templateUrl: './cerrarsesion.component.html',
  styleUrls: ['./cerrarsesion.component.css']
})
export class CerrarsesionComponent implements OnInit {

  constructor(private securityService: SeguridadService, private router: Router) { }

  ngOnInit(): void {
    this.securityService.eliminarInformacionSesion();
    this.router.navigate(['/index'])
  }

}
