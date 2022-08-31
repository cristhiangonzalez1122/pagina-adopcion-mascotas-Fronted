import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../services/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VerificadorSesionGuard implements CanActivate {

  constructor(private servicioSeguridad:SeguridadService,
    private router: Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let tieneSesionActiva = this.servicioSeguridad.obtenerToken() != "";
      if(tieneSesionActiva){
        return true;
      }else{
        this.router.navigate(['/index']);
        return false;
      }
  }

}
